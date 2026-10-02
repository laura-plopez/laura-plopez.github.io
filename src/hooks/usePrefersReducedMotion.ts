import { useSyncExternalStore } from 'react';
import { prefersReducedMotion, REDUCED_MOTION_QUERY } from '@/lib/motion';

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

export const usePrefersReducedMotion = (): boolean => useSyncExternalStore(subscribe, prefersReducedMotion);
