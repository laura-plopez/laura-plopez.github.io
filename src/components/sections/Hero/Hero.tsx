import React, { useState } from 'react';
import ZoomButton from '../../ui/ZoomButton/ZoomButton';

const Hero: React.FC = () => {
  const [activeIndicator, setActiveIndicator] = useState<number>(0);

  return (
    <main className="min-h-screen flex items-center justify-center p-16 lg:p-20">
      {/* Contenedor principal con más márgenes */}
      <div className="relative w-full h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)]">

        {/* Borde blanco redondeado - SIN BLUR, transparente */}
        <div className="w-full h-full border-2 border-white/20 rounded-2xl p-12 lg:p-16 relative">
          {/* Laura Pérez - Arriba Izquierda */}
          <div className="absolute top-12 lg:top-16 left-12 lg:left-16">
            <h1 className="font-dm text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wider mb-2">
              Laura Pérez
            </h1>
            {/* Developer & Marketing - Justo debajo del nombre */}
            <p className="font-instrument text-xl lg:text-2xl text-white/80 font-light tracking-wide">
              Developer & Marketing
            </p>
          </div>

          {/* Indicadores de navegación CON ZOOM - Centro Izquierda, VERTICALES */}
          <div className="absolute left-12 lg:left-16 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col space-y-4">
              {[0, 1, 2, 3].map((index) => (
                <ZoomButton
                  key={index}
                  isActive={activeIndicator === index}
                  onClick={() => setActiveIndicator(index)}
                  className="w-3 h-3 rounded-full border border-white/40 bg-white/0 hover:bg-white/20"
                  activeScale="scale-125"
                  hoverScale="hover:scale-110"
                  normalScale="scale-100"
                >
                  {/* Círculo relleno cuando está activo */}
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${activeIndicator === index ? 'bg-white' : 'bg-transparent'
                    }`} />
                </ZoomButton>
              ))}
            </div>
          </div>

          {/* Descripción - Abajo Derecha, texto más pequeño y estrecho */}
          <div className="absolute bottom-12 lg:bottom-16 right-12 lg:right-16 max-w-xs text-right">
            <p className="font-instrument text-white/90 text-xs lg:text-sm leading-relaxed">
              Nací el año 1997<br />
              en Toledo, España.<br />
              Estudié comunicación<br />
              audiovisual y desarrollo<br />
              de aplicaciones<br />
              multiplataforma.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;