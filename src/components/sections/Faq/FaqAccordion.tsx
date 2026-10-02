import { useId, useState } from 'react';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';
import type { QA } from '@/types/portfolio';

interface FaqAccordionProps {
  items: QA[];
}

function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-${index}`;
        return (
          <div
            key={item.question}
            className={`animate-rise rounded-card transition-colors duration-200 ${
              open ? 'bg-main text-white' : 'bg-white text-ink'
            }`}
            style={animationDelay(0.05 * index + 0.1)}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="grid w-full grid-cols-[40px_minmax(0,1fr)_24px] items-baseline gap-3 px-6 py-[22px] text-left"
            >
              <span className="font-mono text-xs opacity-70">{pad2(index + 1)}</span>
              <span className="text-row font-bold">{item.question}</span>
              <span aria-hidden="true" className="text-right font-mono text-lg">{open ? '−' : '+'}</span>
            </button>
            {open && (
              <p id={panelId} className="max-w-[860px] pb-6 pl-[76px] pr-12 text-[17px] leading-[1.55] text-pretty">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
