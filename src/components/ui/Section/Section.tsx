import type { ReactNode } from 'react';
import { useContent } from '@/hooks/useLanguage';
import type { SectionId } from '@/types/portfolio';

interface SectionProps {
  id: SectionId;
  children: ReactNode;
}

function Section({ id, children }: SectionProps) {
  const { sections } = useContent();
  const { title, context } = sections[id];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pb-20 lg:pb-32">
      <h2
        id={`${id}-title`}
        className="section-title sticky top-0 z-[3] -mx-6 flex flex-wrap items-baseline gap-x-3.5 gap-y-1 px-6 pb-[22px] pt-[18px] text-2xl font-bold leading-[1.15] tracking-[-0.025em] lg:mx-0 lg:px-0 lg:pb-[30px] lg:pt-7 lg:text-[32px]"
      >
        {title}
        <span className="hidden text-[15px] font-medium tracking-normal text-ink-muted lg:inline">{context}</span>
      </h2>
      {children}
    </section>
  );
}

export default Section;
