import { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent, PointerEvent as ReactPointerEvent, ReactNode } from 'react';

const DRAG_THRESHOLD_PX = 3;
const FADE_MASK = 'linear-gradient(90deg, #000 85%, transparent)';

interface DragScrollProps {
  children: ReactNode;
  className?: string;
}

function DragScroll({ children, className = '' }: DragScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const updateFade = useCallback(() => {
    const el = ref.current;
    if (el) setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(updateFade);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateFade]);

  useEffect(() => updateFade());

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== 'mouse' || event.button !== 0) return;
    event.preventDefault();

    const startX = event.clientX;
    const startScroll = el.scrollLeft;
    draggedRef.current = false;
    setDragging(true);

    const handleMove = (move: PointerEvent) => {
      const dx = move.clientX - startX;
      if (Math.abs(dx) > DRAG_THRESHOLD_PX) draggedRef.current = true;
      el.scrollLeft = startScroll - dx;
    };

    const handleUp = () => {
      setDragging(false);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    draggedRef.current = false;
  };

  const mask = hasMore ? FADE_MASK : 'none';

  return (
    <div
      ref={ref}
      onScroll={updateFade}
      onPointerDown={handlePointerDown}
      onClickCapture={handleClickCapture}
      className={`flex select-none overflow-x-auto scrollbar-none ${
        dragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-proximity'
      } ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {children}
    </div>
  );
}

export default DragScroll;
