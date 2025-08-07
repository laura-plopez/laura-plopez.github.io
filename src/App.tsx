import SilkBackground from './components/ui/Background/SilkBackground';
import Navigation from './components/common/Navigation/Navigation';
import Hero from './components/sections/Hero/Hero';
import './App.css';

function App() {
  return (
    <SilkBackground
      speed={3}
      scale={0.8}
      color="#2d1b69"
      noiseIntensity={1.2}
      rotation={0}
    >
      <Navigation />
      <Hero />
    </SilkBackground>
  );
}

export default App;