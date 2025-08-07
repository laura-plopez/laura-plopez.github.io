import React, { useRef, useEffect, useCallback, useState } from 'react';

interface LiquidGlassShaderProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  intensity?: number;
}

const LiquidGlassShader: React.FC<LiquidGlassShaderProps> = ({
  children,
  className = '',
  isActive = false,
  intensity = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0.5, y: 0.5 });
  }, []);

  // Calcular distorsión CSS basada en la posición del mouse
  const getDistortionStyle = () => {
    if (!isHovered) return {};
    
    const centerX = mousePos.x - 0.5;
    const centerY = mousePos.y - 0.5;
    const distance = Math.sqrt(centerX * centerX + centerY * centerY);
    const maxDistance = 0.5;
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    // Crear efecto de lente
    const lensStrength = (1 - normalizedDistance) * intensity * 0.3;
    const scaleEffect = 1 + lensStrength * 0.1;
    
    // Crear ondulación
    const rippleStrength = Math.sin(Date.now() * 0.01) * lensStrength * 2;
    
    return {
      transform: `scale(${scaleEffect}) perspective(1000px) rotateX(${centerY * rippleStrength}deg) rotateY(${centerX * rippleStrength}deg)`,
      filter: `
        blur(${lensStrength * 0.5}px) 
        contrast(${1 + lensStrength * 0.2}) 
        brightness(${1 + lensStrength * 0.1})
        saturate(${1 + lensStrength * 0.3})
      `,
      transition: isHovered ? 'none' : 'all 0.3s ease-out'
    };
  };

  return (
    <div
      ref={containerRef}
      className={`
        relative overflow-hidden rounded-full cursor-pointer
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isActive 
          ? 'rgba(255, 255, 255, 0.15)' 
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: `blur(${isHovered ? 15 : 10}px) saturate(180%)`,
        border: `1px solid rgba(255, 255, 255, ${isActive ? 0.3 : 0.15})`,
        boxShadow: isHovered 
          ? `0 8px 32px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)` 
          : `0 4px 16px rgba(0, 0, 0, 0.1)`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        ...getDistortionStyle()
      }}
    >
      {/* Efecto de reflejos dinámicos */}
      <div 
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
            rgba(255, 255, 255, ${isHovered ? 0.4 : 0.1}) 0%, 
            transparent 50%)`
        }}
      />
      
      {/* Efecto de ondas cuando está activo */}
      {isActive && (
        <div className="absolute inset-0 rounded-full">
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              animation: 'pulse 2s infinite'
            }}
          />
        </div>
      )}
      
      {/* Contenido */}
      <div className="relative z-10 px-4 py-2">
        {children}
      </div>
    </div>
  );
};

export default LiquidGlassShader;