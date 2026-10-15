import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { OverviewSection } from "@/components/OverviewSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CoreBusinessGrid } from "@/components/CoreBusinessGrid";
import { CaseStudies } from "@/components/CaseStudies";
import { PastWorksTable } from "@/components/PastWorksTable";
import { SopSection } from "@/components/SopSection";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { ExecutiveContactSection } from "@/components/ExecutiveContactSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Aurora } from "@/components/Aurora";
import { portfolioSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Samsung Devices & Multi-Sector Procurement Partner",
  description:
    "Middle East Business PLC supplies Samsung tablets, smartphones, laptops and smart TVs, enterprise ICT, construction supplies and agri-commodities to governmental, public and non-governmental institutions across Ethiopia.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <OverviewSection />
      <ProductShowcase />
      <CoreBusinessGrid />
      <CaseStudies />

      {/* Track record ledger */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
        <Aurora className="opacity-50" />
        <div className="container-x relative">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={portfolioSection.eyebrow}
              title={portfolioSection.title}
              intro={portfolioSection.intro}
              tone="light"
            />
            <Button href="/portfolio" variant="outlineLight" className="shrink-0">
              Full Portfolio
            </Button>
          </div>
          <PastWorksTable tone="dark" />
        </div>
      </section>

      <SopSection />
      <WhyPartnerSection />
      <ExecutiveContactSection />
    </>
  );
}
