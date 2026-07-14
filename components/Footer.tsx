import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { FooterWave } from "./FooterWave";
import { FooterPattern } from "./FooterPattern";
import { company, nav, services, closingGateway } from "@/lib/content";

const credentials = [
  { label: "Reg.", value: company.registrationNo },
  { label: "TIN", value: company.tin },
  { label: "Est.", value: "2016" },
];

export function Footer() {
  return (
    <footer className="relative mt-16 bg-navy-deep text-white md:mt-24">
      <FooterWave />

      <div className="relative overflow-hidden pt-10 md:pt-14">
        <FooterPattern />

        {/* CTA band */}
        <div className="relative border-b border-white/10">
          <div className="container-x pb-16 pt-4 md:pb-20 md:pt-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow-on-dark">{closingGateway.eyebrow}</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug md:text-3xl lg:text-4xl">
                  {closingGateway.headline}
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  {credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="border border-white/15 bg-white/5 px-4 py-2.5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        {cred.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {cred.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4 border-l border-gold/30 pl-6 md:pl-8">
                  {closingGateway.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="text-sm leading-relaxed text-slate-300 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pl-6 md:pl-8">
                  <Button href="/contact" variant="gold" withArrow={false}>
                    {closingGateway.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main links */}
        <div className="relative">
          <div className="container-x grid gap-12 py-14 md:grid-cols-12 md:gap-10 md:py-16">
            <div className="md:col-span-4">
              <Logo tone="light" showTagline />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                {company.descriptor}
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Owned and managed by {company.owner}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-gold-soft transition-colors hover:text-white"
              >
                Get in touch →
              </Link>
            </div>

            <div className="md:col-span-2 md:col-start-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Explore
              </h3>
              <ul className="mt-5 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Services
              </h3>
              <ul className="mt-5 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-sm leading-snug text-slate-300 transition-colors hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Contact
              </h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  <span>{company.headOffice}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                  <a
                    href={`tel:${company.phones[0].tel}`}
                    className="transition-colors hover:text-white"
                  >
                    {company.phones[0].display}
                  </a>
                </li>
                <li className="border-t border-white/10 pt-3.5 text-slate-400">
                  {company.operationalReach}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 bg-navy-imperial/50">
          <div className="container-x flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-relaxed text-slate-500">
              &copy; {new Date().getFullYear()} {company.fullName}. All rights
              reserved.
              <span className="hidden sm:inline"> · </span>
              <span className="mt-1 block sm:mt-0 sm:inline">
                Developed by AB Software Solutions
              </span>
            </p>
            <p className="text-xs font-medium uppercase tracking-wide text-gold-soft/80">
              {company.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
