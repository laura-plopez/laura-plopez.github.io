import { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolio';

const NAVIGATION_ITEMS = PORTFOLIO_DATA.navigation;
const WAVE_DURATION_MS = 800;

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glassPosition, setGlassPosition] = useState({ left: 0, width: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let waveTimeoutId: ReturnType<typeof setTimeout> | undefined;

    const measureTimeoutId = setTimeout(() => {
      const activeButton = buttonRefs.current[activeIndex];
      const container = navRef.current;
      if (!activeButton || !container) return;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIsAnimating(true);
      setGlassPosition({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });

      waveTimeoutId = setTimeout(() => setIsAnimating(false), WAVE_DURATION_MS);
    }, 10);

    return () => {
      clearTimeout(measureTimeoutId);
      clearTimeout(waveTimeoutId);
    };
  }, [activeIndex]);

  return (
    <nav className="fixed top-4 lg:top-6 left-0 right-0 z-50">
      <div className="mx-16 lg:mx-20">
        <div
          ref={navRef}
          className="flex justify-end pr-2 space-x-4 lg:space-x-6 relative"
        >
          <div
            className="absolute top-0 pointer-events-none z-0 rounded-full overflow-hidden"
            style={{
              left: `${glassPosition.left}px`,
              width: `${glassPosition.width}px`,
              height: '100%',
              background: `
                linear-gradient(135deg,
                  rgba(255, 255, 255, 0.15) 0%,
                  rgba(255, 255, 255, 0.08) 100%)
              `,
              backdropFilter: 'blur(12px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 4px 16px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {isAnimating && (
              <div className="absolute inset-0">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-white/20"
                    style={{
                      animation: `liquidWave 0.8s ease-out ${i * 0.1}s forwards`,
                    }}
                  />
                ))}
              </div>
            )}

            {!isAnimating && [0, 1].map((i) => (
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

          {NAVIGATION_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              ref={el => { buttonRefs.current[index] = el; }}
              onClick={() => setActiveIndex(index)}
              className={`
                relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out
                text-white text-sm font-medium bg-transparent border-none outline-none
                hover:scale-105
              `}
              style={{
                zIndex: activeIndex === index ? 2 : 1,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
