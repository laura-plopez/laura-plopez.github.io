import { useEffect, useState } from 'react';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import About from '@/components/sections/About/About';
import Contact from '@/components/sections/Contact/Contact';
import Faq from '@/components/sections/Faq/Faq';
import Home from '@/components/sections/Home/Home';
import Projects from '@/components/sections/Projects/Projects';
import Stack from '@/components/sections/Stack/Stack';
import Writing from '@/components/sections/Writing/Writing';
import { useHashRoute } from '@/hooks/useHashRoute';
import { scrollBehavior } from '@/lib/motion';
import type { TabId } from '@/types/portfolio';

interface SectionProps {
  tab: TabId;
  param?: string;
  playIntro: boolean;
}

function Section({ tab, param, playIntro }: SectionProps) {
  switch (tab) {
    case 'home':
      return <Home playIntro={playIntro} />;
    case 'projects':
      return <Projects selectedId={param} />;
    case 'about':
      return <About />;
    case 'stack':
      return <Stack />;
    case 'writing':
      return <Writing />;
    case 'faq':
      return <Faq />;
    case 'contact':
      return <Contact />;
  }
}

function App() {
  const { tab, param } = useHashRoute();
  const [introPlayed, setIntroPlayed] = useState(tab !== 'home');

  if (tab !== 'home' && !introPlayed) setIntroPlayed(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }, [tab]);

  return (
    <div className="flex min-h-screen flex-wrap gap-[clamp(10px,1.5vw,16px)] bg-main p-[clamp(10px,1.5vw,16px)]">
      <Sidebar activeTab={tab} />
      <main className="min-h-[calc(100vh-32px)] min-w-0 flex-[1_1_560px] rounded-panel bg-surface p-[clamp(24px,4.5vw,64px)] text-ink">
        <div key={tab} className={introPlayed ? 'animate-fade' : undefined}>
          <Section tab={tab} param={param} playIntro={!introPlayed} />
        </div>
      </main>
    </div>
  );
}

export default App;
