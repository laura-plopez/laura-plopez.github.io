import type { QA, SiteContent } from '@/types/portfolio';

const MIN_WORD_LENGTH = 4;
const SHORT_KEYWORDS = new Set(['ia', 'ai', 'cv', 'api', 'rag', 'llm', 'sql', 'seo', 'iot', 'php']);
const STOPWORDS = new Set([
  'laura', 'para', 'pero', 'como', 'esto', 'esta', 'este', 'estos', 'estas', 'sobre', 'donde', 'cuando',
  'puede', 'puedes', 'tiene', 'tienes', 'hace', 'haces', 'eres', 'todo', 'algo', 'mucho', 'hola',
  'what', 'when', 'where', 'which', 'this', 'that', 'with', 'have', 'does', 'your', 'about', 'from',
  'they', 'there', 'would', 'could', 'should', 'hello',
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

export function findAnswer(question: string, knowledge: QA[]): string | undefined {
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

export async function askBot(question: string, content: Pick<SiteContent, 'bot' | 'faq'>): Promise<string> {
  return findAnswer(question, [...content.bot.suggestions, ...content.faq.items]) ?? content.bot.fallback;
}
