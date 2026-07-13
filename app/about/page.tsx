import type { Metadata } from "next";
import { Target, Eye, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { SopSection } from "@/components/SopSection";
import { ValuePillars } from "@/components/ValuePillars";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { UPattern } from "@/components/UPattern";
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
    "Learn about Middle East Business — a registered multi-sector enterprise serving governmental, public, and institutional procurement across Ethiopia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutSection.eyebrow}
        title={aboutSection.title}
        intro={overview.body}
        headingLevel={2}
      />

      {/* Mission & Vision */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl border border-navy/10 bg-mist/50 p-8 md:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
              <Target className="h-7 w-7" strokeWidth={1.6} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep">
              Our Mission
            </h2>
            <p className="mt-4 font-serif text-lg italic leading-relaxed text-charcoal/80">
              &ldquo;{mission}&rdquo;
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col rounded-3xl bg-navy-gradient p-8 text-white md:p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy-deep">
              <Eye className="h-7 w-7" strokeWidth={1.6} />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 font-serif text-lg italic leading-relaxed text-white/85">
              &ldquo;{vision}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission Points */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Mission in Practice"
            title="How we serve our clients every day"
            align="center"
            className="mb-14"
          />
          <Stagger className="mx-auto grid max-w-4xl gap-4">
            {missionPoints.map((point, i) => (
              <StaggerItem key={point.slice(0, 24)}>
                <div className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                  <span className="font-serif text-xl font-medium text-gold">
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
      </section>

      {/* Goals */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Goals & Objectives"
            title="Delivering value on every procurement contract"
            intro="Our objectives align with public procurement value-for-money principles and institutional accountability."
            className="mb-14"
          />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {goals.map((goal, i) => (
              <StaggerItem key={goal.slice(0, 24)}>
                <div className="flex h-full gap-4 rounded-2xl border border-navy/10 bg-mist/50 p-6">
                  <span className="font-serif text-2xl font-medium italic text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-charcoal/75">
                    {goal}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 md:py-32">
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
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Story"
            title="Registered, compliant, and growing with our clients"
            align="center"
            className="mb-16"
          />

          <div className="mx-auto grid max-w-4xl gap-10">
            {[
              { label: "Establishment", text: brandStory.origin },
              { label: "Purpose", text: brandStory.purpose },
              { label: "Future Direction", text: brandStory.future },
            ].map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.05}
                className="grid gap-4 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                    {item.label}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-charcoal/80 md:col-span-9 md:text-lg">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>

          <RhythmDivider className="mt-16" />
          <Reveal className="mt-6 text-center">
            <p className="font-serif text-2xl italic text-gold">
              {company.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SOP */}
      <SopSection tone="dark" />

      {/* Commitment */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-l-4 border-gold bg-mist/60 p-10 md:p-14">
            <span className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              Our Commitment
            </span>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-navy-deep md:text-3xl">
              {commitment}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
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
