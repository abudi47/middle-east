import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { Aurora } from "./Aurora";
import { company, contactSection } from "@/lib/content";

export function ExecutiveContactSection() {
  const rows = [
    {
      icon: Phone,
      label: "Phone",
      content: (
        <span className="flex flex-col">
          {company.phones.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="font-semibold text-white transition-colors hover:text-gold-soft"
            >
              {p.display}
            </a>
          ))}
        </span>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <a
          href={`mailto:${company.email}`}
          className="break-all text-slate-200 transition-colors hover:text-white"
        >
          {company.email}
        </a>
      ),
    },
    {
      icon: UserRound,
      label: "General Manager",
      content: <span className="text-slate-200">{company.owner}</span>,
    },
    {
      icon: MapPin,
      label: "Head Office (Afar)",
      content: <span className="text-slate-200">{company.headOffice}</span>,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lift lg:grid-cols-12">
          <Reveal className="relative flex flex-col justify-between overflow-hidden bg-navy-ink p-8 text-white md:p-10 lg:col-span-5">
            <Aurora className="opacity-70" />
            <div className="relative">
              <p className="eyebrow-on-dark">Get In Touch</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                {contactSection.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {contactSection.intro}
              </p>
            </div>

            <ul className="relative mt-10 space-y-5 border-t border-white/15 pt-8 text-sm">
              {rows.map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.label} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {row.label}
                      </p>
                      <div className="mt-0.5">{row.content}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="p-8 md:p-10 lg:col-span-7">
            <ContactForm embedded />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
