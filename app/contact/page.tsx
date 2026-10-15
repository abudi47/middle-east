import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  FileText,
  Building,
  Landmark,
  UserRound,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { RegionsMap } from "@/components/RegionsMap";
import { company, contactSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Middle East Business — head office in Semera-Logiya, Afar, with operational wings in Addis Ababa and Hawassa — for Samsung devices, ICT, construction and agri-commodity procurement.",
};

const details = [
  {
    icon: MapPin,
    label: "Head Office (Afar)",
    value: company.headOffice,
  },
  {
    icon: Building,
    label: "Operational Wings",
    value: "Addis Ababa Hub: Central Distribution · Sidama Office: Hawassa Operations",
  },
  {
    icon: UserRound,
    label: "General Manager",
    value: company.owner,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: FileText,
    label: "Registration · TIN",
    value: `${company.registrationNo} · ${company.tin}`,
  },
  {
    icon: Landmark,
    label: "Registered Capital",
    value: company.registeredCapital,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9:00 – 18:00 (EAT)",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        intro={contactSection.intro}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {company.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="glass-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-jade-soft" />
              {phone.display}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl font-bold text-navy-deep">
                Reach us directly
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                {company.owner}, {company.ownerTitle}, and our team are ready to
                assist with procurement specifications, tender requirements, and
                partnership inquiries.
              </p>

              <ul className="mt-8 space-y-3">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-gold/30 hover:shadow-card">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-wash text-gold">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          {d.label}
                        </p>
                        <p className="mt-0.5 break-words text-sm font-medium text-navy-deep md:text-base">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a href={d.href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.15} className="relative overflow-hidden rounded-3xl bg-navy-ink p-6 md:p-8">
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-brand text-slate-400">
                Where we operate
              </p>
              <RegionsMap />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
