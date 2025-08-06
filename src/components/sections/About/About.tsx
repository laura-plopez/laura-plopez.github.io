import React from 'react';
import { motion } from 'framer-motion';
import Typography from '../../ui/Typography/Typography';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 lg:px-16">
      <motion.div 
        className="max-w-4xl ml-auto text-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="body" className="text-white/90 text-lg leading-relaxed">
          Nací el año 1997 en Toledo, España. Estudié comunicación audiovisual y desarrollo 
          de aplicaciones multiplataforma.
        </Typography>
      </motion.div>
    </section>
  );
};

export default About;