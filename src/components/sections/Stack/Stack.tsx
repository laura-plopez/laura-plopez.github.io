import StackColumn from '@/components/sections/Stack/StackColumn';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { useContent } from '@/hooks/useLanguage';

function Stack() {
  const { tabs, stack } = useContent();

  return (
    <div className="flex flex-col gap-10">
      <PageHeader title={tabs.stack} lead={stack.intro} leadMaxWidth={420} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-stretch gap-2">
        {stack.columns.map((column, index) => (
          <StackColumn key={column.title} column={column} dark={index % 2 === 1} delay={0.1 * index + 0.1} />
        ))}
      </div>
    </div>
  );
}

export default Stack;
