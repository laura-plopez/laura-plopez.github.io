import React, { useCallback, useState } from 'react';

interface SimpleNavButtonProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SimpleNavButton: React.FC<SimpleNavButtonProps> = ({
  children,
  className = '',
  isActive = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out
        text-white text-sm font-medium bg-transparent border-none outline-none
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        zIndex: isActive ? 2 : 1,
      }}
    >
      {children}
    </button>
  );
};

export default SimpleNavButton;