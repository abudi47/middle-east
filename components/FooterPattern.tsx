/** Subtle hex network pattern — lighter variant of the hero motif. */
export function FooterPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-60"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-hex"
            width="72"
            height="62"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M36 2 L68 20 L68 42 L36 60 L4 42 L4 20 Z"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
            <circle cx="36" cy="2" r="1.2" fill="rgba(74,154,212,0.3)" />
          </pattern>
          <radialGradient id="footer-glow" cx="15%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#1D6FB8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1D6FB8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="600" fill="url(#footer-hex)" />
        <rect width="1440" height="600" fill="url(#footer-glow)" />
      </svg>
    </div>
  );
}
