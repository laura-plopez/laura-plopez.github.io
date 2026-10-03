import { useEffect, useRef } from 'react';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder/ImagePlaceholder';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { scrollBehavior } from '@/lib/motion';
import type { Project } from '@/types/portfolio';

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const { lang } = useLanguage();
  const { projects } = useContent();
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const copy = project.copy[lang];

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: scrollBehavior(), block: 'nearest' });
  }, [project.id]);

  const facts = [
    { label: projects.problem, value: copy.problem },
    { label: projects.role, value: copy.role },
    { label: projects.outcome, value: copy.outcome },
    ...(copy.inProgress ? [{ label: projects.inProgress, value: copy.inProgress }] : []),
  ];

  return (
    <div
      ref={ref}
      className="grid scroll-mt-4 grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-8 rounded-panel bg-main p-[clamp(20px,2.5vw,32px)] text-white"
    >
      {project.video ? (
        <video
          src={project.video[lang]}
          poster={project.image}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full self-start rounded-nav"
        />
      ) : (
        <ImagePlaceholder label={projects.imagePlaceholder} tone="dark" className="aspect-[4/3] rounded-nav" />
      )}
      <div className="flex flex-col gap-[18px]">
        <div className="flex justify-between gap-3">
          <span className="font-mono text-xs text-accent">
            {projects.kinds[project.kind]} · {project.year}
          </span>
          <a href={routeHref('projects')} className="rounded-full bg-white/[.16] px-3 py-1 font-mono text-xs">
            {projects.close} ×
          </a>
        </div>
        <h2 className="text-[clamp(32px,3.2vw,48px)] font-bold leading-none tracking-[-0.04em]">{copy.title}</h2>
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-[.08em] text-accent">{fact.label}</span>
            <span className="text-base leading-[1.45]">{fact.value}</span>
          </div>
        ))}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/[.16] px-2.5 py-1 font-mono text-[11px]">
                {tag}
              </span>
            ))}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-[3px]"
            >
              {projects.viewProject} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
