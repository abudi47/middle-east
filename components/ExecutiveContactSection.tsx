import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { company, contactSection } from "@/lib/content";

export function ExecutiveContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-200 bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-0 border border-slate-200 bg-white lg:grid-cols-12">
          <Reveal className="flex flex-col justify-between bg-navy-deep p-8 text-white md:p-10 lg:col-span-5">
            <div>
              <p className="eyebrow-on-dark">{contactSection.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                {contactSection.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {contactSection.intro}
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-white/15 pt-8 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </p>
                <a
                  href={`tel:${company.phones[0].tel}`}
                  className="mt-1 block font-semibold text-white hover:text-gold-soft"
                >
                  {company.phones[0].display}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-slate-300 hover:text-white"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Head Office
                </p>
                <p className="mt-1 text-slate-300">{company.headOffice}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="p-8 md:p-10 lg:col-span-7">
            <ContactForm embedded />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
