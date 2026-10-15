import type { Metadata } from "next";
import { Target, Eye, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { OverviewSection } from "@/components/OverviewSection";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { ValuePillars } from "@/components/ValuePillars";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { RhythmDivider } from "@/components/RhythmLine";
import {
  overview,
  aboutSection,
  mission,
  vision,
  missionPoints,
  goals,
  brandStory,
  commitment,
  company,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Middle East Business PLC — a registered multi-sector enterprise headquartered in Semera-Logiya, Afar, with operational wings in Addis Ababa and Hawassa, owned and directed by Mrs. Leyla Eshetu Seid.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutSection.eyebrow}
        title={aboutSection.title}
        intro={overview.body}
        headingLevel={2}
        image="/images/sectors/logistics.webp"
      />

      <OverviewSection />

      {/* Mission & Vision */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <SpotlightCard className="h-full rounded-3xl" tilt={3}>
              <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-8 shadow-sm md:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold-soft">
                  <Target className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-navy-deep">Our Mission</h2>
                <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
                  &ldquo;{mission}&rdquo;
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <SpotlightCard className="h-full rounded-3xl" tilt={3} glow="rgba(255,255,255,0.12)">
              <div className="flex h-full flex-col rounded-3xl bg-profile-gradient p-8 text-white md:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy-deep">
                  <Eye className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/90">
                  &ldquo;{vision}&rdquo;
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* Mission in practice + Goals */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mission in Practice"
              title="How we serve our clients every day"
              className="mb-10"
            />
            <Stagger className="space-y-3">
              {missionPoints.map((point, i) => (
                <StaggerItem key={point.slice(0, 24)}>
                  <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-card">
                    <span className="font-display text-lg font-extrabold text-gold transition-transform duration-300 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-charcoal/80 md:text-base">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <SectionHeading
              eyebrow="Goals & Objectives"
              title="Delivering value on every contract"
              className="mb-10"
            />
            <Stagger className="grid gap-4">
              {goals.map((goal, i) => (
                <StaggerItem key={goal.slice(0, 24)}>
                  <div className="flex gap-4 rounded-2xl bg-mist p-6 ring-1 ring-slate-200">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-charcoal/80 md:text-base">
                      {goal}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind our partnerships"
            align="center"
            className="mb-14"
          />
          <ValuePillars />
        </div>
      </section>

      {/* Company story */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Story"
            title="Registered, compliant, and growing with our clients"
            align="center"
            className="mb-16"
          />

          <ol className="relative mx-auto max-w-4xl space-y-10 border-l-2 border-gold/20 pl-8 md:pl-12">
            {[
              { label: "Establishment", text: brandStory.origin },
              { label: "Purpose", text: brandStory.purpose },
              { label: "Future Direction", text: brandStory.future },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08} as="li" className="relative">
                <span className="absolute -left-[2.6rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-gold shadow md:-left-[3.6rem]" />
                <h3 className="text-sm font-bold uppercase tracking-brand text-gold">
                  {item.label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/80 md:text-lg">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ol>

          <RhythmDivider className="mt-16" />
          <Reveal className="mt-6 text-center">
            <p className="font-display text-2xl font-bold text-gold">
              {company.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <WhyPartnerSection />

      {/* Commitment */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-l-4 border-gold bg-white p-10 shadow-card md:p-14">
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              Our Commitment
            </span>
            <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-navy-deep md:text-2xl">
              {commitment}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
            >
              Contact us today <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
