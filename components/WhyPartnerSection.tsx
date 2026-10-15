import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Aurora } from "./Aurora";
import { RegionsMap } from "./RegionsMap";
import { whyPartnerIcons } from "@/lib/icons";
import { accentStyles } from "@/lib/accent";
import { whyPartnerSection, whyPartner } from "@/lib/content";

export function WhyPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-navy-ink py-20 text-white md:py-28">
      <Aurora className="opacity-60" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow={whyPartnerSection.eyebrow}
            title={whyPartnerSection.title}
            tone="light"
            className="mb-10"
          />
          <Stagger className="space-y-4">
            {whyPartner.map((item, i) => {
              const Icon = whyPartnerIcons[i];
              const accent = accentStyles[item.accent];
              return (
                <StaggerItem key={item.title}>
                  <div className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.bg} text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className={`text-lg font-bold ${accent.textOnDark}`}>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-brand text-slate-400">
            Operational footprint · tap a location
          </p>
          <RegionsMap />
        </Reveal>
      </div>
    </section>
  );
}
