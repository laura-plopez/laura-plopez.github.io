import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';

const LABEL = 'font-mono text-xs uppercase tracking-[.08em]';
const BUTTON = `${LABEL} border-2 px-4 py-2.5 transition-colors duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`;
const BUTTON_IDLE = 'border-white/60 text-white hover:bg-white hover:text-ink';

interface BriefsProps {
  delay: number;
}

function Briefs({ delay }: BriefsProps) {
  const { home } = useContent();
  const { briefs } = home;
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const total = briefs.items.length;
  const brief = briefs.items[index];
  const last = index === total - 1;

  const go = (step: number) => {
    setIndex((current) => (current + step + total) % total);
    setRevealed(false);
  };

  return (
    <section
      className="flex animate-rise flex-col gap-7 rounded-panel bg-main bg-dots bg-[length:16px_16px] p-[clamp(20px,2.5vw,32px)] text-white"
      style={animationDelay(delay)}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className={`${LABEL} text-accent`}>
            ▶ {briefs.kicker}
            <span className="animate-blink">_</span>
          </span>
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-heading">{briefs.title}</h2>
          <p className="max-w-[520px] text-[15px] leading-[1.45] opacity-70">{briefs.intro}</p>
        </div>
        <div className={`${LABEL} flex flex-col items-end gap-2`}>
          <span>
            {briefs.level} {pad2(index + 1)}/{pad2(total)}
          </span>
          <span aria-hidden="true" className="flex gap-1">
            {briefs.items.map((item, position) => (
              <span key={item.asked} className={`size-2.5 ${position <= index ? 'bg-accent' : 'bg-white/20'}`} />
            ))}
          </span>
        </div>
      </div>

      <div key={index} className="grid animate-rise gap-4 wide:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col gap-4 border-2 border-white/80 p-5 shadow-[6px_6px_0_0_rgba(255,255,255,.2)]">
          <span className={`${LABEL} opacity-70`}>{briefs.asked}</span>
          <span className="text-row font-bold text-pretty">“{brief.asked}”</span>
        </div>
        <span aria-hidden="true" className="rotate-90 self-center justify-self-center font-mono text-2xl text-accent wide:rotate-0">
          →
        </span>
        <button
          type="button"
          onClick={() => setRevealed((value) => !value)}
          className="flex flex-col gap-4 border-2 border-accent p-5 text-left shadow-[6px_6px_0_0_theme(colors.accent.DEFAULT)] transition-colors duration-200 hover:bg-accent/[.06]"
        >
          <span className={`${LABEL} text-accent`}>{briefs.needed}</span>
          <span aria-live="polite" className="relative">
            <span
              aria-hidden={!revealed}
              className={`block text-row font-bold text-pretty motion-safe:transition-[filter] motion-safe:duration-500 ${
                revealed ? '' : 'select-none blur-[7px]'
              }`}
            >
              {brief.needed}
            </span>
            {!revealed && (
              <span className={`${LABEL} absolute inset-0 grid place-items-center bg-pixels bg-[length:10px_10px] text-accent`}>
                {briefs.reveal}
              </span>
            )}
          </span>
        </button>
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" onClick={() => go(-1)} className={`${BUTTON} ${BUTTON_IDLE}`}>
          ← {briefs.prev}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className={`${BUTTON} ${
            revealed ? 'border-accent bg-accent text-ink shadow-[4px_4px_0_0_theme(colors.white)]' : BUTTON_IDLE
          }`}
        >
          {last ? `${briefs.restart} ↺` : `${briefs.next} →`}
        </button>
      </div>
    </section>
  );
}

export default Briefs;
