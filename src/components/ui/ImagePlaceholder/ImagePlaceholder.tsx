type Tone = 'muted' | 'dark';

interface ImagePlaceholderProps {
  label: string;
  tone: Tone;
  className?: string;
}

const TONES: Record<Tone, string> = {
  muted: 'bg-stripes text-ink-muted',
  dark: 'bg-stripes-dark border border-white/25',
};

function ImagePlaceholder({ label, tone, className = '' }: ImagePlaceholderProps) {
  return (
    <div className={`flex w-full items-end p-3 font-mono text-[11px] ${TONES[tone]} ${className}`}>
      {label}
    </div>
  );
}

export default ImagePlaceholder;
