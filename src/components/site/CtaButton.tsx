import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "light";

export function CtaButton({
  href = "#agendar",
  children,
  variant = "solid",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:gap-4";
  const styles: Record<Variant, string> = {
    solid:
      "bg-foreground text-background hover:bg-foreground/90 shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--foreground)_60%,transparent)]",
    outline:
      "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
    light:
      "bg-foreground text-background hover:bg-foreground/90 dark:bg-cream dark:text-ink dark:hover:bg-cream/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]",
  };
  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
    </a>
  );
}
