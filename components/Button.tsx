import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "gold" | "navy" | "outline" | "outlineLight" | "white";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

const base =
  "btn-shine group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white shadow-gold hover:bg-gold-dark hover:shadow-glow",
  navy: "bg-navy-deep text-white hover:bg-navy hover:shadow-lift",
  white: "bg-white text-navy-deep shadow-card hover:shadow-lift",
  outline:
    "border border-slate-300 bg-white text-charcoal hover:border-navy-deep hover:text-navy-deep",
  outlineLight:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/10",
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
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
