import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import { animationDelay } from '@/lib/motion';
import type { Project } from '@/types/portfolio';

interface FeaturedProjectProps {
  project: Project;
  delay: number;
}

function FeaturedProject({ project, delay }: FeaturedProjectProps) {
  const { lang } = useLanguage();
  const { projects } = useContent();

  return (
    <a
      href={routeHref('projects', project.id)}
      className="flex animate-rise flex-col gap-3.5 rounded-card bg-white p-3 text-ink transition-colors duration-200 hover:bg-surface-hover"
      style={animationDelay(delay)}
    >
      <ImagePlaceholder label={projects.imagePlaceholder} tone="light" className="aspect-[16/10] rounded-image" />
      <div className="flex items-baseline justify-between gap-3 px-2 pb-2">
        <span className="text-2xl font-bold leading-[1.05] tracking-heading">{project.copy[lang].title}</span>
        <span className="whitespace-nowrap font-mono text-xs opacity-70">
          {projects.kinds[project.kind]} · {project.year}
        </span>
      </div>
    </a>
  );
}

export default FeaturedProject;
