interface PageHeaderProps {
  title: string;
  lead?: string;
  leadMaxWidth?: number;
}

function PageHeader({ title, lead, leadMaxWidth = 380 }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <h2 className="text-title font-bold">{title}</h2>
      {lead && (
        <p className="text-[17px] leading-[1.45] text-ink-soft text-pretty" style={{ maxWidth: leadMaxWidth }}>
          {lead}
        </p>
      )}
    </div>
  );
}

export default PageHeader;
