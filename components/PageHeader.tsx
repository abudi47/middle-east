import Image from "next/image";
import { Reveal } from "./Reveal";
import { Aurora } from "./Aurora";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string | string[];
  headingLevel?: 1 | 2;
  /** Optional photo shown faintly behind the header copy. */
  image?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  headingLevel = 1,
  image,
  children,
}: PageHeaderProps) {
  const Heading = headingLevel === 2 ? "h2" : "h1";
  const introParagraphs = intro ? (Array.isArray(intro) ? intro : [intro]) : [];

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-[calc(4.5rem+3.5rem)] text-white md:pb-24 md:pt-[calc(4.5rem+5rem)]">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-ink via-navy-ink/85 to-navy-ink/40" />
      <Aurora className="opacity-70" />

      <div className="container-x relative">
        <Reveal>
          {headingLevel === 2 && <h1 className="sr-only">{eyebrow}</h1>}
          <span className="eyebrow-pill border-white/15 bg-white/5 text-gold-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-jade-soft" />
            {eyebrow}
          </span>
          <Heading className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </Heading>
          {introParagraphs.length > 0 && (
            <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-slate-300 md:text-lg">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
