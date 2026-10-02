import type { CSSProperties } from 'react';

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export const prefersReducedMotion = (): boolean => window.matchMedia(REDUCED_MOTION_QUERY).matches;

export const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion() ? 'auto' : 'smooth');

export const animationDelay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds.toFixed(2)}s`,
});
