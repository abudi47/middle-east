import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone, FileText, Building } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { company, contactSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Middle East Business in Semera-Logiya, Afar Region, Ethiopia for procurement, tender participation, and supply inquiries.",
};

const details = [
  {
    icon: MapPin,
    label: "Head Office",
    value: company.headOffice,
    href: undefined,
  },
  {
    icon: Building,
    label: "Operational Reach",
    value: company.operationalReach,
    href: undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: FileText,
    label: "Registration",
    value: company.registrationNo,
    href: undefined,
  },
  {
    icon: FileText,
    label: "TIN",
    value: company.tin,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9:00 – 18:00 (EAT)",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        intro={contactSection.intro}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-deep">
                Reach us directly
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                {company.owner}, {company.ownerTitle}, and our team are ready to
                assist with procurement specifications, tender requirements, and
                partnership inquiries.
              </p>

              <div className="mt-10 space-y-6">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                          {d.label}
                        </p>
                        <p className="mt-1 text-base text-navy-deep">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a
                      key={d.label}
                      href={d.href}
                      className="block transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Phone className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                      Phone
                    </p>
                    <span className="mt-1 flex flex-col gap-1">
                      {company.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="text-base text-navy-deep transition-colors hover:text-gold"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border-l-4 border-gold bg-mist/60 p-6">
                <p className="font-serif text-lg italic leading-relaxed text-navy-deep">
                  &ldquo;{company.tagline}&rdquo;
                </p>
                <p className="mt-2 text-sm text-charcoal/65">
                  {company.descriptor}.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
