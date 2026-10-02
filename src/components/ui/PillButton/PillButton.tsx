import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

type PillButtonProps = { variant?: Variant; children: ReactNode } & (
  | { href: string; type?: never }
  | { href?: never; type?: 'button' | 'submit' }
);

const BASE =
  'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition-colors duration-200';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-accent hover:text-ink',
  secondary: 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white',
};

function PillButton({ variant = 'primary', children, href, type = 'button' }: PillButtonProps) {
  const className = `${BASE} ${VARIANTS[variant]}`;

  if (href !== undefined) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <button type={type} className={className}>{children}</button>;
}

export default PillButton;
