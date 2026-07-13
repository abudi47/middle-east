"use client";

import { credentialsBanner } from "@/lib/content";

function MarqueeTrack() {
  return (
    <>
      {credentialsBanner.items.map((item) => (
        <span
          key={item.title}
          className="inline-flex items-center gap-3 px-8 text-sm text-slate-300"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-gold-soft">
            {item.title}
          </span>
          <span className="text-slate-500">|</span>
          <span>{item.text}</span>
        </span>
      ))}
    </>
  );
}

export function MomentumBanner() {
  return (
    <section
      aria-label={credentialsBanner.label}
      className="overflow-hidden border-y border-white/10 bg-navy-deep py-4"
    >
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
