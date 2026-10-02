import type { ReactNode } from 'react';

interface ZoomButtonProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  normalScale?: string;
  activeScale?: string;
  hoverScale?: string;
}

function ZoomButton({
  children,
  isActive = false,
  onClick,
  className = '',
  normalScale = 'scale-100',
  activeScale = 'scale-105',
  hoverScale = 'hover:scale-110',
}: ZoomButtonProps) {
  return (
    <button
      type="button"
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
}

export default ZoomButton;
