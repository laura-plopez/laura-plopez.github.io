import type { Lang, QA } from '@/types/portfolio';

const BOT_URL = 'https://portfolio-bot.portfolio-bot.workers.dev';
const BOT_TIMEOUT_MS = 20_000;
const MIN_WORD_LENGTH = 4;
const SHORT_KEYWORDS = new Set(['ia', 'ai', 'cv', 'api', 'rag', 'llm', 'mcp', 'n8n', 'gpt', 'sql', 'iot']);
const STOPWORDS = new Set([
  'laura', 'para', 'pero', 'como', 'esto', 'esta', 'este', 'estos', 'estas', 'sobre', 'donde', 'cuando',
  'puede', 'puedes', 'tiene', 'tienes', 'hace', 'haces', 'eres', 'todo', 'algo', 'mucho', 'hola',
  'trabaja', 'trabajas', 'trabajar', 'trabajado',
  'what', 'when', 'where', 'which', 'this', 'that', 'with', 'have', 'does', 'your', 'about', 'from',
  'they', 'there', 'would', 'could', 'should', 'hello', 'work', 'works', 'worked',
]);

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);

const keywords = (text: string): string[] =>
  tokenize(text).filter(
    (word) => (word.length >= MIN_WORD_LENGTH || SHORT_KEYWORDS.has(word)) && !STOPWORDS.has(word),
  );

const mentions = (tokens: string[], word: string): boolean =>
  tokens.some((token) =>
    word.length < MIN_WORD_LENGTH ? token === word : token.length >= MIN_WORD_LENGTH && (token.startsWith(word) || word.startsWith(token)),
  );

function findAnswer(question: string, knowledge: QA[]): string | undefined {
  const words = keywords(question);
  let best: { score: number; answer: string } | undefined;

  for (const entry of knowledge) {
    const questionTokens = tokenize(entry.question);
    const answerTokens = tokenize(entry.answer);
    const score = words.reduce(
      (total, word) => total + (mentions(questionTokens, word) ? 2 : 0) + (mentions(answerTokens, word) ? 1 : 0),
      0,
    );
    if (score > 0 && (!best || score > best.score)) best = { score, answer: entry.answer };
  }

  return best?.answer;
}

async function askModel(question: string, lang: Lang): Promise<string | undefined> {
  try {
    const response = await fetch(BOT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, lang }),
      signal: AbortSignal.timeout(BOT_TIMEOUT_MS),
    });
    if (!response.ok) return undefined;
    const { answer }: { answer?: unknown } = await response.json();
    return typeof answer === 'string' && answer ? answer : undefined;
  } catch {
    return undefined;
  }
}

export async function askAgent(question: string, lang: Lang, knowledge: QA[], fallback: string): Promise<string> {
  return (await askModel(question, lang)) ?? findAnswer(question, knowledge) ?? fallback;
}
