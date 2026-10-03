export type Lang = 'es' | 'en';
export type Localized<T> = Record<Lang, T>;

export type TabId = 'home' | 'projects' | 'about' | 'stack' | 'writing' | 'faq' | 'contact';
export type ProjectKind = 'ai' | 'both' | 'product' | 'code';
export type ProjectFilter = 'all' | ProjectKind;
export type TimelineTab = 'work' | 'edu' | 'courses' | 'langs';
export type ContactTopic = 'job' | 'collab' | 'hello';

export type BrandSlug =
  | 'figma'
  | 'python'
  | 'langchain'
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'tailwindcss'
  | 'postgresql'
  | 'git'
  | 'github'
  | 'githubactions'
  | 'githubpages'
  | 'grafana'
  | 'anthropic'
  | 'claude'
  | 'langgraph'
  | 'modelcontextprotocol'
  | 'n8n';

export interface ProjectCopy {
  title: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  inProgress?: string;
}

export interface Project {
  id: string;
  kind: ProjectKind;
  year: string;
  href?: string;
  image?: string;
  video?: Localized<string>;
  tags: string[];
  copy: Localized<ProjectCopy>;
}

export interface Card {
  title: string;
  body: string;
}

export interface Brief {
  asked: string;
  needed: string;
}

export interface TimelineEntry {
  when: string;
  duration: string;
  title: string;
  org: string;
  note: string;
  tags: string[];
}

export type StackItem = { name: string; note: string } & (
  | { logo: BrandSlug }
  | { monogram: string }
);

export interface StackGroup {
  name: string;
  items: StackItem[];
}

export interface StackColumn {
  title: string;
  description: string;
  groups: StackGroup[];
}

export interface Post {
  title: string;
  dek: string;
  readTime: string;
  href?: string;
}

export interface QA {
  question: string;
  answer: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface SiteContent {
  tabs: Record<TabId, string>;
  sidebar: {
    location: string;
    navLabel: string;
    nowLabel: string;
    now: string[];
    languageLabel: string;
  };
  home: {
    kicker: string;
    title: { main: string; connector: string; accent: string };
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    steps: Card[];
    briefs: {
      title: string;
      asked: string;
      needed: string;
      prev: string;
      next: string;
      items: Brief[];
    };
  };
  projects: {
    filters: Record<ProjectFilter, string>;
    kinds: Record<ProjectKind, string>;
    problem: string;
    role: string;
    outcome: string;
    inProgress: string;
    viewProject: string;
    close: string;
    imagePlaceholder: string;
  };
  about: {
    lead: string;
    body: string[];
    highlightsTitle: string;
    highlights: Card[];
    timelineTabs: Record<TimelineTab, string>;
    timeline: Record<TimelineTab, TimelineEntry[]>;
  };
  stack: {
    intro: string;
    columns: StackColumn[];
  };
  writing: {
    lead: string;
  };
  faq: {
    lead: string;
    items: QA[];
  };
  bot: {
    title: string;
    subtitle: string;
    greeting: string;
    placeholder: string;
    send: string;
    fallback: string;
    suggestions: QA[];
  };
  contact: {
    lead: string;
    form: { name: string; topic: string; message: string; send: string };
    topics: Record<ContactTopic, string>;
    sent: { title: string; body: string; fallback: string };
  };
}
