import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("grid grid-cols-[1fr_.7fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-6 max-md:text-center", className)}>
      <div className="min-w-0">
        <div className="eyebrow mb-4 text-brand max-md:justify-center">{eyebrow}</div>
        <h2 className="display-title text-[clamp(42px,5vw,76px)] max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">{title}</h2>
      </div>
      {description ? (
        <p className="min-w-0 border-t border-ink pt-4 text-[15px] text-[#6f6972] max-md:mx-auto max-md:w-full max-md:max-w-prose leading-body">{description}</p>
      ) : null}
    </div>
  );
}
