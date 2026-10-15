import { Phone } from "lucide-react";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { company } from "@/lib/content";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CTASection({
  eyebrow = "Partner With Us",
  title = "Your dependable multi-sector supply partner.",
  body = "Whether you are a federal commission, regional bureau, university, NGO, or private institution — Middle East Business delivers compliant, specification-matched procurement across Ethiopia.",
}: CTASectionProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-profile-gradient px-8 py-12 text-white md:px-14 md:py-16">
          <div className="grid-dark absolute inset-0" />
          <div className="absolute -right-20 -top-20 h-72 w-72 animate-aurora rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-white/80">{eyebrow}</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                {body}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <Button href="/contact" variant="white">
                Request a Quote
              </Button>
              <a
                href={`tel:${company.phones[0].tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {company.phones[0].display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
