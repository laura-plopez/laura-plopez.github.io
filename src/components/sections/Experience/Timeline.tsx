import type { CSSProperties } from 'react';
import type { TimelineEntry } from '@/types/portfolio';

interface TimelineProps {
  entries: TimelineEntry[];
  highlightFirst?: boolean;
}

function Timeline({ entries, highlightFirst = false }: TimelineProps) {
  return (
    <ol>
      {entries.map((entry, index) => (
        <li
          key={`${entry.title}-${entry.when}`}
          className="grid grid-cols-[28px_minmax(0,1fr)] sm:grid-cols-[144px_40px_minmax(0,1fr)]"
        >
          <span className="col-start-2 row-start-1 mb-1 text-[13px] font-medium text-ink-muted sm:col-start-1 sm:mb-0 sm:pt-px">
            <b className="mr-1.5 font-semibold text-ink sm:mr-0 sm:block">{entry.when}</b>
            {entry.duration}
          </span>
          <span
            aria-hidden="true"
            className="tl-rail col-start-1 row-span-2 row-start-1 sm:col-start-2 sm:row-span-1"
            style={{ '--i': index } as CSSProperties}
            data-current={highlightFirst && index === 0 ? '' : undefined}
            data-last={index === entries.length - 1 ? '' : undefined}
          />
          <div className={`col-start-2 sm:col-start-3 ${index === entries.length - 1 ? 'pb-2' : 'pb-8'}`}>
            <h3 className="text-[17px] font-semibold leading-[1.3]">{entry.title}</h3>
            <p className="mt-0.5 text-[15px] font-medium text-ink-soft">{entry.org}</p>
            {entry.note && <p className="mt-1.5 max-w-[62ch] text-[15px] text-ink-muted">{entry.note}</p>}
            {entry.tags.length > 0 && (
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line bg-white px-[9px] py-0.5 text-xs font-medium text-ink-soft">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
