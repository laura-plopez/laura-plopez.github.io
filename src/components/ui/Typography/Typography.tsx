import React from 'react';
import { TypographyProps, TypographyVariant } from '../../../types/typography';

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  children, 
  className = '',
  ...props 
}) => {
  const variants: Record<TypographyVariant, string> = {
    h1: 'text-6xl font-light tracking-wider',
    h2: 'text-4xl font-light tracking-wide',
    h3: 'text-2xl font-medium',
    subtitle: 'text-xl font-light tracking-wide',
    body: 'text-base font-normal',
  };

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';
  
  return React.createElement(
    Component,
    {
      className: `${variants[variant]} ${className}`,
      ...props
    },
    children
  );
};

export default Typography;

