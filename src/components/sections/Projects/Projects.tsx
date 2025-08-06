import React from 'react';
import { motion } from 'framer-motion';
import Typography from '../../ui/Typography/Typography';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center px-8 lg:px-16">
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" className="text-white mb-8">
          Proyectos
        </Typography>
        {/* Aquí irán los proyectos */}
      </motion.div>
    </section>
  );
};

export default Projects;