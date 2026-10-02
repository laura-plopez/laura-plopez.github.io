import ToolChip from '@/components/sections/Stack/ToolChip';
import DragScroll from '@/components/ui/DragScroll/DragScroll';
import { pad2 } from '@/lib/format';
import { animationDelay } from '@/lib/motion';
import type { StackColumn as StackColumnData } from '@/types/portfolio';

const TONES = {
  light: {
    card: 'bg-white text-ink',
    line: 'border-line',
    accent: 'text-accent-teal',
    item: 'bg-surface',
    tile: 'bg-white',
  },
  dark: {
    card: 'bg-main text-white',
    line: 'border-white/[.16]',
    accent: 'text-accent',
    item: 'bg-white/[.06]',
    tile: 'bg-white/10',
  },
};

interface StackColumnProps {
  column: StackColumnData;
  dark: boolean;
  delay: number;
}

function StackColumn({ column, dark, delay }: StackColumnProps) {
  const tone = dark ? TONES.dark : TONES.light;
  const count = column.groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <div
      className={`flex h-[clamp(520px,72vh,720px)] min-h-0 animate-rise flex-col gap-6 rounded-panel p-[clamp(24px,3vw,36px)] ${tone.card}`}
      style={animationDelay(delay)}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-[clamp(44px,4.4vw,64px)] font-bold leading-[.9] tracking-display">{column.title}</h2>
          <span className="font-mono text-xs opacity-65">{pad2(count)}</span>
        </div>
        <p className="text-[17px] leading-[1.45] opacity-[.82] text-pretty">{column.description}</p>
      </div>

      <div className="-mr-2 flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto pr-2 scrollbar-thin">
        {column.groups.map((group) => (
          <div key={group.name} className={`flex flex-col gap-3 border-t pt-5 ${tone.line}`}>
            <span className={`font-mono text-[11px] uppercase tracking-[.1em] ${tone.accent}`}>{group.name}</span>
            <DragScroll className="-mx-1 gap-2 px-1 pb-1">
              {group.items.map((item) => (
                <ToolChip key={item.name} item={item} className={tone.item} tileClassName={tone.tile} />
              ))}
            </DragScroll>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackColumn;
