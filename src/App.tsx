import LanguageToggle from '@/components/layout/LanguageToggle/LanguageToggle';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import Spotlight from '@/components/layout/Spotlight/Spotlight';
import About from '@/components/sections/About/About';
import Agent from '@/components/sections/Agent/Agent';
import Experience from '@/components/sections/Experience/Experience';
import Posts from '@/components/sections/Posts/Posts';
import Projects from '@/components/sections/Projects/Projects';
import Stack from '@/components/sections/Stack/Stack';
import { SECTIONS } from '@/constants/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

function App() {
  const active = useActiveSection(SECTIONS);

  return (
    <>
      <Spotlight />
      <LanguageToggle />
      <div className="relative z-[1] mx-auto grid max-w-[1400px] px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-x-14 lg:px-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-x-20">
        <Sidebar active={active} />
        <main className="pb-24 lg:pb-40 lg:pt-[60px]">
          <About />
          <Projects />
          <Experience />
          <Stack />
          <Posts />
          <Agent />
        </main>
      </div>
    </>
  );
}

export default App;
