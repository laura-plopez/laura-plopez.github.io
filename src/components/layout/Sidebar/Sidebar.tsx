import { useEffect, useState } from 'react';
import LanguageToggle from '@/components/layout/Sidebar/LanguageToggle';
import NowStatus from '@/components/layout/Sidebar/NowStatus';
import { PROFILE, TABS } from '@/constants/portfolio';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import type { TabId } from '@/types/portfolio';

const SCROLL_LOCK = 'max-wide:overflow-hidden';
const MOBILE_PANEL =
  'flex max-wide:fixed max-wide:inset-0 max-wide:animate-menu-drop max-wide:overflow-y-auto max-wide:bg-main max-wide:px-[22px] max-wide:pb-8 max-wide:pt-28';

interface SidebarProps {
  activeTab: TabId;
}

function Sidebar({ activeTab }: SidebarProps) {
  const { tabs, sidebar } = useContent();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    root.classList.add(SCROLL_LOCK);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      root.classList.remove(SCROLL_LOCK);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <aside className="sticky top-0 z-40 flex max-w-full flex-[1_1_100%] flex-col gap-9 bg-main px-3 py-3 text-white scrollbar-none wide:top-4 wide:h-[calc(100vh-32px)] wide:flex-[0_0_240px] wide:overflow-y-auto wide:py-5">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <a href={routeHref('home')} onClick={close} className="flex flex-col gap-1.5 px-3">
          <span className="text-[28px] font-bold leading-none tracking-heading">
            {PROFILE.wordmark}
            <span className="font-light">.</span>
          </span>
          <span className="font-mono text-xs opacity-80">{sidebar.location}</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="rounded-full bg-white/[.14] px-4 py-2 font-mono text-xs uppercase wide:hidden"
        >
          {open ? `${sidebar.menuClose} ×` : sidebar.menuOpen}
        </button>
      </div>

      <div
        id="site-menu"
        className={`${open ? MOBILE_PANEL : 'hidden wide:flex'} flex-1 flex-col justify-between gap-7`}
      >
        <nav aria-label={sidebar.navLabel}>
          <ul className="flex flex-col gap-1">
            {TABS.map((tab, index) => {
              const active = tab === activeTab;
              return (
                <li key={tab}>
                  <a
                    href={routeHref(tab)}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-baseline gap-2.5 rounded-nav px-3.5 py-[11px] text-2xl font-semibold tracking-[-0.01em] transition-colors duration-200 wide:text-[17px] ${
                      active ? 'bg-surface text-ink' : 'hover:bg-white/[.18]'
                    }`}
                  >
                    <span className="font-mono text-[11px] font-normal opacity-65">{pad2(index + 1)}</span>
                    {tabs[tab]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 px-3">
          <NowStatus />
          <LanguageToggle />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
