import { company } from "@/lib/content";

type LogoProps = {
  variant?: "full" | "icon";
  tone?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
};

export function MEBMark({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const bg = tone === "light" ? "#FFFFFF" : "#0F2744";
  const letter = tone === "light" ? "#0F2744" : "#FFFFFF";
  const accent = "#1D6FB8";

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Middle East Business mark"
      fill="none"
    >
      <rect width="40" height="40" rx="4" fill={bg} />
      <rect
        x="0"
        y="0"
        width="40"
        height="4"
        rx="4"
        fill={accent}
      />
      <path
        d="M11 30 V14 L20 22 L29 14 V30"
        stroke={letter}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Logo({
  variant = "full",
  tone = "dark",
  showTagline = false,
  className = "",
}: LogoProps) {
  const textColor = tone === "light" ? "text-white" : "text-navy-deep";
  const subColor = tone === "light" ? "text-slate-300" : "text-slate-500";

  if (variant === "icon") {
    return <MEBMark tone={tone} className={className || "h-9 w-9"} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <MEBMark tone={tone} className="h-9 w-9 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-label text-[10px] font-semibold uppercase tracking-brand ${subColor}`}
        >
          Middle East
        </span>
        <span
          className={`font-display text-base font-bold tracking-tight ${textColor}`}
        >
          Business
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[10px] text-slate-400">
            {company.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
