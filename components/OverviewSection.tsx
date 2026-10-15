import { Building2, Quote, UserRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { RichText } from "@/lib/text";
import { overview, company } from "@/lib/content";

export function OverviewSection() {
  const blocks = [
    { ...overview.partner, icon: Building2, tint: "bg-accent-wash text-gold" },
    { ...overview.leadership, icon: UserRound, tint: "bg-ember-wash text-ember" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={overview.eyebrow} title={overview.title} />
          <Reveal>
            <span className="eyebrow-pill border-gold/20 bg-accent-wash text-accent-text">
              Established Supplier
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={i * 0.08} className="h-full">
                <SpotlightCard className="h-full rounded-3xl" tilt={3}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur transition-shadow duration-500 group-hover:shadow-lift md:p-10">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${block.tint}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-navy-deep">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      <RichText text={block.body} />
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <figure className="relative overflow-hidden rounded-3xl bg-profile-gradient p-8 text-white md:p-12">
            <Quote
              aria-hidden="true"
              className="absolute -right-4 -top-6 h-40 w-40 rotate-180 text-white/[0.07]"
            />
            <blockquote className="relative max-w-4xl font-display text-xl font-semibold leading-relaxed md:text-2xl">
              &ldquo;{overview.pullQuote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-6 flex items-center gap-3 text-sm">
              <span className="h-px w-10 bg-white/50" />
              <span className="font-semibold">{company.owner}</span>
              <span className="text-white/70">{company.ownerTitle}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
