import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const TICK_MS = 40;
const HOLD_TICKS = 65;
const GAP_TICKS = 8;
const DELETE_STEP = 2;

interface TypewriterState {
  index: number;
  typed: number;
  deleting: boolean;
  wait: number;
}

const INITIAL_STATE: TypewriterState = { index: 0, typed: 0, deleting: false, wait: 0 };

function step(state: TypewriterState, phrases: string[]): TypewriterState {
  if (state.wait > 0) return { ...state, wait: state.wait - 1 };

  const phrase = phrases[state.index % phrases.length];
  if (!state.deleting) {
    return state.typed >= phrase.length
      ? { ...state, deleting: true, wait: HOLD_TICKS }
      : { ...state, typed: state.typed + 1 };
  }

  return state.typed <= 0
    ? { index: state.index + 1, typed: 0, deleting: false, wait: GAP_TICKS }
    : { ...state, typed: Math.max(0, state.typed - DELETE_STEP) };
}

export function useTypewriter(phrases: string[]): string {
  const reducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    if (reducedMotion) return;
    const intervalId = setInterval(() => setState((current) => step(current, phrases)), TICK_MS);
    return () => clearInterval(intervalId);
  }, [phrases, reducedMotion]);

  if (reducedMotion) return phrases[0];
  return phrases[state.index % phrases.length].slice(0, state.typed);
}
