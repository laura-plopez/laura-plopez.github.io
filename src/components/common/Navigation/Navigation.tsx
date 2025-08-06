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
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex space-x-6">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;