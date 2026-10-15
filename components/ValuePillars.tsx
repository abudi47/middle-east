import { valuePillars } from "@/lib/content";
import { Stagger, StaggerItem } from "./Reveal";

export function ValuePillars() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {valuePillars.map((pillar, i) => (
        <StaggerItem key={pillar.title} className="h-full">
          <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift">
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-jade-soft transition-transform duration-500 group-hover:scale-x-100" />
            <span className="font-display text-sm font-extrabold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-bold text-navy-deep">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {pillar.text}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
