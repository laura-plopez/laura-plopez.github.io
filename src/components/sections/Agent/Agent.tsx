import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import ClientGame from '@/components/sections/Agent/ClientGame';
import Mascot from '@/components/sections/Agent/Mascot';
import type { Mood } from '@/components/sections/Agent/Mascot';
import { Play } from '@/components/ui/Icons/Icons';
import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { askAgent } from '@/lib/bot';
import { scrollBehavior } from '@/lib/motion';

const TYPE_TICK_MS = 14;
const CHARS_PER_TICK = 2;

interface Message {
  role: 'user' | 'agent';
  text: string;
}

interface Reaction {
  mood: Mood;
  label: string;
}

function Agent() {
  const { lang } = useLanguage();
  const { agent } = useContent();
  const reducedMotion = usePrefersReducedMotion();
  const logRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reactionTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [asked, setAsked] = useState<ReadonlySet<string>>(new Set());
  const [playing, setPlaying] = useState(false);
  const [reaction, setReaction] = useState<Reaction | null>(null);

  const last = messages.at(-1);
  const typing = last?.role === 'agent' && revealed < last.text.length;
  const busy = pending || typing;

  const mood: Mood = reaction?.mood ?? (pending ? 'thinking' : typing ? 'talking' : 'idle');
  const status = reaction?.label ?? (pending ? agent.status.thinking : typing ? agent.status.talking : agent.status.idle);
  const statusDot = { idle: 'bg-ok', thinking: 'bg-accent', talking: 'bg-ok', happy: 'bg-warn', oops: 'bg-ko' }[mood];

  useEffect(() => {
    if (!typing) return;
    const timeout = setTimeout(() => setRevealed((count) => count + CHARS_PER_TICK), TYPE_TICK_MS);
    return () => clearTimeout(timeout);
  }, [typing, revealed]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, revealed, pending, playing]);

  useEffect(() => () => clearTimeout(reactionTimer.current), []);

  useEffect(() => {
    if (!playing) return;
    const box = stageRef.current?.getBoundingClientRect();
    if (box && (box.top < 0 || box.bottom > window.innerHeight)) {
      stageRef.current?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    }
  }, [playing]);

  const react = (nextMood: Mood, label: string, ms: number) => {
    clearTimeout(reactionTimer.current);
    setReaction({ mood: nextMood, label });
    reactionTimer.current = setTimeout(() => setReaction(null), ms);
  };

  const ask = async (question: string) => {
    const text = question.trim();
    if (!text || busy) return;
    setPlaying(false);
    setMessages((current) => [...current, { role: 'user', text }]);
    setInput('');
    setPending(true);
    const answer = await askAgent(text, lang, agent.suggestions, agent.fallback);
    setRevealed(reducedMotion ? answer.length : 0);
    setMessages((current) => [...current, { role: 'agent', text: answer }]);
    setPending(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void ask(input);
  };

  const askSuggestion = (question: string) => {
    if (busy) return;
    setAsked((current) => new Set(current).add(question));
    void ask(question);
  };

  const exitGame = (summary?: string) => {
    setPlaying(false);
    if (summary) {
      setRevealed(summary.length);
      setMessages((current) => [...current, { role: 'agent', text: summary }]);
    }
  };

  const announcement = last?.role === 'agent' && !typing ? last.text : '';

  return (
    <Section id="agent">
      <Reveal>
        <div className="overflow-hidden rounded-[18px] border border-line bg-white">
          <div className="flex items-center gap-4 border-b border-line px-[22px] py-3.5">
            <Mascot mood={mood} />
            <div>
              <p className="text-base font-semibold">{agent.name}</p>
              <p className="inline-flex min-h-[1.6em] items-center gap-1.5 text-[13px] text-ink-muted">
                <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${statusDot}`} />
                {status}
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="flex min-w-0 flex-col">
              {playing ? (
                <div ref={stageRef} className="scroll-mt-4">
                  <ClientGame onReact={react} onExit={exitGame} />
                </div>
              ) : (
                <div
                  ref={logRef}
                  role="log"
                  aria-label={agent.name}
                  tabIndex={0}
                  className="flex h-[380px] flex-col gap-2.5 overflow-y-auto p-[22px] lg:h-[500px]"
                >
                  <Bubble role="agent" text={agent.greeting} />
                  {messages.map((message, index) => (
                    <Bubble
                      key={index}
                      role={message.role}
                      text={typing && index === messages.length - 1 ? message.text.slice(0, revealed) : message.text}
                    />
                  ))}
                  {pending && (
                    <div className="max-w-[78%] animate-rise self-start rounded-[14px] rounded-bl-[4px] bg-tint px-3.5 py-3">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="mr-[3px] inline-block h-1.5 w-1.5 animate-dot rounded-full bg-ink-muted"
                          style={{ animationDelay: `${dot * 0.15}s` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              <p aria-live="polite" className="sr-only">{announcement}</p>

              <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line px-[22px] py-3.5">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={agent.placeholder}
                  aria-label={agent.placeholder}
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-full border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy}
                  className="rounded-full bg-ink px-[18px] py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {agent.send}
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-2 border-t border-line bg-canvas p-[18px] xl:border-l xl:border-t-0">
              <div className="relative mb-3.5 grid gap-1 overflow-hidden rounded-xl bg-ink p-4 text-white after:absolute after:-right-6 after:-top-6 after:h-24 after:w-24 after:rounded-full after:border-[14px] after:border-white/[.06] after:content-['']">
                <b className="text-[15px]">{agent.game.title}</b>
                <span className="text-[13px] leading-[1.45] text-[#c9c9d1]">{agent.game.pitch}</span>
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="relative z-[1] mt-2.5 inline-flex items-center gap-1.5 justify-self-start rounded-full bg-white px-3.5 py-[7px] text-[13px] font-semibold text-ink transition-transform duration-300 ease-out-expo hover:translate-x-[3px]"
                >
                  <Play />
                  {agent.game.play}
                </button>
              </div>
              <h3 className="px-0.5 pb-1 text-[13px] font-semibold text-ink-muted">{agent.suggestionsTitle}</h3>
              <ul className="flex flex-wrap gap-1.5 xl:flex-col">
                {agent.suggestions.map(({ question }) => (
                  <li key={question}>
                    <button
                      type="button"
                      onClick={() => askSuggestion(question)}
                      disabled={busy}
                      className={`w-full rounded-[10px] border border-line bg-white px-3 py-[9px] text-left text-[13px] transition-[border-color,background-color,color,opacity] duration-200 hover:border-accent hover:bg-accent-tint hover:text-accent disabled:cursor-wait ${
                        asked.has(question) ? 'opacity-50' : ''
                      }`}
                    >
                      {question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="border-t border-line bg-canvas px-[22px] py-2.5 text-xs text-ink-muted">{agent.disclaimer}</p>
        </div>
      </Reveal>
    </Section>
  );
}

function Bubble({ role, text }: Message) {
  const mine = role === 'user';
  return (
    <div
      className={`max-w-[88%] animate-rise whitespace-pre-wrap rounded-[14px] px-3.5 py-2.5 text-[15px] leading-[1.55] lg:max-w-[78%] ${
        mine ? 'self-end rounded-br-[4px] bg-ink text-white' : 'self-start rounded-bl-[4px] bg-tint'
      }`}
    >
      {text}
    </div>
  );
}

export default Agent;
