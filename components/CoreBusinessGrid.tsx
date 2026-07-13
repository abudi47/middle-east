import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { coreBusinessSection, coreBusinessAreas } from "@/lib/content";

export function CoreBusinessGrid() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-slate-200 bg-mist py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={coreBusinessSection.eyebrow}
          title={coreBusinessSection.title}
          intro={coreBusinessSection.intro}
          className="mb-12"
        />

        <Stagger className="grid gap-5 md:grid-cols-3">
          {coreBusinessAreas.map((area) => (
            <StaggerItem key={area.slug} className="h-full">
              <article className="flex h-full flex-col border border-slate-200 bg-white p-6 transition-shadow hover:shadow-card md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold">
                    Sector {area.number}
                  </span>
                  <Link
                    href={`/services#${area.slug}`}
                    className="text-slate-400 hover:text-gold"
                    aria-label={`Learn more about ${area.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <h3 className="mt-4 text-lg font-bold text-navy-deep">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {area.summary}
                </p>

                <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-5">
                  {area.capabilities.map((cap) => (
                    <li
                      key={cap.slice(0, 28)}
                      className="flex gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
