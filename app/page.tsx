import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { OverviewSection } from "@/components/OverviewSection";
import { CoreBusinessGrid } from "@/components/CoreBusinessGrid";
import { SopSection } from "@/components/SopSection";
import { PastWorksTable } from "@/components/PastWorksTable";
import { ExecutiveContactSection } from "@/components/ExecutiveContactSection";
import { ValuePillars } from "@/components/ValuePillars";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { StatsBand } from "@/components/StatsBand";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { MomentumBanner } from "@/components/MomentumBanner";
import { portfolioSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Multi-Sector Procurement Partner",
  description:
    "Middle East Business is a registered, multi-sector supplier for governmental, public, and institutional procurement across Ethiopia — ICT, construction, industrial, and agricultural supply.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <CoreBusinessGrid />

      {/* Values */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles written into every contract"
            intro="Five commitments that govern how we work with government bureaus, courts, universities, and institutional clients."
            align="center"
            className="mb-4"
          />
          <ValuePillars />
        </div>
      </section>

      <MomentumBanner />
      <WhyPartnerSection />
      <SopSection />

      {/* Portfolio — ledger on dark, no white card box */}
      <section className="border-b border-slate-200 bg-navy-deep py-20 text-white md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={portfolioSection.eyebrow}
              title={portfolioSection.title}
              intro={portfolioSection.intro}
              tone="light"
              className="mb-0"
            />
            <Button href="/portfolio" variant="outlineLight" className="shrink-0">
              Full Portfolio
            </Button>
          </div>

          <PastWorksTable limit={6} variant="ledger" />

          <Reveal className="mt-10">
            <Link
              href="/portfolio"
              className="link-underline text-gold-soft hover:text-white"
            >
              View all completed contracts <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <StatsBand />
      <ExecutiveContactSection />
    </>
  );
}
