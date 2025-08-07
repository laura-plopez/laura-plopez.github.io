import React from 'react';

interface ZoomButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  normalScale?: string;
  activeScale?: string;
  hoverScale?: string;
}

const ZoomButton: React.FC<ZoomButtonProps> = ({
  children,
  isActive = false,
  onClick,
  className = '',
  normalScale = 'scale-100',
  activeScale = 'scale-105',
  hoverScale = 'hover:scale-110',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        transition-all duration-300 transform
        ${isActive ? activeScale : normalScale}
        ${hoverScale}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default ZoomButton;