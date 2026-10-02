import { useState } from 'react';
import Timeline from '@/components/sections/About/Timeline';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { useContent } from '@/hooks/useLanguage';
import type { TimelineTab } from '@/types/portfolio';

const TIMELINE_TABS: TimelineTab[] = ['work', 'edu', 'courses', 'langs'];

function About() {
  const { tabs, about } = useContent();
  const [timelineTab, setTimelineTab] = useState<TimelineTab>('work');

  return (
    <div className="flex flex-col gap-10">
      <PageHeader title={tabs.about} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(32px,5vw,64px)]">
        <div className="flex flex-col gap-[22px]">
          <p className="text-[clamp(28px,2.6vw,40px)] font-semibold leading-[1.08] tracking-heading text-balance">
            {about.lead}
          </p>
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-[1.55] text-ink-soft text-pretty">
              {paragraph}
            </p>
          ))}
          <span className="mt-2 font-mono text-xs text-main">{about.highlightsTitle}</span>
          <div className="flex flex-col gap-2">
            {about.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="grid grid-cols-[minmax(120px,160px)_minmax(0,1fr)] items-baseline gap-4 rounded-row bg-ink px-5 py-[18px] text-white"
              >
                <span className="text-[19px] font-bold tracking-snug">{highlight.title}</span>
                <span className="text-[15px] leading-[1.4] text-white/80">{highlight.body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="mb-2 flex flex-wrap gap-1 self-start rounded-full bg-surface-track p-1">
            {TIMELINE_TABS.map((tab) => {
              const active = tab === timelineTab;
              return (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTimelineTab(tab)}
                  className={`flex items-baseline gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                    active ? 'bg-ink text-white' : 'text-ink'
                  }`}
                >
                  {about.timelineTabs[tab]}
                  <span className="font-mono text-[11px] font-normal opacity-60">{about.timeline[tab].length}</span>
                </button>
              );
            })}
          </div>
          <Timeline key={timelineTab} entries={about.timeline[timelineTab]} />
        </div>
      </div>
    </div>
  );
}

export default About;
