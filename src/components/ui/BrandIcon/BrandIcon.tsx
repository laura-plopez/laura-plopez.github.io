import {
  siAnthropic,
  siClaude,
  siFigma,
  siGit,
  siGithub,
  siGithubactions,
  siGithubpages,
  siGrafana,
  siJavascript,
  siLangchain,
  siLanggraph,
  siModelcontextprotocol,
  siN8n,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
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
  postgresql: siPostgresql,
  git: siGit,
  github: siGithub,
  githubactions: siGithubactions,
  githubpages: siGithubpages,
  grafana: siGrafana,
  anthropic: siAnthropic,
  claude: siClaude,
  langgraph: siLanggraph,
  modelcontextprotocol: siModelcontextprotocol,
  n8n: siN8n,
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
