import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { useContent } from '@/hooks/useLanguage';

function Stack() {
  const { stack } = useContent();

  return (
    <Section id="stack">
      <Reveal>
        <div className="grid border-t border-line xl:grid-cols-2">
          {stack.areas.map((area, index) => (
            <div
              key={area.name}
              className={`border-line py-6 ${index < stack.areas.length - 1 ? 'border-b' : ''} ${
                index % 2 === 0 ? 'xl:border-r xl:pr-8' : 'xl:pl-8'
              } ${index >= stack.areas.length - 2 ? 'xl:border-b-0' : 'xl:border-b'}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[17px] font-semibold">{area.name}</h3>
                <span className="text-[13px] tabular-nums text-ink-muted">{area.tools.length}</span>
              </div>
              <p className="mt-0.5 text-sm text-ink-muted">{area.description}</p>
              <ul className="mt-3.5 flex flex-wrap gap-1.5">
                {area.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-line bg-white px-[11px] py-1 text-[13px] font-medium text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export default Stack;
