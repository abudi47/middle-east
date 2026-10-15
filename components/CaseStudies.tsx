import Image from "next/image";
import { FileCheck2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { Counter } from "./Counter";
import { accentStyles } from "@/lib/accent";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Institutional Supply Highlights"
            title="Case spotlights: Samsung tablets, delivered at scale"
            intro="Two flagship contracts that show how we run high-value, time-critical procurement — from performance security to pre-delivery inspection."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => {
            const accent = accentStyles[study.accent];
            return (
              <Reveal key={study.title} delay={i * 0.1} className="h-full">
                <SpotlightCard className="h-full rounded-3xl" glow={accent.glow}>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 group-hover:shadow-lift">
                    <div className="relative h-56 overflow-hidden md:h-64">
                      <Image
                        src={study.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 600px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/90 via-navy-ink/30 to-transparent" />
                      <div className="absolute inset-x-6 bottom-5 text-white">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-md">
                          <FileCheck2 className="h-3.5 w-3.5" />
                          {study.reference}
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-bold">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="px-4 py-5 text-center">
                          <p
                            className={`font-display text-2xl font-extrabold md:text-3xl ${accent.text}`}
                          >
                            <Counter
                              value={m.value}
                              prefix={m.prefix}
                              suffix={m.suffix}
                              decimals={m.decimals}
                            />
                          </p>
                          <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-500">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <dl className="flex-1 space-y-4 p-6 md:p-8">
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-navy-deep">
                          Scope
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                          {study.scope}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wide text-navy-deep">
                          Key Performance
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                          {study.performance}
                        </dd>
                      </div>
                    </dl>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
