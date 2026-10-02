import {
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siGithubpages,
  siJavascript,
  siLangchain,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVite,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import type { BrandSlug } from '@/types/portfolio';

const ICONS: Record<BrandSlug, SimpleIcon> = {
  figma: siFigma,
  python: siPython,
  langchain: siLangchain,
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwindcss: siTailwindcss,
  threedotjs: siThreedotjs,
  postgresql: siPostgresql,
  php: siPhp,
  git: siGit,
  github: siGithub,
  vite: siVite,
  githubactions: siGithubactions,
  githubpages: siGithubpages,
};

interface BrandIconProps {
  slug: BrandSlug;
  className?: string;
}

function BrandIcon({ slug, className = '' }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={ICONS[slug].path} />
    </svg>
  );
}

export default BrandIcon;
