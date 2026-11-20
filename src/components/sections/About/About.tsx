import Emphasis from '@/components/ui/Emphasis/Emphasis';
import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { useContent } from '@/hooks/useLanguage';

function About() {
  const { about } = useContent();

  return (
    <Section id="about">
      <Reveal>
        <p className="max-w-[30ch] text-2xl font-semibold leading-[1.35] tracking-[-0.02em]">{about.lead}</p>
        <p className="mt-3.5 max-w-[62ch] text-ink-muted">
          <Emphasis text={about.body} />
        </p>
      </Reveal>
      <Reveal className="mt-7">
        <ul className="border-t border-line">
          {about.steps.map((step) => (
            <li
              key={step.title}
              className="grid gap-1 border-b border-line py-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
            >
              <span className="pt-0.5 text-sm font-semibold">{step.title}</span>
              <span className="max-w-[62ch] text-[15px] text-ink-soft">{step.body}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

export default About;
