import React from 'react';

const Hero: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-12 lg:p-16">
      {/* Contenedor principal que ocupa casi toda la pantalla */}
      <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-6rem)]">
        
        {/* Borde blanco redondeado que ocupa casi todo */}
        <div className="w-full h-full border-2 border-white/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm bg-white/5 relative">
          
          {/* Laura Pérez - Arriba Izquierda */}
          <div className="absolute top-8 lg:top-12 left-8 lg:left-12">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wider">
              Laura Pérez
            </h1>
          </div>
          
          {/* Developer & Marketing - Abajo Izquierda */}
          <div className="absolute bottom-20 lg:bottom-24 left-8 lg:left-12">
            <p className="text-xl lg:text-2xl text-white/80 font-light tracking-wide mb-6">
              Developer & Marketing
            </p>
            
            {/* Indicadores de navegación - Debajo del título */}
            <div className="flex space-x-4">
              <div className="w-3 h-3 rounded-full bg-white border border-white/40" />
              <div className="w-3 h-3 rounded-full border border-white/40" />
              <div className="w-3 h-3 rounded-full border border-white/40" />
              <div className="w-3 h-3 rounded-full border border-white/40" />
            </div>
          </div>
          
          {/* Descripción - Abajo Derecha */}
          <div className="absolute bottom-8 lg:bottom-12 right-8 lg:right-12 max-w-sm text-right">
            <p className="text-white/90 text-sm lg:text-base leading-relaxed">
              Nací el año 1997 en Toledo, España. 
              Estudié comunicación audiovisual y desarrollo 
              de aplicaciones multiplataforma.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Hero;