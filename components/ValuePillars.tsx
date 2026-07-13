import { valuePillars } from "@/lib/content";
import { Stagger, StaggerItem } from "./Reveal";

export function ValuePillars() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {valuePillars.map((pillar, i) => (
        <StaggerItem key={pillar.title} className="h-full">
          <div className="h-full border border-slate-200 bg-white p-6">
            <span className="text-xs font-bold text-gold">
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
