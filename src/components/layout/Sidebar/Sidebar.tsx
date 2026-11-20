import NowStatus from '@/components/layout/Sidebar/NowStatus';
import { DocumentDownload, GitHub, LinkedIn, Substack, ArrowUpRight } from '@/components/ui/Icons/Icons';
import { CONTACT_LINKS, CV, PROFILE, SECTIONS } from '@/constants/portfolio';
import { useContent, useLanguage } from '@/hooks/useLanguage';
import type { SectionId } from '@/types/portfolio';

const SOCIAL_ICONS = { GitHub, LinkedIn, Substack } as const;

interface SidebarProps {
  active: SectionId;
}

function Sidebar({ active }: SidebarProps) {
  const { lang } = useLanguage();
  const { sidebar, sections } = useContent();
  const { tagline } = sidebar;

  return (
    <header className="flex flex-col pb-8 pt-16 lg:sticky lg:top-0 lg:h-screen lg:pb-12 lg:pt-[88px] short:pt-16">
      <div>
        <h1 className="text-[38px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[44px]">{PROFILE.name}</h1>
        <p className="mt-2.5 text-xl font-medium">{PROFILE.role}</p>
        <p className="mt-3.5 max-w-[28ch] text-[17px] text-ink-muted">
          {tagline.before}
          <b className="font-medium text-ink">{tagline.product}</b>
          {tagline.middle}
          <b className="font-medium text-ink">{tagline.code}</b>
          {tagline.after}
        </p>
      </div>

      <a
        href="#projects"
        className="mt-7 inline-flex justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white lg:hidden"
      >
        {sidebar.viewProjects}
      </a>

      <nav aria-label={sidebar.navLabel} className="mt-[52px] hidden lg:block short:mt-9">
        <ul className="grid gap-0.5">
          {SECTIONS.map((id) => {
            const current = id === active;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={current ? 'location' : undefined}
                  className={`group flex items-center gap-4 py-[7px] text-xs font-semibold uppercase tracking-[.12em] transition-colors duration-200 hover:text-ink ${
                    current ? 'text-ink' : 'text-ink-muted'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-px bg-current transition-[width] duration-[350ms] ease-out-expo group-hover:w-16 ${
                      current ? 'w-16' : 'w-8'
                    }`}
                  />
                  {sections[id].title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <NowStatus />

      <div className="mt-8 border-t border-line pt-[22px] lg:mt-auto">
        <p className="max-w-[24ch] text-[17px] font-semibold leading-[1.35] tracking-[-0.01em]">{sidebar.contactLead}</p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="link-grow group mt-1.5 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent"
        >
          {PROFILE.email}
          <ArrowUpRight size={13} className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="mt-[18px] flex items-center gap-[18px]">
        {CONTACT_LINKS.map(({ label, href }) => {
          const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="icon-tip relative inline-flex text-ink-muted transition-[color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-ink"
            >
              <Icon />
            </a>
          );
        })}
        <a
          href={CV[lang]}
          download
          aria-label={sidebar.downloadCv}
          className="icon-tip relative inline-flex text-ink-muted transition-[color,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-ink"
        >
          <DocumentDownload />
        </a>
      </div>
    </header>
  );
}

export default Sidebar;
