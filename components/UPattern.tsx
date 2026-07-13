type UPatternProps = {
  className?: string;
  color?: string;
  opacity?: number;
};

/**
 * Geometric lattice motif — interlocking diamonds inspired by
 * Middle Eastern architectural tessellation. Used at low opacity
 * over dark brand backgrounds.
 */
export function UPattern({
  className = "",
  color = "#C86B3A",
  opacity = 0.07,
}: UPatternProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="lattice-pattern"
            x="0"
            y="0"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 4 L60 32 L32 60 L4 32 Z"
              stroke={color}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M32 16 L48 32 L32 48 L16 32 Z"
              stroke={color}
              strokeWidth="0.5"
              fill="none"
              opacity="0.6"
            />
            <circle cx="32" cy="32" r="1.5" fill={color} opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-pattern)" />
      </svg>
    </div>
  );
}
