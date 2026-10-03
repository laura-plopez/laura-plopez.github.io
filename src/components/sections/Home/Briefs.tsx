import { useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';

const ARROW =
  'grid size-9 place-items-center rounded-full border-[1.5px] border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-white';

interface BriefsProps {
  delay: number;
}

function Briefs({ delay }: BriefsProps) {
  const { home } = useContent();
  const { briefs } = home;
  const [index, setIndex] = useState(0);

  const total = briefs.items.length;
  const brief = briefs.items[index];
  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <section className="flex animate-rise flex-col gap-4" style={animationDelay(delay)}>
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[13px] text-main">{briefs.title}</span>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(-1)} aria-label={briefs.prev} className={ARROW}>
            ←
          </button>
          <span className="font-mono text-xs text-ink-muted">
            {pad2(index + 1)} / {pad2(total)}
          </span>
          <button type="button" onClick={() => go(1)} aria-label={briefs.next} className={ARROW}>
            →
          </button>
        </div>
      </div>

      <div aria-live="polite">
        <div key={index} className="grid animate-rise grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-2">
          <div className="flex flex-col gap-4 rounded-card bg-white p-6 text-ink">
            <span className="font-mono text-xs text-ink-muted">{briefs.asked}</span>
            <span className="text-row font-bold text-pretty">“{brief.asked}”</span>
          </div>
          <div className="flex flex-col gap-4 rounded-card bg-main p-6 text-white">
            <span className="font-mono text-xs text-accent">{briefs.needed}</span>
            <span className="text-row font-bold text-pretty">{brief.needed}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Briefs;
