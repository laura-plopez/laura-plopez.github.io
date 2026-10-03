import { useState } from 'react';
import ProjectCard from '@/components/sections/Projects/ProjectCard';
import ProjectDetail from '@/components/sections/Projects/ProjectDetail';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import ToggleChip from '@/components/ui/ToggleChip/ToggleChip';
import { PROJECTS } from '@/constants/portfolio';
import { useContent } from '@/hooks/useLanguage';
import type { ProjectFilter } from '@/types/portfolio';

const KINDS = new Set(PROJECTS.map((project) => project.kind));
const FILTERS = (['all', 'ai', 'both', 'product', 'code'] as ProjectFilter[]).filter(
  (option) => option === 'all' || KINDS.has(option),
);

interface ProjectsProps {
  selectedId?: string;
}

function Projects({ selectedId }: ProjectsProps) {
  const { tabs, projects } = useContent();
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const selected = PROJECTS.find((project) => project.id === selectedId);
  const visible = PROJECTS
    .map((project, index) => ({ project, number: index + 1 }))
    .filter(({ project }) => filter === 'all' || project.kind === filter);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-5">
        <PageHeader title={tabs.projects} />
        {KINDS.size > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map((option) => (
              <ToggleChip
                key={option}
                active={filter === option}
                onClick={() => setFilter(option)}
                className="text-[15px]"
              >
                {projects.filters[option]}
              </ToggleChip>
            ))}
          </div>
        )}
      </div>

      {selected && <ProjectDetail project={selected} />}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-2">
        {visible.map(({ project, number }, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={number}
            selected={project.id === selectedId}
            delay={0.06 * index}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
