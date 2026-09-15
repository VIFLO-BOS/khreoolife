import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  label: string;
  variant?: "brand" | "light" | "dark" | "outline" | "yellow";
  className?: string;
};

const styles = {
  brand: "bg-brand text-white hover:bg-yellow hover:text-ink",
  light: "bg-white text-ink hover:bg-yellow",
  dark: "bg-ink text-white hover:bg-brand",
  outline: "border border-current bg-transparent hover:bg-brand hover:text-white hover:border-brand",
  yellow: "bg-yellow text-ink hover:bg-brand hover:text-white",
};

export function AnimatedButton({ href, label, variant = "brand", className }: Props) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5", className)}>
      <span
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-[11px] font-black transition-colors duration-300",
          styles[variant],
        )}
      >
        {label}
      </span>
      {/* <span
        className={cn(
          "grid size-11 place-items-center rounded-full text-current transition-all duration-300 group-hover:rotate-45",
          styles[variant],
        )}
      >
        <ArrowRight className="size-4" strokeWidth={1.8} />
      </span> */}
    </Link>
  );
}
