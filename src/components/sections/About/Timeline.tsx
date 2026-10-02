import { animationDelay } from '@/lib/motion';
import type { TimelineEntry } from '@/types/portfolio';

interface TimelineProps {
  entries: TimelineEntry[];
}

function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="flex flex-col gap-2">
      {entries.map((entry, index) => (
        <li
          key={entry.title}
          className="grid animate-rise grid-cols-[20px_minmax(0,1fr)] gap-4"
          style={animationDelay(0.08 * index)}
        >
          <div className="flex flex-col items-center">
            <span className="mt-[22px] h-3 w-3 shrink-0 rounded-full bg-main" />
            <span
              className="w-[1.5px] flex-1 origin-top animate-draw bg-line-strong"
              style={animationDelay(0.08 * index + 0.2)}
            />
          </div>
          <div className="flex flex-col gap-1.5 rounded-row bg-white px-5 py-4">
            {(entry.when || entry.duration) && (
              <span className="flex justify-between gap-3 font-mono text-[11px] uppercase tracking-[.08em]">
                <span className="text-main">{entry.when}</span>
                <span className="text-ink-muted">{entry.duration}</span>
              </span>
            )}
            <span className="text-xl font-bold leading-[1.1] tracking-snug">{entry.title}</span>
            {entry.org && <span className="text-[15px] font-semibold">{entry.org}</span>}
            {entry.note && <span className="text-[15px] leading-[1.45] text-ink-subtle">{entry.note}</span>}
            {entry.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-surface px-[9px] py-[3px] font-mono text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
