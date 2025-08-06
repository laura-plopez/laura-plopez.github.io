import React from 'react';
import { motion } from 'framer-motion';

interface Indicator {
  active: boolean;
}

const HeroIndicators: React.FC = () => {
  const indicators: Indicator[] = [
    { active: true },
    { active: false },
    { active: false },
    { active: false }
  ];

  return (
    <motion.div 
      className="flex flex-col space-y-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      {indicators.map((indicator, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full border border-white/40 ${
            indicator.active ? 'bg-white' : 'bg-transparent'
          } transition-all duration-300`}
        />
      ))}
    </motion.div>
  );
};

export default HeroIndicators;