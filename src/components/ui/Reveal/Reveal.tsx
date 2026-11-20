import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

// Content stays visible by default; only blocks that start below the fold wait to fade in.
function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [waiting, setWaiting] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion || element.getBoundingClientRect().top <= window.innerHeight) return;

    setWaiting(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setWaiting(false);
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div ref={ref} className={`reveal ${waiting ? 'reveal-pre' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default Reveal;
