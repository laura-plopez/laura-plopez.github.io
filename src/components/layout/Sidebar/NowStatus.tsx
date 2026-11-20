import { useEffect, useState } from 'react';
import { useContent } from '@/hooks/useLanguage';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const ROTATE_MS = 4200;
const FADE_MS = 260;

function NowStatus() {
  const { sidebar } = useContent();
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    let fadeTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setFading(true);
      fadeTimeout = setTimeout(() => {
        setIndex((current) => (current + 1) % sidebar.now.length);
        setFading(false);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [reducedMotion, sidebar.now.length]);

  return (
    <div className="mt-10 grid max-w-[28ch] grid-cols-[auto_1fr] items-center gap-x-2.5 gap-y-0.5 short:hidden">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ok" />
      <span className="text-[13px] font-semibold">{sidebar.nowLabel}</span>
      <p
        className={`col-start-2 min-h-[2.8em] text-sm text-ink-muted transition-[opacity,transform] duration-[450ms] ease-out-expo ${
          fading ? 'translate-y-1.5 opacity-0' : ''
        }`}
      >
        {sidebar.now[index % sidebar.now.length]}
      </p>
    </div>
  );
}

export default NowStatus;
