import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export type Mood = 'idle' | 'thinking' | 'talking' | 'happy' | 'oops';

const LOOK_RANGE_PX = 360;
const THINKING_GAZE = 'translate(4px, -5px)';

interface MascotProps {
  mood: Mood;
}

function Mascot({ mood }: MascotProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const eyesRef = useRef<SVGGElement>(null);
  const moodRef = useRef(mood);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    moodRef.current = mood;
    if (mood === 'thinking' && eyesRef.current) eyesRef.current.style.transform = THINKING_GAZE;
  }, [mood]);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMove = (event: PointerEvent) => {
      const svg = svgRef.current;
      const eyes = eyesRef.current;
      if (!svg || !eyes || moodRef.current === 'thinking') return;
      const box = svg.getBoundingClientRect();
      const clamp = (value: number) => Math.max(-1, Math.min(1, value / LOOK_RANGE_PX));
      const dx = clamp(event.clientX - (box.left + box.width / 2));
      const dy = clamp(event.clientY - (box.top + box.height / 2));
      eyes.style.transform = `translate(${dx * 7}px, ${dy * 5}px)`;
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [reducedMotion]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 160 170"
      aria-hidden="true"
      data-mood={mood}
      className="block h-[62px] w-14 overflow-visible sm:h-[78px] sm:w-[72px]"
    >
      <ellipse className="m-shadow" cx="80" cy="160" rx="40" ry="6" fill="rgba(24, 24, 27, .08)" />
      <g className="m-float">
        <line x1="80" y1="32" x2="80" y2="16" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
        <circle className="m-antenna" cx="80" cy="12" r="7" fill="#2563eb" />
        <rect x="26" y="32" width="108" height="100" rx="34" fill="#18181b" />
        <g ref={eyesRef} className="m-eyes">
          <rect className="m-eye" x="55" y="62" width="14" height="24" rx="7" fill="#fff" />
          <rect className="m-eye" x="91" y="62" width="14" height="24" rx="7" fill="#fff" />
          <path
            className="m-happy"
            d="M54 78 q8 -11 16 0 M90 78 q8 -11 16 0"
            stroke="#fff"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <rect className="m-mouth" x="71" y="102" width="18" height="7" rx="3.5" fill="#fff" />
      </g>
    </svg>
  );
}

export default Mascot;
