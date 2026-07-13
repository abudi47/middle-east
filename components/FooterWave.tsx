/** Curved transition from the light page body into the navy footer. */
export function FooterWave() {
  return (
    <div
      className="relative -mt-10 h-16 w-full md:-mt-14 md:h-20"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0F2744"
          d="M0,52 C180,80 360,20 540,52 C720,84 900,24 1080,52 C1260,80 1350,44 1440,56 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
