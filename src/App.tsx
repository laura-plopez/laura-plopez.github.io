import React from 'react';
import SilkBackground from './components/ui/Background/SilkBackground';
import Navigation from './components/common/Navigation/Navigation';
import Hero from './components/sections/Hero/Hero';
import './App.css';

function App(): JSX.Element {
  return (
    <SilkBackground
      colors={[
        '#1e1b4b', // Púrpura oscuro
        '#3730a3', // Púrpura medio  
        '#1e40af', // Azul
        '#7c3aed'  // Violeta
      ]}
      speed={0.6}
      complexity={4}
    >
      <Navigation />
      <Hero />
    </SilkBackground>
  );
}

export default App;