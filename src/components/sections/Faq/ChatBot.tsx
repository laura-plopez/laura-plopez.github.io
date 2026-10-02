import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useContent } from '@/hooks/useLanguage';
import { askBot } from '@/lib/bot';
import { animationDelay } from '@/lib/motion';

const TYPE_TICK_MS = 18;
const CHARS_PER_TICK = 3;

interface Message {
  role: 'user' | 'bot';
  text: string;
}

function Bubble({ role, text }: Message) {
  const mine = role === 'user';
  return (
    <div className={`flex animate-rise ${mine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[86%] whitespace-pre-wrap px-[15px] py-[11px] text-[15px] leading-normal ${
          mine ? 'rounded-[16px_16px_4px_16px] bg-accent text-ink' : 'rounded-[16px_16px_16px_4px] bg-white/10 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function ChatBot() {
  const content = useContent();
  const { bot } = content;
  const reducedMotion = usePrefersReducedMotion();
  const threadRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [revealed, setRevealed] = useState(0);

  const last = messages.at(-1);
  const typing = last?.role === 'bot' && revealed < last.text.length;
  const busy = pending || typing;

  useEffect(() => {
    if (!typing) return;
    const timeoutId = setTimeout(() => setRevealed((count) => count + CHARS_PER_TICK), TYPE_TICK_MS);
    return () => clearTimeout(timeoutId);
  }, [typing, revealed]);

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTop = thread.scrollHeight;
  }, [messages, revealed, pending]);

  const ask = async (question: string) => {
    const text = question.trim();
    if (!text || busy) return;

    setMessages((current) => [...current, { role: 'user', text }]);
    setInput('');
    setPending(true);

    const answer = await askBot(text, content);
    setRevealed(reducedMotion ? answer.length : 0);
    setMessages((current) => [...current, { role: 'bot', text: answer }]);
    setPending(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void ask(input);
  };

  const asked = new Set(messages.filter((message) => message.role === 'user').map((message) => message.text));
  const suggestions = bot.suggestions.filter((suggestion) => !asked.has(suggestion.question));

  return (
    <div
      className="sticky top-4 flex h-[clamp(480px,70vh,640px)] animate-rise flex-col gap-3.5 rounded-panel bg-main p-5 text-white"
      style={animationDelay(0.25)}
    >
      <div className="flex flex-col gap-0.5 border-b border-white/[.14] pb-3.5">
        <span className="text-xl font-bold tracking-snug">{bot.title}</span>
        <span className="font-mono text-[11px] opacity-65">{bot.subtitle}</span>
      </div>

      <div ref={threadRef} className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pr-1 scrollbar-thin">
        <Bubble role="bot" text={bot.greeting} />
        {messages.map((message, index) => {
          const isTyping = typing && index === messages.length - 1;
          return (
            <Bubble
              key={index}
              role={message.role}
              text={isTyping ? `${message.text.slice(0, revealed)}▍` : message.text}
            />
          );
        })}
        {pending && <Bubble role="bot" text="···" />}
      </div>

      {suggestions.length > 0 && (
        <div className="flex shrink-0 gap-1.5 overflow-x-auto scrollbar-none">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.question}
              type="button"
              onClick={() => void ask(suggestion.question)}
              className="shrink-0 whitespace-nowrap rounded-full border border-white/30 px-3 py-1.5 text-[13px] transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              {suggestion.question}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex shrink-0 gap-1.5 rounded-full bg-white/[.08] p-[5px]">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={bot.placeholder}
          aria-label={bot.placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[15px] text-white outline-none placeholder:text-ink-muted"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-ink disabled:opacity-50"
        >
          {bot.send} ↑
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
