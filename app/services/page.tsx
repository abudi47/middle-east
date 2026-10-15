import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { SopSection } from "@/components/SopSection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { serviceIcons } from "@/lib/icons";
import { accentStyles } from "@/lib/accent";
import { services, coreBusinessSection } from "@/lib/content";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ICT & digital hardware (including Samsung devices), industrial & construction supply, and agri-commodities & supply chain logistics — Middle East Business serves institutions across Ethiopia.",
};

const galleries: Record<string, { src: string; alt: string }[]> = {
  "ict-digital-hardware": [
    { src: "/images/sectors/ict.webp", alt: "Samsung Galaxy smartphones" },
    { src: "/images/products/network-cabling.webp", alt: "Network patch panel and cabling" },
  ],
  "industrial-construction": [
    { src: "/images/sectors/construction.webp", alt: "Excavator on a construction site" },
    { src: "/images/sectors/warehouse.webp", alt: "Industrial supplies warehouse with racking" },
  ],
  "agri-commodities-supply-chain": [
    { src: "/images/sectors/agri.webp", alt: "Bulk grain" },
    { src: "/images/sectors/logistics.webp", alt: "Trucks at a regional distribution depot" },
  ],
};

const samsungPicks = products
  .filter((p) => p.brand === "Samsung")
  .slice(0, 4);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={coreBusinessSection.eyebrow}
        title="Multi-sector supply under one certified vendor"
        intro={coreBusinessSection.intro}
        image="/images/sectors/warehouse.webp"
      >
        <nav aria-label="Sectors" className="mt-8 flex flex-wrap gap-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="glass-dark group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon className={`h-4 w-4 ${accentStyles[s.accent].textOnDark}`} />
                {s.number}. {s.title}
              </Link>
            );
          })}
        </nav>
      </PageHeader>

      {services.map((service, i) => {
        const Icon = serviceIcons[service.slug];
        const accent = accentStyles[service.accent];
        const reversed = i % 2 === 1;
        const [primary, secondary] = galleries[service.slug];
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 md:py-28 ${reversed ? "bg-mist" : "bg-white"}`}
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Collage */}
              <Reveal
                className={`relative lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                  <Image
                    src={primary.src}
                    alt={primary.alt}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/50 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-6xl font-extrabold text-white/80 drop-shadow">
                    {service.number}
                  </span>
                </div>
                <div
                  className={`absolute -bottom-8 hidden w-[42%] overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block ${
                    reversed ? "-left-6" : "-right-6"
                  }`}
                >
                  <div className="relative aspect-[4/3] animate-float">
                    <Image
                      src={secondary.src}
                      alt={secondary.alt}
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Copy */}
              <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
                <Reveal>
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <p className={`mt-6 text-xs font-bold uppercase tracking-brand ${accent.text}`}>
                    Sector {service.number}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-deep md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    {service.summary}
                  </p>
                </Reveal>

                <Stagger className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <StaggerItem key={feature.title}>
                      <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                        <span className={`mt-1 h-10 w-1 shrink-0 rounded-full bg-gradient-to-b ${accent.bar}`} />
                        <div>
                          <h3 className="font-bold text-navy-deep">{feature.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                {service.slug === "ict-digital-hardware" && (
                  <Reveal className="mt-8 rounded-2xl border border-gold/20 bg-accent-wash/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-brand text-accent-text">
                      Featured: Samsung devices
                    </p>
                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {samsungPicks.map((p) => (
                        <div key={p.slug} className="group relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src={p.image}
                            alt={p.alt}
                            fill
                            sizes="120px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/products"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-navy-deep"
                    >
                      Browse the product catalog <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <SopSection tone="dark" />

      <CTASection
        eyebrow="Ready to Procure"
        title="One certified vendor for your institutional needs."
        body="Tell us your tender specifications and delivery requirements — we'll match, supply, and deliver on time."
      />
    </>
  );
}
