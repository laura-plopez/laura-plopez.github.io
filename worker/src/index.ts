import type { Lang } from '../../src/types/portfolio';
import { systemPrompt } from './prompt';

interface Env {
  GEMINI_API_KEY: string;
  GEMINI_MODEL: string;
  GEMINI_THINKING_LEVEL: string;
  ALLOWED_ORIGINS: string;
  RATE_LIMITER: RateLimit;
}

const MAX_BODY_LENGTH = 2_000;
const MAX_QUESTION_LENGTH = 500;
const MAX_OUTPUT_TOKENS = 1_024;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

interface GeminiResponse {
  candidates?: { content?: { parts?: { text?: string }[] } }[];
}

function corsHeaders(origin: string, env: Env): Record<string, string> | undefined {
  if (!env.ALLOWED_ORIGINS.split(',').includes(origin)) return undefined;
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

const json = (body: object, status: number, headers: Record<string, string> = {}): Response =>
  Response.json(body, { status, headers });

function parseRequest(raw: string): { question: string; lang: Lang } | undefined {
  try {
    const body: unknown = JSON.parse(raw);
    if (typeof body !== 'object' || body === null) return undefined;
    const { question, lang } = body as Record<string, unknown>;
    if (typeof question !== 'string') return undefined;
    const trimmed = question.trim();
    if (!trimmed || trimmed.length > MAX_QUESTION_LENGTH) return undefined;
    return { question: trimmed, lang: lang === 'en' ? 'en' : 'es' };
  } catch {
    return undefined;
  }
}

async function askGemini(env: Env, question: string, lang: Lang): Promise<string | undefined> {
  const response = await fetch(`${GEMINI_URL}/${env.GEMINI_MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt(lang) }] },
      contents: [{ role: 'user', parts: [{ text: question }] }],
      generationConfig: {
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        thinkingConfig: { thinkingLevel: env.GEMINI_THINKING_LEVEL },
      },
    }),
  });

  if (!response.ok) {
    console.error(`Gemini responded ${response.status}`);
    return undefined;
  }

  const data: GeminiResponse = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('').trim();
  return text ? text.replace(/\*\*/g, '') : undefined;
}

export default {
  async fetch(request, env): Promise<Response> {
    const cors = corsHeaders(request.headers.get('Origin') ?? '', env);

    if (request.method === 'OPTIONS') return new Response(null, { status: cors ? 204 : 403, headers: cors });
    if (!cors) return json({ error: 'forbidden' }, 403);
    if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405, cors);

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const { success } = await env.RATE_LIMITER.limit({ key: ip });
    if (!success) return json({ error: 'rate_limited' }, 429, cors);

    const raw = await request.text();
    if (raw.length > MAX_BODY_LENGTH) return json({ error: 'too_large' }, 413, cors);

    const parsed = parseRequest(raw);
    if (!parsed) return json({ error: 'bad_request' }, 400, cors);

    try {
      const answer = await askGemini(env, parsed.question, parsed.lang);
      return answer ? json({ answer }, 200, cors) : json({ error: 'unavailable' }, 503, cors);
    } catch {
      console.error('Gemini request failed');
      return json({ error: 'unavailable' }, 503, cors);
    }
  },
} satisfies ExportedHandler<Env>;
