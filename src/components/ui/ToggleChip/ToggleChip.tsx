import type { ReactNode } from 'react';

interface ToggleChipProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

function ToggleChip({ active, onClick, children, className = '' }: ToggleChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border-[1.5px] border-ink px-3.5 py-1.5 font-semibold transition-colors duration-200 ${
        active ? 'bg-ink text-white' : 'text-ink'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default ToggleChip;
