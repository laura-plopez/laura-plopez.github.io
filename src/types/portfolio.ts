export type Lang = 'es' | 'en';
export type Localized<T> = Record<Lang, T>;

export type SectionId = 'about' | 'projects' | 'experience' | 'stack' | 'posts' | 'agent';
export type TimelineTab = 'work' | 'edu' | 'certs' | 'langs';

interface ProjectCopy {
  title: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  inProgress?: string;
}

export interface Project {
  id: string;
  year?: string;
  href?: string;
  image?: string;
  video?: Localized<string>;
  tags: string[];
  copy: Localized<ProjectCopy>;
}

export interface TimelineEntry {
  when: string;
  duration: string;
  title: string;
  org: string;
  note: string;
  tags: string[];
}

interface StackArea {
  name: string;
  description: string;
  tools: string[];
}

export interface Post {
  title: string;
  dek: string;
  readTime: string;
  topic: Localized<string>;
  href: string;
}

export interface QA {
  question: string;
  answer: string;
}

interface GameCase {
  asked: string;
  right: string;
  wrong: [string, string];
}

export interface ContactLink {
  label: string;
  href: string;
}

interface SectionCopy {
  title: string;
  context: string;
}

export interface SiteContent {
  sections: Record<SectionId, SectionCopy>;
  sidebar: {
    tagline: { before: string; product: string; middle: string; code: string; after: string };
    navLabel: string;
    viewProjects: string;
    nowLabel: string;
    now: string[];
    contactLead: string;
    downloadCv: string;
    languageLabel: string;
  };
  about: {
    lead: string;
    body: string;
    steps: { title: string; body: string }[];
  };
  projects: {
    problem: string;
    role: string;
    outcome: string;
    status: string;
    inProgress: string;
    viewCase: string;
    hideCase: string;
    viewProject: string;
  };
  experience: {
    tabs: Record<TimelineTab, string>;
    timeline: Record<TimelineTab, TimelineEntry[]>;
  };
  stack: {
    areas: StackArea[];
  };
  posts: {
    readTime: string;
    all: string;
  };
  agent: {
    name: string;
    status: { idle: string; thinking: string; talking: string };
    greeting: string;
    placeholder: string;
    send: string;
    fallback: string;
    disclaimer: string;
    suggestionsTitle: string;
    suggestions: QA[];
    game: {
      title: string;
      pitch: string;
      play: string;
      caseOf: string;
      result: string;
      question: string;
      rightLines: string[];
      wrongLine: string;
      solved: string;
      almost: string;
      next: string;
      seeResult: string;
      scoreLabel: string;
      verdicts: { perfect: string; good: string; low: string };
      wellPlayed: string;
      nextTime: string;
      again: string;
      backToChat: string;
      exit: string;
      paused: string;
      summary: string;
      cases: GameCase[];
    };
  };
}
