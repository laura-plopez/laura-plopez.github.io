import BrandIcon from '@/components/ui/BrandIcon/BrandIcon';
import type { StackItem } from '@/types/portfolio';

interface ToolChipProps {
  item: StackItem;
  className: string;
  tileClassName: string;
}

function ToolChip({ item, className, tileClassName }: ToolChipProps) {
  return (
    <div className={`flex flex-[0_0_210px] snap-start items-center gap-3 rounded-nav p-2.5 ${className}`}>
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-image ${tileClassName}`}>
        {'logo' in item ? (
          <BrandIcon slug={item.logo} className="h-[22px] w-[22px]" />
        ) : (
          <span className="font-mono text-[13px] font-medium">{item.monogram}</span>
        )}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-base font-semibold leading-[1.15]">{item.name}</span>
        <span className="font-mono text-[11px] leading-[1.3] opacity-65">{item.note}</span>
      </span>
    </div>
  );
}

export default ToolChip;
