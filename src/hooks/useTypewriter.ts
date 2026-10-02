import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const TYPE_MS = 40;
const HOLD_MS = 2600;
const GAP_MS = 320;
const DELETE_STEP = 2;

interface TypewriterState {
  index: number;
  typed: number;
  deleting: boolean;
}

const INITIAL_STATE: TypewriterState = { index: 0, typed: 0, deleting: false };

function nextStep(state: TypewriterState, phrase: string): { next: TypewriterState; delay: number } {
  if (!state.deleting) {
    return state.typed >= phrase.length
      ? { next: { ...state, deleting: true }, delay: HOLD_MS }
      : { next: { ...state, typed: state.typed + 1 }, delay: TYPE_MS };
  }

  return state.typed <= 0
    ? { next: { index: state.index + 1, typed: 0, deleting: false }, delay: GAP_MS }
    : { next: { ...state, typed: Math.max(0, state.typed - DELETE_STEP) }, delay: TYPE_MS };
}

export function useTypewriter(phrases: string[]): string {
  const reducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState(INITIAL_STATE);
  const phrase = phrases[state.index % phrases.length];

  useEffect(() => {
    if (reducedMotion) return;
    const { next, delay } = nextStep(state, phrase);
    const timeoutId = setTimeout(() => setState(next), delay);
    return () => clearTimeout(timeoutId);
  }, [state, phrase, reducedMotion]);

  return reducedMotion ? phrases[0] : phrase.slice(0, state.typed);
}
