import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("grid grid-cols-[1fr_.7fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-6", className)}>
      <div>
        <div className="eyebrow mb-4 text-brand">{eyebrow}</div>
        <h2 className="display-title text-[clamp(42px,5vw,76px)]">{title}</h2>
      </div>
      {description ? (
        <p className="border-t border-ink pt-4 text-[15px] leading-7 text-[#6f6972]">{description}</p>
      ) : null}
    </div>
  );
}
