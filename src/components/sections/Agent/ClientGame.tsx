import { useEffect, useRef, useState } from 'react';
import type { Mood } from '@/components/sections/Agent/Mascot';
import { ArrowRight, Check, Close } from '@/components/ui/Icons/Icons';
import { useContent } from '@/hooks/useLanguage';
import { fill, shuffle } from '@/lib/format';

type OptionKey = 'right' | 0 | 1;

const LETTERS = ['A', 'B', 'C'];
const REACTION_MS = 1600;
const VERDICT_REACTION_MS = 2000;
const GOOD_SCORE = 3;

const newOrder = (): OptionKey[] => shuffle<OptionKey>(['right', 0, 1]);

interface ClientGameProps {
  onReact: (mood: Mood, label: string, ms: number) => void;
  onExit: (summary?: string) => void;
}

function ClientGame({ onReact, onExit }: ClientGameProps) {
  const { agent } = useContent();
  const { game } = agent;
  const total = game.cases.length;
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState<OptionKey[]>(newOrder);
  const [picked, setPicked] = useState<OptionKey | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const [rightLine, setRightLine] = useState(game.rightLines[0]);
  const nextRef = useRef<HTMLButtonElement>(null);

  const current = game.cases[index];
  const score = results.filter(Boolean).length;
  const last = index === total - 1;

  useEffect(() => {
    if (picked !== null) nextRef.current?.focus({ preventScroll: true });
  }, [picked]);

  const optionText = (key: OptionKey) => (key === 'right' ? current.right : current.wrong[key]);

  const pick = (key: OptionKey) => {
    if (picked !== null) return;
    const ok = key === 'right';
    setPicked(key);
    setResults((previous) => [...previous, ok]);
    setRightLine(game.rightLines[Math.floor(Math.random() * game.rightLines.length)]);
    onReact(ok ? 'happy' : 'oops', ok ? game.solved : game.almost, REACTION_MS);
  };

  const next = () => {
    if (last) {
      const finalScore = results.filter(Boolean).length;
      setFinished(true);
      onReact(finalScore >= GOOD_SCORE ? 'happy' : 'oops', finalScore >= GOOD_SCORE ? game.wellPlayed : game.nextTime, VERDICT_REACTION_MS);
      return;
    }
    setIndex(index + 1);
    setOrder(newOrder());
    setPicked(null);
  };

  const restart = () => {
    setIndex(0);
    setOrder(newOrder());
    setPicked(null);
    setResults([]);
    setFinished(false);
  };

  const progress = (
    <span className="flex gap-[5px]" aria-hidden="true">
      {game.cases.map((_, k) => (
        <i
          key={k}
          className={`h-1 w-[18px] rounded-sm transition-colors duration-300 ${
            k < results.length ? (results[k] ? 'bg-ok' : 'bg-ko') : k === index && !finished ? 'bg-ink' : 'bg-line'
          }`}
        />
      ))}
    </span>
  );

  const header = (meta: string) => (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line px-[18px] py-3 text-[13px] text-ink-muted">
      <b className="font-semibold text-ink">{game.title}</b>
      <span className="flex items-center gap-3 whitespace-nowrap tabular-nums">
        {meta}
        {progress}
      </span>
    </div>
  );

  const verdict = score === total ? game.verdicts.perfect : score >= GOOD_SCORE ? game.verdicts.good : game.verdicts.low;

  return (
    <div className="flex flex-col p-3.5 sm:min-h-[500px] sm:p-[22px]">
      <div key={finished ? 'end' : index} className="animate-rise overflow-hidden rounded-[14px] border border-line bg-white">
        {finished ? (
          <>
            {header(game.result)}
            <div className="grid justify-items-start gap-2 px-[18px] py-7">
              <p className="text-5xl font-bold leading-none tracking-[-0.03em]">
                {score}
                <span className="text-lg font-medium tracking-normal text-ink-muted"> / {total} {game.scoreLabel}</span>
              </p>
              <p className="max-w-[52ch] text-[15px] text-ink-soft">{verdict}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button type="button" onClick={restart} className="rounded-full bg-ink px-[15px] py-[9px] text-[13px] font-semibold text-white">
                  {game.again}
                </button>
                <button
                  type="button"
                  onClick={() => onExit(fill(game.summary, { score, total }))}
                  className="rounded-full border border-line bg-white px-[15px] py-[9px] text-[13px] font-semibold"
                >
                  {game.backToChat}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {header(fill(game.caseOf, { n: index + 1, total }))}
            <div className="px-[18px] pb-1 pt-[22px]">
              <p className="text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[22px]">«{current.asked}»</p>
            </div>
            <p className="px-[18px] pb-3.5 pt-1.5 text-sm text-ink-muted">{game.question}</p>
            <div className="grid gap-2 px-[18px] pb-[18px]">
              {order.map((key, k) => {
                const isRight = key === 'right';
                const state =
                  picked === null ? 'idle' : isRight ? 'right' : key === picked ? 'wrong' : 'dim';
                return (
                  <button
                    key={String(key)}
                    type="button"
                    disabled={picked !== null}
                    onClick={() => pick(key)}
                    style={{ animationDelay: `${0.1 + k * 0.08}s` }}
                    className={`flex animate-rise items-center gap-3 rounded-[10px] border px-3.5 py-2.5 text-left text-[15px] leading-[1.4] transition-[border-color,background-color,transform,opacity] duration-200 sm:min-h-14 ${
                      state === 'idle' ? 'border-line bg-white hover:translate-x-[3px] hover:border-ink' : ''
                    } ${state === 'right' ? 'border-ok bg-ok-tint' : ''} ${
                      state === 'wrong' ? 'animate-shake border-ko bg-ko-tint' : ''
                    } ${state === 'dim' ? 'border-line opacity-[.45]' : ''}`}
                  >
                    <span
                      className={`grid h-[26px] w-[26px] flex-none place-items-center rounded-[7px] border text-xs font-semibold ${
                        state === 'right' ? 'border-ok bg-ok text-white' : state === 'wrong' ? 'border-ko bg-ko text-white' : 'border-line'
                      }`}
                    >
                      {state === 'right' ? <Check /> : LETTERS[k]}
                    </span>
                    <span>{optionText(key)}</span>
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <div className="flex animate-rise flex-wrap items-center justify-between gap-x-4 gap-y-2.5 border-t border-line bg-canvas px-[18px] py-3 text-sm">
                <span role="status">{picked === 'right' ? rightLine : game.wrongLine}</span>
                <button
                  ref={nextRef}
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-[15px] py-[9px] text-[13px] font-semibold text-white transition-transform duration-200 hover:translate-x-0.5"
                >
                  {last ? game.seeResult : game.next}
                  <ArrowRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {!finished && (
        <button
          type="button"
          onClick={() => onExit(results.length ? fill(game.paused, { score, total: results.length }) : undefined)}
          className="mt-3.5 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-ink-muted transition-colors duration-200 hover:text-ink"
        >
          <Close />
          {game.exit}
        </button>
      )}
    </div>
  );
}

export default ClientGame;
