import { Reveal } from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string | string[];
  headingLevel?: 1 | 2;
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  headingLevel = 1,
}: PageHeaderProps) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  const headingClass =
    headingLevel === 2
      ? "mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl"
      : "mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl";
  const introParagraphs = intro
    ? Array.isArray(intro)
      ? intro
      : [intro]
    : [];

  return (
    <section className="border-b border-white/10 bg-hero-gradient py-16 text-white md:py-20">
      <div className="container-x">
        <Reveal>
          {headingLevel === 2 && <h1 className="sr-only">{eyebrow}</h1>}
          <p className="eyebrow-on-dark">{eyebrow}</p>
          <Heading className={headingClass}>{title}</Heading>
          {introParagraphs.length > 0 && (
            <div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-slate-300">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
