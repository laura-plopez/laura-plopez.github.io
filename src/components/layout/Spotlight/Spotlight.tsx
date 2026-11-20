import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const handleMove = (event: PointerEvent) => {
      ref.current?.style.setProperty('--x', `${event.clientX}px`);
      ref.current?.style.setProperty('--y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [reducedMotion]);

  return <div ref={ref} aria-hidden="true" className="spotlight" />;
}

export default Spotlight;
