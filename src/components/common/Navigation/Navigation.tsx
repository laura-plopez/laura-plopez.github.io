import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <nav className="fixed top-4 lg:top-6 left-0 right-0 z-50">
      {/* Contenedor que coincide con el ancho del recuadro */}
      <div className="mx-16 lg:mx-20">
        <div className="flex justify-end pr-1 space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-full text-white text-sm transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                  : 'hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;