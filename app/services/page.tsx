import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { serviceIcons } from "@/lib/icons";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Middle East Business provides IT & e-commerce, industrial & construction support, and agricultural supply chain logistics across Ethiopia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Core Business"
        title="Multi-sector supply under one roof"
        intro="From ICT equipment and network engineering to construction finishing, industrial chemicals, machinery rental, and agricultural commodities — Middle East Business consolidates your procurement needs with a single verified supplier."
      />

      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = serviceIcons[service.slug];
          const reversed = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 border-b border-navy/10 py-20 md:py-28 ${
                reversed ? "bg-mist/50" : "bg-white"
              }`}
            >
              <div className="container-x grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <Reveal>
                    <span className="flex items-center gap-3 eyebrow">
                      <span className="font-serif text-base font-medium">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-gold" />
                      Core Business
                    </span>
                    <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold">
                      <Icon className="h-8 w-8" strokeWidth={1.6} />
                    </span>
                    <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-deep md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-charcoal/75">
                      {service.intro}
                    </p>
                    <div className="mt-6 rounded-2xl border-l-4 border-gold bg-gold/5 p-5">
                      <p className="font-serif text-lg italic leading-relaxed text-navy-deep">
                        {service.highlight}
                      </p>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <Reveal className="rounded-3xl border border-navy/10 bg-white p-8 shadow-card md:p-10">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                      Capabilities
                    </h3>
                    <Stagger className="mt-6 space-y-px">
                      {service.features.map((feature) => (
                        <StaggerItem key={feature} y={12}>
                          <div className="flex items-start gap-3 border-b border-navy/5 py-3.5 last:border-0">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} />
                            </span>
                            <span className="text-sm leading-relaxed text-charcoal/80">
                              {feature}
                            </span>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        eyebrow="Ready to Procure"
        title="One supplier for your institutional needs."
        body="Tell us your tender specifications and delivery requirements — we'll match, supply, and deliver on time."
      />
    </>
  );
}
