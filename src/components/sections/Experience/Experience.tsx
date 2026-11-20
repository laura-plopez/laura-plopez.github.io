import { useLayoutEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Timeline from '@/components/sections/Experience/Timeline';
import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { useContent } from '@/hooks/useLanguage';
import type { TimelineEntry, TimelineTab } from '@/types/portfolio';

const TABS: TimelineTab[] = ['work', 'edu', 'certs', 'langs'];

function Rows({ entries, kind }: { entries: TimelineEntry[]; kind: 'certs' | 'langs' }) {
  return (
    <ul>
      {entries.map((entry, index) => (
        <li
          key={entry.title}
          className="-mx-5 grid animate-rise gap-1 px-5 py-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          <span className="pt-0.5 text-[13px] font-medium text-ink-muted">
            {entry.org}
            {kind === 'certs' && entry.when && <span className="block">{entry.when}</span>}
          </span>
          <div>
            <h3 className="text-[17px] font-semibold leading-[1.35]">{entry.title}</h3>
            {entry.note && <p className="mt-1 max-w-[62ch] text-[15px] text-ink-muted">{entry.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  const { experience, sections } = useContent();
  const [tab, setTab] = useState<TimelineTab>('work');
  const tabRefs = useRef<Partial<Record<TimelineTab, HTMLButtonElement>>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const button = tabRefs.current[tab];
      if (button) setIndicator({ left: button.offsetLeft, width: button.offsetWidth });
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [tab, experience.tabs]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    const next = TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length];
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  const entries = experience.timeline[tab];

  return (
    <Section id="experience">
      <Reveal>
        <div
          role="tablist"
          aria-label={sections.experience.title}
          onKeyDown={handleKeyDown}
          className="relative mb-6 flex gap-1 overflow-x-auto border-b border-line scrollbar-none"
        >
          {TABS.map((id) => (
            <button
              key={id}
              ref={(node) => {
                if (node) tabRefs.current[id] = node;
              }}
              id={`tab-${id}`}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`panel-${id}`}
              tabIndex={tab === id ? 0 : -1}
              onClick={() => setTab(id)}
              className={`whitespace-nowrap px-2.5 py-2.5 text-sm transition-colors duration-200 hover:text-ink sm:px-3.5 ${
                tab === id ? 'font-semibold text-ink' : 'font-medium text-ink-muted'
              }`}
            >
              {experience.tabs[id]}
            </button>
          ))}
          <span
            aria-hidden="true"
            className="absolute -bottom-px h-0.5 bg-ink transition-[left,width] duration-[400ms] ease-out-expo"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>

        <div key={tab} id={`panel-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`} tabIndex={0}>
          {tab === 'work' || tab === 'edu' ? (
            <Timeline entries={entries} highlightFirst={tab === 'work'} />
          ) : (
            <Rows entries={entries} kind={tab} />
          )}
        </div>
      </Reveal>
    </Section>
  );
}

export default Experience;
