import type { Metadata } from "next";
import { BadgeCheck, Clock3, Tablet } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SamsungSpotlight } from "@/components/SamsungSpotlight";
import { ProductCatalog } from "@/components/ProductCatalog";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Aurora } from "@/components/Aurora";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Samsung Galaxy tablets, smartphones, laptops, Smart TVs, monitors, wearables and storage, plus printers, networking, UPS and cameras — supplied to specification by Middle East Business across Ethiopia.",
};

const highlights = [
  { icon: Tablet, text: "554 Samsung tablets contracted" },
  { icon: BadgeCheck, text: "100% specification compliance" },
  { icon: Clock3, text: "3–5 day defect response" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Genuine Samsung devices & enterprise ICT for institutions"
        intro="Smartphones, tablets, laptops, smart displays, wearables and storage from Samsung — alongside printers, networking, UPS and camera systems — sourced through authorized channels and delivered to your exact specification."
        image="/images/sectors/ict.webp"
      >
        <ul className="mt-8 flex flex-wrap gap-3">
          {highlights.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="glass-dark flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-100"
            >
              <Icon className="h-4 w-4 text-jade-soft" />
              {text}
            </li>
          ))}
        </ul>
      </PageHeader>

      <SamsungSpotlight />

      <section id="catalog" className="scroll-mt-24 bg-mist py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Browse what we supply"
            intro="Filter by category or switch to Samsung only. Every item is available in bulk for tenders, framework agreements and direct institutional purchase."
            className="mb-10"
          />
          <ProductCatalog samsungToggle />
          <p className="mt-10 text-center text-sm text-slate-500">
            Don&apos;t see a specific model? We source to your tender specification —
            share the technical requirements and we&apos;ll quote.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-ink py-20 text-white md:py-28">
        <Aurora className="opacity-60" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="How We Deliver"
            title="From tender specification to signed delivery note"
            intro="The same five-step process runs behind every order — whether it's 54 tablets or 500."
            tone="light"
            align="center"
            className="mb-16"
          />
          <ProcessTimeline />
        </div>
      </section>

      <CTASection
        eyebrow="Request a Quotation"
        title="Need Samsung devices for your institution?"
        body="Send us your specification sheet or tender document. We'll match every line item, confirm availability and deliver on your timeline."
      />
    </>
  );
}
