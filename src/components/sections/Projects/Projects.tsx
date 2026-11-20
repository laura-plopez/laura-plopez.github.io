import ProjectRow from '@/components/sections/Projects/ProjectRow';
import Reveal from '@/components/ui/Reveal/Reveal';
import Section from '@/components/ui/Section/Section';
import { PROJECTS } from '@/constants/portfolio';

function Projects() {
  return (
    <Section id="projects">
      <Reveal className="grid gap-1">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </Reveal>
    </Section>
  );
}

export default Projects;
