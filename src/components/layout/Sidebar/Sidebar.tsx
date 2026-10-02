import LanguageToggle from '@/components/layout/Sidebar/LanguageToggle';
import NowStatus from '@/components/layout/Sidebar/NowStatus';
import { PROFILE, TABS } from '@/constants/portfolio';
import { routeHref } from '@/hooks/useHashRoute';
import { useContent } from '@/hooks/useLanguage';
import { pad2 } from '@/lib/format';
import type { TabId } from '@/types/portfolio';

interface SidebarProps {
  activeTab: TabId;
}

function Sidebar({ activeTab }: SidebarProps) {
  const { tabs, sidebar } = useContent();

  return (
    <aside className="flex max-w-full flex-[1_1_100%] flex-col justify-between gap-7 overflow-y-auto px-3 py-5 text-white scrollbar-none wide:sticky wide:top-4 wide:h-[calc(100vh-32px)] wide:flex-[0_0_240px]">
      <div className="flex flex-col gap-9">
        <a href={routeHref('home')} className="flex flex-col gap-1.5 px-3">
          <span className="text-[28px] font-bold leading-none tracking-heading">
            {PROFILE.wordmark}
            <span className="font-light">.</span>
          </span>
          <span className="font-mono text-xs opacity-80">{sidebar.location}</span>
        </a>

        <nav aria-label={sidebar.navLabel}>
          <ul className="flex flex-wrap gap-1 wide:flex-col">
            {TABS.map((tab, index) => {
              const active = tab === activeTab;
              return (
                <li key={tab}>
                  <a
                    href={routeHref(tab)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-baseline gap-2.5 rounded-nav px-3.5 py-[11px] text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
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

      <div className="flex flex-col gap-4 px-3">
        <NowStatus />
        <LanguageToggle />
      </div>
    </aside>
  );
}

export default Sidebar;
