import { Button } from "./Button";
import { Reveal } from "./Reveal";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CTASection({
  eyebrow = "Partner With Us",
  title = "Your dependable multi-sector supply partner.",
  body = "Whether you are a government bureau, university, NGO, or private institution — Middle East Business delivers compliant, specification-matched procurement across Ethiopia.",
}: CTASectionProps) {
  return (
    <section className="border-t border-slate-200 bg-mist py-20 md:py-24">
      <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-slate-600">{body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="gold">
              Partner With Us
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
