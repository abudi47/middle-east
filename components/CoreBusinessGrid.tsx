import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { serviceIcons } from "@/lib/icons";
import { accentStyles } from "@/lib/accent";
import { coreBusinessSection, coreBusinessAreas } from "@/lib/content";

export function CoreBusinessGrid() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-navy-ink py-20 text-white md:py-28"
    >
      <div className="grid-dark absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={coreBusinessSection.eyebrow}
            title={coreBusinessSection.title}
            intro={coreBusinessSection.intro}
            tone="light"
          />
          <span className="eyebrow-pill shrink-0 self-start border-white/15 bg-white/5 text-gold-soft md:self-auto">
            Comprehensive Portfolio
          </span>
        </div>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {coreBusinessAreas.map((area) => {
            const Icon = serviceIcons[area.slug];
            const accent = accentStyles[area.accent];
            return (
              <StaggerItem key={area.slug} className="h-full">
                <SpotlightCard
                  className="h-full rounded-3xl"
                  glow={accent.glow}
                  tilt={4}
                >
                  <article className="relative flex h-full min-h-[34rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-navy-deep">
                    <Image
                      src={area.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover opacity-50 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/40 via-navy-ink/80 to-navy-ink" />
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`}
                    />

                    <div className="relative flex h-full flex-col p-7 md:p-8">
                      <div className="flex items-start justify-between">
                        <span
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} text-white shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                        >
                          <Icon className="h-7 w-7" strokeWidth={1.7} />
                        </span>
                        <span className="font-display text-5xl font-extrabold text-white/10">
                          {area.number}
                        </span>
                      </div>

                      <h3 className="mt-8 font-display text-2xl font-bold leading-tight">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {area.summary}
                      </p>

                      <ul className="mt-auto space-y-3 pt-8">
                        {area.capabilities.map((cap) => (
                          <li
                            key={cap.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20"
                          >
                            <p
                              className={`text-xs font-bold uppercase tracking-wide ${accent.textOnDark}`}
                            >
                              {cap.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate-200">
                              {cap.text}
                            </p>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/services#${area.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-white"
                      >
                        Explore sector
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
