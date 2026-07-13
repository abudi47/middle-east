import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "gold" | "navy" | "outline" | "outlineLight";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-brand px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white hover:bg-gold-dark",
  navy: "bg-navy-deep text-white hover:bg-navy",
  outline:
    "border border-slate-300 bg-white text-charcoal hover:border-navy-deep hover:text-navy-deep",
  outlineLight:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "gold",
  withArrow = true,
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
