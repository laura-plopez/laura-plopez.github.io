export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body';

export interface TypographyProps extends BaseComponentProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
}