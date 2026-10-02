import type { QA, SiteContent } from '@/types/portfolio';

const MIN_WORD_LENGTH = 4;
const STOPWORDS = new Set(['laura', 'hace', 'tiene', 'sobre', 'como', 'what', 'does', 'have', 'with', 'about', 'your']);

const normalize = (text: string): string =>
  text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const keywords = (text: string): string[] =>
  normalize(text)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length >= MIN_WORD_LENGTH && !STOPWORDS.has(word));

export function findAnswer(question: string, knowledge: QA[]): string | undefined {
  const words = keywords(question);
  let best: { score: number; answer: string } | undefined;

  for (const entry of knowledge) {
    const entryQuestion = normalize(entry.question);
    const entryAnswer = normalize(entry.answer);
    const score = words.reduce(
      (total, word) => total + (entryQuestion.includes(word) ? 2 : 0) + (entryAnswer.includes(word) ? 1 : 0),
      0,
    );
    if (score > 0 && (!best || score > best.score)) best = { score, answer: entry.answer };
  }

  return best?.answer;
}

export async function askBot(question: string, content: Pick<SiteContent, 'bot' | 'faq'>): Promise<string> {
  return findAnswer(question, [...content.bot.suggestions, ...content.faq.items]) ?? content.bot.fallback;
}
