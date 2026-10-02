import FeaturedProject from '@/components/sections/Home/FeaturedProject';
import PillButton from '@/components/ui/PillButton/PillButton';
import { PROJECTS } from '@/constants/portfolio';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';

const FEATURED_COUNT = 2;
const INTRO_DELAYS_S = [0, 0.08, 0.2, 0.3, 0.48, 0.6].map((delay) => delay * 1.6);

interface HomeProps {
  playIntro: boolean;
}

function Home({ playIntro }: HomeProps) {
  const { home } = useContent();

  const intro = playIntro ? 'animate-blur-in' : '';
  const introDelay = (step: number) => (playIntro ? animationDelay(INTRO_DELAYS_S[step]) : undefined);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-7 pt-[3vh]">
        <span className={`font-mono text-[13px] text-main ${intro}`} style={introDelay(0)}>
          {home.kicker}
        </span>
        <h1 className="text-hero font-bold text-balance">
          <span className={`inline-block ${intro}`} style={introDelay(1)}>{home.title.main}</span>{' '}
          <span className={`inline-block ${intro}`} style={introDelay(2)}>{home.title.connector}</span>{' '}
          <span className={`inline-block font-light italic text-accent-teal ${intro}`} style={introDelay(3)}>
            {home.title.accent}
          </span>
        </h1>
        <p className={`max-w-[720px] text-subtitle font-medium text-pretty ${intro}`} style={introDelay(4)}>
          {home.subtitle}
        </p>
        <div className={`flex flex-wrap gap-2.5 ${intro}`} style={introDelay(5)}>
          <PillButton href={routeHref('projects')}>{home.ctaProjects} →</PillButton>
          <PillButton href={routeHref('contact')} variant="secondary">{home.ctaContact}</PillButton>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {home.steps.map((step, index) => (
          <div
            key={step.title}
            className="flex animate-rise flex-col gap-3 rounded-card bg-white p-6"
            style={animationDelay(playIntro ? 1.3 + 0.12 * index : 0.06 * index)}
          >
            <span className="font-mono text-xs text-main">{pad2(index + 1)}</span>
            <span className="text-[30px] font-bold leading-none tracking-heading">{step.title}</span>
            <span className="text-[15px] leading-[1.45] text-ink-subtle text-pretty">{step.body}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-mono text-[13px] text-main">{home.selected}</span>
          <a href={routeHref('projects')} className="text-[15px] font-semibold underline underline-offset-[3px]">
            {home.allProjects} →
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-2">
          {PROJECTS.slice(0, FEATURED_COUNT).map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              delay={playIntro ? 1.7 + 0.12 * index : 0.2 + 0.08 * index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
