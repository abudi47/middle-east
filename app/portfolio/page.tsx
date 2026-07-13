import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PastWorksTable } from "@/components/PastWorksTable";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { UPattern } from "@/components/UPattern";
import { partnerIcons } from "@/lib/icons";
import { portfolioSection, targetPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Completed supply contracts and public tenders by Middle East Business with regional bureaus, courts, universities, and federal agencies across Ethiopia.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow={portfolioSection.eyebrow}
        title={portfolioSection.title}
        intro={[portfolioSection.intro]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="container-x">
          <PastWorksTable />
          <p className="mt-8 text-center text-sm text-charcoal/60">
            Contract values are as stated in respective award and performance
            letters. Supporting documentation is available upon request.
          </p>
        </div>
      </section>

      {/* Target partners */}
      <section className="relative overflow-hidden bg-navy-deep py-24 text-white md:py-32">
        <UPattern opacity={0.05} />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Institutional clients across Ethiopia"
            intro="Government offices, courts, universities, construction enterprises, NGOs, and private institutions trust Middle East Business for compliant, specification-matched supply."
            tone="light"
            align="center"
            className="mb-16"
          />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {targetPartners.map((partner) => {
              const Icon = partnerIcons[partner.title];
              return (
                <StaggerItem key={partner.title} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 font-display text-base font-bold text-white">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {partner.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Proven Performance"
        title="Request our performance letters."
        body="Award notifications and performance certificates from completed contracts are available for reference upon request."
      />
    </>
  );
}
