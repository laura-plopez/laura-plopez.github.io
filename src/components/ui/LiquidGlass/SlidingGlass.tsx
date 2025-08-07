import React, { useEffect, useRef, useState } from 'react';

interface SlidingGlassProps {
  activeIndex: number;
  itemsCount: number;
  itemWidth: number;
  itemSpacing: number;
}

const SlidingGlass: React.FC<SlidingGlassProps> = ({
  activeIndex,
  itemWidth,
  itemSpacing
}) => {
  const glassRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getTranslateX = () => {
    return activeIndex * (itemWidth + itemSpacing);
  };

  return (
    <div
      ref={glassRef}
      className="absolute top-0 left-0 pointer-events-none z-0 transition-all duration-500 ease-out overflow-hidden rounded-full"
      style={{
        width: `${itemWidth}px`,
        height: '100%',
        transform: `translateX(${getTranslateX()}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0.08) 100%)
          `,
          backdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `
            0 4px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        }}
      >
        {/* Animación de ondas */}
        {[0, 1].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              animation: `ripple 3s infinite ${i * 1.5}s`,
              animationFillMode: 'forwards'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingGlass;