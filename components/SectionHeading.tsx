import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = tone === "light" ? "text-white" : "text-navy-deep";
  const introColor = tone === "light" ? "text-slate-300" : "text-slate-600";
  const eyebrowClass = tone === "light" ? "eyebrow-on-dark" : "eyebrow";
  const ruleColor = tone === "light" ? "bg-gold-soft" : "bg-gold";

  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className={`${eyebrowClass} flex items-center gap-3`}>
          <span className={`h-px w-8 ${ruleColor}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-balance md:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-base leading-relaxed md:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
