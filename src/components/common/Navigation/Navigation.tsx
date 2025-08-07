import React, { useState } from 'react';
import ZoomButton from '../../ui/ZoomButton/ZoomButton';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-4 lg:top-6 left-0 right-0 z-50">
      <div className="mx-16 lg:mx-20">
        <div className="flex justify-end pr-2 space-x-4 lg:space-x-6">
          {navigationItems.map((item) => (
            <ZoomButton
              key={item.id}
              isActive={activeSection === item.id}
              onClick={() => setActiveSection(item.id)}
              className={activeSection === item.id
                ? "px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-xl shadow-md ring-1 ring-white/10 bg-white/10 hover:bg-white/20"
                : "px-4 py-2 text-white text-sm font-medium bg-transparent shadow-none ring-0 cursor-pointer"
              }
              activeScale="scale-105"
              hoverScale={activeSection === item.id ? "hover:scale-110" : ""} // Solo hover para activo
            >
              {item.label}
            </ZoomButton>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;