import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PastWorksTable } from "@/components/PastWorksTable";
import { CaseStudies } from "@/components/CaseStudies";
import { StatsBand } from "@/components/StatsBand";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Aurora } from "@/components/Aurora";
import { partnerIcons } from "@/lib/icons";
import { portfolioSection, targetPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Key executed contracts by Middle East Business for Willows International, the Ethiopian Disaster Risk Management Commission, The Fred Hollows Foundation, regional courts, bureaus and colleges.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow={portfolioSection.eyebrow}
        title="A proven public-sector track record"
        intro={portfolioSection.intro}
        image="/images/products/samsung-tablet-closeup.webp"
      />

      <StatsBand />

      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Key Executed Contracts"
            title={portfolioSection.title}
            className="mb-10"
          />
          <PastWorksTable />
          <p className="mt-6 text-center text-sm text-slate-500">
            Contract values as stated in award and performance documentation.
            Supporting letters are available upon request.
          </p>
        </div>
      </section>

      <CaseStudies />

      {/* Who we serve */}
      <section className="relative overflow-hidden bg-navy-ink py-20 text-white md:py-28">
        <Aurora className="opacity-60" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Institutional clients across Ethiopia"
            intro="Federal commissions, courts, universities, regional bureaus, international NGOs and project developers trust Middle East Business for compliant, specification-matched supply."
            tone="light"
            align="center"
            className="mb-14"
          />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {targetPartners.map((partner) => {
              const Icon = partnerIcons[partner.title];
              return (
                <StaggerItem key={partner.title} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-soft transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-white">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
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
        body="Award notifications and performance certificates from executed contracts are available for reference upon request."
      />
    </>
  );
}
