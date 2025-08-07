import React from 'react';
import SilkBackground from '../../ui/Background/SilkBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SilkBackground
      speed={3}
      scale={2}
      color="#2d1b69"
      noiseIntensity={0.8}
      rotation={0}
    >
      {children}
    </SilkBackground>
  );
};

export default Layout;