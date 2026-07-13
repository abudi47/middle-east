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

  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}
    >
      {eyebrow && <span className={eyebrowClass}>{eyebrow}</span>}
      <h2
        className={`font-display text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-base leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
