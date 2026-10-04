import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface PillButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
}

const BASE =
  'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition-colors duration-200';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-accent hover:text-ink',
  secondary: 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white',
};

function PillButton({ href, variant = 'primary', children }: PillButtonProps) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]}`}>
      {children}
    </a>
  );
}

export default PillButton;
