import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  number: number;
  selected: boolean;
  delay: number;
}

function ProjectCard({ project, number, selected, delay }: ProjectCardProps) {
  const { lang } = useLanguage();
  const { projects } = useContent();
  const copy = project.copy[lang];

  return (
    <a
      href={selected ? routeHref('projects') : routeHref('projects', project.id)}
      aria-current={selected ? 'true' : undefined}
      className={`flex animate-rise flex-col gap-3 rounded-card p-3 transition-colors duration-200 ${
        selected ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-surface-hover'
      }`}
      style={animationDelay(delay)}
    >
      <ImagePlaceholder label={projects.imagePlaceholder} tone="muted" className="aspect-[4/3] rounded-image" />
      <div className="flex flex-col gap-1.5 px-2 pb-2">
        <span className="flex justify-between gap-3 font-mono text-xs opacity-70">
          <span>{pad2(number)} · {projects.kinds[project.kind]}</span>
          <span>{project.year}</span>
        </span>
        <span className="text-2xl font-bold leading-[1.05] tracking-heading">{copy.title}</span>
        <span className="text-[15px] leading-[1.4] opacity-80">{copy.summary}</span>
      </div>
    </a>
  );
}

export default ProjectCard;
