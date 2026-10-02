import { useContent } from '@/hooks/useLanguage';
import { useTypewriter } from '@/hooks/useTypewriter';

function NowStatus() {
  const { sidebar } = useContent();
  const text = useTypewriter(sidebar.now);

  return (
    <div className="flex flex-col gap-1.5">
      <span className="flex items-center gap-2 font-mono text-xs">
        <span className="h-2 w-2 animate-pulse-ring rounded-full bg-accent" />
        {sidebar.nowLabel}
      </span>
      <span className="min-h-[4.05em] text-[15px] leading-[1.35] opacity-90 text-pretty">
        {text}
        <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[.5em] animate-blink bg-accent align-[-2px]" />
      </span>
    </div>
  );
}

export default NowStatus;
