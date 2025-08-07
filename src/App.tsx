import SilkBackground from './components/ui/Background/SilkBackground';
import Navigation from './components/common/Navigation/Navigation';
import Hero from './components/sections/Hero/Hero';
import './App.css';

function App() {
  return (
    <SilkBackground
      speed={1}
      scale={1}
      color="#4d4d4dff"
      noiseIntensity={1.2}
      rotation={0}
    >
      <Navigation />
      <Hero />
    </SilkBackground>
  );
}

export default App;