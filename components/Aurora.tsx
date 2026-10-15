/**
 * Slow-drifting colour fields behind dark sections — the profile's
 * navy → blue → teal header band brought to life. Pure CSS, no JS.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -left-[10%] -top-[20%] h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(29,111,184,0.45)_0%,transparent_60%)] blur-2xl" />
      <div className="absolute -right-[15%] top-[10%] h-[55vmax] w-[55vmax] animate-aurora-slow rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.32)_0%,transparent_60%)] blur-2xl" />
      <div className="absolute -bottom-[30%] left-[30%] h-[45vmax] w-[45vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgba(74,154,212,0.22)_0%,transparent_60%)] blur-2xl [animation-delay:-6s]" />
      <div className="grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
