/**
 * Custom SVG background for the hero — a procurement network motif:
 * tiled hex cells, route connectors, and a large orbital ring on the right.
 */
export function HeroPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="meb-hex-grid"
            width="72"
            height="62"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M36 2 L68 20 L68 42 L36 60 L4 42 L4 20 Z"
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.6"
            />
            <path
              d="M36 14 L56 26 L56 36 L36 48 L16 36 L16 26 Z"
              fill="rgba(29,111,184,0.04)"
              stroke="rgba(74,154,212,0.12)"
              strokeWidth="0.4"
            />
            <circle cx="36" cy="2" r="1.8" fill="rgba(74,154,212,0.45)" />
            <circle cx="68" cy="20" r="1.2" fill="rgba(255,255,255,0.2)" />
            <circle cx="4" cy="20" r="1.2" fill="rgba(255,255,255,0.2)" />
            <line
              x1="36"
              y1="2"
              x2="36"
              y2="14"
              stroke="rgba(74,154,212,0.2)"
              strokeWidth="0.5"
            />
            <line
              x1="68"
              y1="20"
              x2="56"
              y2="26"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
            <line
              x1="4"
              y1="20"
              x2="16"
              y2="26"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          </pattern>

          <pattern
            id="meb-hex-grid-offset"
            width="72"
            height="62"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(36,31)"
          >
            <path
              d="M36 2 L68 20 L68 42 L36 60 L4 42 L4 20 Z"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
            <circle cx="36" cy="60" r="1.2" fill="rgba(74,154,212,0.25)" />
          </pattern>

          <linearGradient id="meb-hero-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F2744" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0F2744" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0F2744" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="meb-hero-glow" cx="82%" cy="18%" r="50%">
            <stop offset="0%" stopColor="#1D6FB8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1D6FB8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#meb-hex-grid)" />
        <rect width="1440" height="900" fill="url(#meb-hex-grid-offset)" />
        <rect width="1440" height="900" fill="url(#meb-hero-glow)" />

        {/* Orbital hub — supply-chain focal graphic */}
        <g
          transform="translate(1120, 380)"
          fill="none"
          stroke="rgba(74,154,212,0.16)"
          strokeWidth="1"
        >
          <circle r="200" />
          <circle r="150" strokeDasharray="6 10" opacity="0.75" />
          <circle r="95" stroke="rgba(255,255,255,0.09)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1="0"
                y1="0"
                x2={Math.cos(rad) * 200}
                y2={Math.sin(rad) * 200}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.6"
              />
            );
          })}
          <circle r="6" fill="rgba(29,111,184,0.4)" />
          <circle r="2.5" fill="rgba(74,154,212,0.7)" />
        </g>

        {/* Logistics route curves */}
        <path
          d="M0 675 Q 500 495, 792 702 T 1440 558"
          fill="none"
          stroke="rgba(74,154,212,0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          d="M0 792 Q 576 612, 864 810 T 1584 666"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.8"
          strokeDasharray="2 12"
        />

        <rect width="1440" height="900" fill="url(#meb-hero-fade)" />
      </svg>
    </div>
  );
}
