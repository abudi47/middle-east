"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building, MapPin, Truck, Warehouse } from "lucide-react";
import { locations } from "@/lib/content";

// Ethiopia outline (Natural Earth, public domain) projected to a 600×460 box.
const ETHIOPIA =
  "M211.9 24 L233.6 40.2 L254.6 31.8 L263.2 39.3 L287.7 39.7 L318.7 54 L328 66.4 L343.8 77.8 L358.5 98.8 L370.7 110.3 L358.1 126.1 L346.1 142.9 L348.8 152.7 L349.4 163.6 L369.4 164.2 L378 161.6 L385.9 168 L378.1 180.7 L391.3 200.3 L404.5 217.5 L418.1 230.3 L534.8 272.6 L564.9 272.4 L464 379.6 L417.5 381.2 L385.6 406.3 L362.7 407 L353 418.3 L328.6 418.3 L314.2 406.2 L281.5 421.1 L271 436 L247.2 433.2 L239.3 429.1 L230.9 430.1 L219.6 429.7 L174.4 399.4 L149.6 399.4 L137.4 387.6 L137.4 367.6 L118.8 361.6 L97.7 322.7 L81.4 314.4 L75.1 300.2 L57 282.8 L35.1 280.2 L47.3 259.9 L66.2 259 L71.6 248.1 L71.1 216 L81.7 178.6 L98.6 168.6 L102.2 154 L117.5 126.7 L139 109 L153.5 73.9 L159.2 43.2 L200.8 50.7 L211.9 24 Z";

const W = 600;
const H = 460;
const icons = [Building, Warehouse, Truck];

export function RegionsMap() {
  const [active, setActive] = useState(locations[0].slug);
  const current = locations.find((l) => l.slug === active) ?? locations[0];
  const [hq, addis, hawassa] = locations;

  // Curved supply routes: HQ → Addis hub → Hawassa operations.
  const route = (a: typeof hq, b: typeof hq, bend: number) =>
    `M${a.x} ${a.y} Q ${(a.x + b.x) / 2 + bend} ${(a.y + b.y) / 2 - Math.abs(bend)} ${b.x} ${b.y}`;

  return (
    <div className="relative">
      <div className="relative aspect-[600/460] w-full">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="eth-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1D6FB8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.18" />
            </linearGradient>
            <pattern id="eth-dots" width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(255,255,255,0.22)" />
            </pattern>
            <clipPath id="eth-clip">
              <path d={ETHIOPIA} />
            </clipPath>
          </defs>

          <path d={ETHIOPIA} fill="url(#eth-fill)" />
          <rect width={W} height={H} fill="url(#eth-dots)" clipPath="url(#eth-clip)" />
          <motion.path
            d={ETHIOPIA}
            fill="none"
            stroke="rgba(124,196,245,0.6)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />

          {[route(hq, addis, -30), route(addis, hawassa, 24)].map((d) => (
            <g key={d}>
              <path d={d} fill="none" stroke="rgba(45,212,191,0.25)" strokeWidth="6" strokeLinecap="round" />
              <path
                d={d}
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 10"
                className="animate-dash"
              />
            </g>
          ))}
        </svg>

        {locations.map((loc, i) => {
          const selected = loc.slug === active;
          return (
            <button
              key={loc.slug}
              type="button"
              onClick={() => setActive(loc.slug)}
              onMouseEnter={() => setActive(loc.slug)}
              onFocus={() => setActive(loc.slug)}
              aria-pressed={selected}
              aria-label={`${loc.name}, ${loc.city}`}
              style={{ left: `${(loc.x / W) * 100}%`, top: `${(loc.y / H) * 100}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-jade-soft"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <span
                  className={`relative h-5 w-5 rounded-full border-[3px] border-white shadow-lg transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-white/40 ${
                    selected ? "scale-125 bg-ember" : "bg-gold"
                  }`}
                />
              </span>
              <span
                className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold shadow-lg transition-colors ${
                  selected ? "bg-white text-navy-deep" : "bg-navy-ink/80 text-white"
                }`}
              >
                {loc.city}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="glass-dark mt-4 flex items-start gap-4 rounded-2xl p-5"
        >
          {(() => {
            const Icon = icons[locations.indexOf(current)] ?? MapPin;
            return (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/20 text-ember-soft">
                <Icon className="h-5 w-5" />
              </span>
            );
          })()}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-brand text-gold-soft">
              {current.name}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              {current.city}
              <span className="font-sans text-sm font-normal text-slate-400">
                {" "}
                · {current.region}
              </span>
            </p>
            <p className="mt-1 text-sm text-slate-300">{current.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
