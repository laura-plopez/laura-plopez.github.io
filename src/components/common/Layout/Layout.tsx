import React from 'react';
import SilkBackground from '../../ui/Background/SilkBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SilkBackground
      speed={3}           // Velocidad de animación
      scale={2}           // Escala del patrón
      color="#2d1b69"     // Color púrpura oscuro
      noiseIntensity={0.8} // Intensidad del ruido
      rotation={0}        // Rotación del patrón
    >
      {children}
    </SilkBackground>
  );
};

export default Layout;