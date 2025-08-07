import React from 'react';
import { motion } from 'framer-motion';
import { NavigationItemProps } from '../../../types/navigation';

const NavigationItem: React.FC<NavigationItemProps> = ({ item, isActive, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a
      href={item.href}
      onClick={handleClick}
      className={`px-6 py-2 rounded-full text-white transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
          : 'hover:bg-white/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.label}
    </motion.a>
  );
};

export default NavigationItem;