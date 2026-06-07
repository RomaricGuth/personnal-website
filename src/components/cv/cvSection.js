export function Section({ children, className = "" }) {
  return <div className={`flex-1 ${className}`}>{children}</div>;
}

export function SectionHeader({ title }) {
  return (
    <div className="mb-3">
      <div className="text-[20px] text-cv-primary">{title}</div>
      <div className="h-px bg-cv-primary" />
    </div>
  );
}

export function SectionItem({ title, description, children }) {
  return (
    <div className="flex flex-row mb-3">
      <div className="flex-1 text-[14px] text-cv-muted">{description}</div>
      <div className="w-px bg-cv-muted mx-3 self-stretch" />
      <div className="flex-[8] text-[13px]">
        {title && <div className="text-[18px] text-cv-secondary mb-2">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
