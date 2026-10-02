import SilkBackground from '@/components/ui/SilkBackground/SilkBackground';
import Navigation from '@/components/layout/Navigation/Navigation';
import Hero from '@/components/sections/Hero/Hero';

function App() {
  return (
    <SilkBackground
      speed={1}
      scale={1}
      color="#312f33ff"
      noiseIntensity={1.2}
      rotation={0}
    >
      <Navigation />
      <main>
        <Hero />
      </main>
    </SilkBackground>
  );
}

export default App;
