// src/components/ui/LiquidGlass/AdvancedLiquidGlass.tsx
import React, { useRef, useCallback, useState } from 'react';

interface AdvancedLiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const AdvancedLiquidGlass: React.FC<AdvancedLiquidGlassProps> = ({
  children,
  className = '',
  isActive = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`
        relative overflow-hidden rounded-full cursor-pointer transition-all duration-300 ease-out
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isActive ? `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.08) 100%)
        ` : 'transparent',
        backdropFilter: isActive ? 'blur(12px) saturate(180%)' : 'none',
        border: isActive ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        boxShadow: isActive ? `
          0 4px 16px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        ` : 'none',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {/* Solo animación de ondas para estado activo */}
      {
        isActive && (
          <div className="absolute inset-0 rounded-full">
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
        )
      }

      {/* Contenido */}
      <div className="relative z-10 px-4 py-2">
        {children}
      </div>
    </div >
  );
};

export default AdvancedLiquidGlass;