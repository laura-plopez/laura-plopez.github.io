import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown } from '@/components/ui/Icons/Icons';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { Project } from '@/types/portfolio';

const VISIBLE_TAGS = 3;
const TOUCH_QUERY = '(hover: none)';
const IN_VIEW_RATIO = 0.6;

interface ProjectRowProps {
  project: Project;
}

function ProjectRow({ project }: ProjectRowProps) {
  const { lang } = useLanguage();
  const { projects } = useContent();
  const reducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const caseVideoRef = useRef<HTMLVideoElement>(null);
  const detailId = useId();
  const copy = project.copy[lang];
  const video = project.video?.[lang];

  // Touch screens have no hover: play the trailer while the row is on screen instead.
  useEffect(() => {
    const article = articleRef.current;
    if (!article || reducedMotion || !window.matchMedia(TOUCH_QUERY).matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) previewRef.current?.play().catch(() => {});
        else previewRef.current?.pause();
      },
      { threshold: IN_VIEW_RATIO },
    );
    observer.observe(article);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const playPreview = () => {
    if (!reducedMotion) previewRef.current?.play().catch(() => {});
  };
  const pausePreview = () => {
    if (!open) previewRef.current?.pause();
  };
  const toggle = () => {
    setOpen((current) => {
      if (current) {
        previewRef.current?.pause();
        caseVideoRef.current?.pause();
      }
      return !current;
    });
  };

  const facts = [
    { label: projects.problem, value: copy.problem },
    { label: projects.role, value: copy.role },
    { label: projects.outcome, value: copy.outcome },
  ];

  return (
    <article
      ref={articleRef}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      className={`group/project -mx-5 rounded-xl transition-colors duration-200 hover:bg-tint ${open ? 'bg-tint' : ''}`}
    >
      <div className="relative grid gap-3 p-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-line bg-line sm:w-40">
          {project.image && <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
          {video && (
            <video
              ref={previewRef}
              src={video}
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 ${
                open || inView ? 'opacity-100' : ''
              }`}
            />
          )}
        </div>
        <div>
          <h3 className="text-[17px] font-semibold leading-[1.35]">
            {copy.title}
            {project.year && <span className="text-[15px] font-medium text-ink-muted"> · {project.year}</span>}
          </h3>
          <p className="mt-1 max-w-[62ch] text-[15px] text-ink-muted">{copy.summary}</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
              <span key={tag} className="rounded-full bg-accent-tint px-2.5 py-[3px] text-xs font-medium text-accent">
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls={detailId}
            className="mt-2.5 inline-flex items-center gap-1.5 rounded-md text-[13px] font-semibold text-accent after:absolute after:inset-0 after:rounded-xl after:content-['']"
          >
            {open ? projects.hideCase : projects.viewCase}
            <span className="sr-only"> · {copy.title}</span>
            <ChevronDown className={`transition-transform duration-[350ms] ease-out-expo ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      <div
        id={detailId}
        className={`grid transition-[grid-template-rows] duration-[550ms] ease-out-expo ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="px-5 pb-5">
            {video && (
              <video
                ref={caseVideoRef}
                src={video}
                poster={project.image}
                controls
                muted
                playsInline
                preload="none"
                className="mb-2 block w-full rounded-lg border border-line bg-black"
              />
            )}
            <dl>
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                  <dt className="pt-0.5 text-[13px] font-medium text-ink-muted">{fact.label}</dt>
                  <dd className="max-w-[62ch] text-[15px] text-ink-soft">{fact.value}</dd>
                </div>
              ))}
              {copy.inProgress && (
                <div className="grid gap-1 py-3 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
                  <dt className="pt-0.5 text-[13px] font-medium text-ink-muted">{projects.status}</dt>
                  <dd className="max-w-[62ch] text-[15px] text-ink-soft">
                    <span className="mr-1.5 inline-block rounded-full bg-[#fef9c3] px-2 py-px text-xs font-semibold text-[#854d0e]">
                      {projects.inProgress}
                    </span>
                    {copy.inProgress}
                  </dd>
                </div>
              )}
            </dl>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent"
              >
                {projects.viewProject}
                <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectRow;
