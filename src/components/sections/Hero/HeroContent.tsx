import React from 'react';
import { motion } from 'framer-motion';
import Typography from '../../ui/Typography/Typography';

const HeroContent: React.FC = () => {
  return (
    <div className="flex-1 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typography variant="h1" className="text-white mb-4">
          Laura Pérez
        </Typography>
        <Typography variant="subtitle" className="text-white/80">
          Developer & Marketing
        </Typography>
      </motion.div>
    </div>
  );
};

export default HeroContent;
