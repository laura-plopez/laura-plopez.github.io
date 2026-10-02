import { useState } from 'react';
import ZoomButton from '@/components/ui/ZoomButton/ZoomButton';
import { PORTFOLIO_DATA } from '@/constants/portfolio';

const INDICATOR_COUNT = 4;

function Hero() {
  const [activeIndicator, setActiveIndicator] = useState(0);
  const { name, title, bio } = PORTFOLIO_DATA.personal;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-16 lg:p-20">
      <div className="relative w-full h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)]">
        <div className="w-full h-full border-2 border-white/20 rounded-2xl p-12 lg:p-16 relative">
          <div className="absolute top-12 lg:top-16 left-12 lg:left-16">
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wider mb-2">
              {name}
            </h1>
            <p className="font-body text-xl lg:text-2xl text-white/80 font-light tracking-wide">
              {title}
            </p>
          </div>
          <div className="absolute left-12 lg:left-16 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col space-y-4">
              {Array.from({ length: INDICATOR_COUNT }, (_, index) => (
                <ZoomButton
                  key={index}
                  isActive={activeIndicator === index}
                  onClick={() => setActiveIndicator(index)}
                  className="w-3 h-3 rounded-full border border-white/40 bg-white/0 hover:bg-white/20"
                  activeScale="scale-125"
                  hoverScale="hover:scale-110"
                  normalScale="scale-100"
                >
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${
                      activeIndicator === index ? 'bg-white' : 'bg-transparent'
                    }`}
                  />
                </ZoomButton>
              ))}
            </div>
          </div>
          <div className="absolute bottom-12 lg:bottom-16 right-12 lg:right-16 max-w-xs text-right">
            <p className="font-body text-white/90 text-xs lg:text-sm leading-relaxed">
              {bio.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
