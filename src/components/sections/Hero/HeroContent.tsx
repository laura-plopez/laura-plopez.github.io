import React from 'react';
import { motion } from 'framer-motion';

const HeroContent: React.FC = () => {
  return (
    <div className="flex-1 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-6xl font-light tracking-wider text-white mb-4">
          Laura Pérez
        </h1>
        <p className="text-xl font-light tracking-wide text-white/80">
          Developer & Marketing
        </p>
      </motion.div>
    </div>
  );
};

export default HeroContent;