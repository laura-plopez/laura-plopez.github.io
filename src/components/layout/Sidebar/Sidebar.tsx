import { useEffect, useState } from 'react';
import LanguageToggle from '@/components/layout/Sidebar/LanguageToggle';
import NowStatus from '@/components/layout/Sidebar/NowStatus';
import { PROFILE, TABS } from '@/constants/portfolio';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import type { TabId } from '@/types/portfolio';

const SCROLL_LOCK = 'max-wide:overflow-hidden';

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

  const position = open ? 'fixed inset-0 z-50 overflow-y-auto' : 'sticky top-0 z-40';
  const panel = open ? 'flex' : 'hidden wide:flex';

  return (
    <aside
      className={`flex max-w-full flex-[1_1_100%] flex-col gap-7 bg-main px-3 py-3 text-white scrollbar-none wide:sticky wide:inset-auto wide:top-4 wide:z-auto wide:h-[calc(100vh-32px)] wide:flex-[0_0_240px] wide:justify-between wide:overflow-y-auto wide:py-5 ${position}`}
    >
      <div className="flex flex-col gap-9">
        <div className="flex items-center justify-between gap-4">
          <a href={routeHref('home')} onClick={close} className="flex flex-col gap-1.5 px-3">
            <span className="text-[28px] font-bold leading-none tracking-heading">
              {PROFILE.wordmark}
              <span className="font-light">.</span>
            </span>
            <span className={`${open ? 'block' : 'hidden wide:block'} font-mono text-xs opacity-80`}>
              {sidebar.location}
            </span>
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

        <nav id="site-menu" aria-label={sidebar.navLabel} className={panel}>
          <ul className="flex w-full flex-col gap-1">
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
      </div>

      <div className={`${panel} flex-col gap-4 px-3`}>
        <NowStatus />
        <LanguageToggle />
      </div>
    </aside>
  );
}

export default Sidebar;
