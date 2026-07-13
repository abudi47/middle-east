import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { sopSection, sopAreas } from "@/lib/content";

export function SopSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <section
      className={`py-20 md:py-28 ${
        isDark ? "bg-navy-deep text-white" : "border-b border-slate-200 bg-accent-wash"
      }`}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow={sopSection.eyebrow}
          title={sopSection.title}
          intro={sopSection.intro}
          tone={isDark ? "light" : "dark"}
          className="mb-12"
        />

        <Stagger className="grid gap-5 md:grid-cols-3">
          {sopAreas.map((area, i) => (
            <StaggerItem key={area.title}>
              <Reveal
                className={`h-full border p-6 md:p-8 ${
                  isDark
                    ? "border-white/15 bg-white/5"
                    : "border-slate-200 bg-white"
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center text-sm font-bold text-white ${
                    isDark ? "bg-gold" : "bg-navy-deep"
                  }`}
                >
                  {i + 1}
                </span>
                <h3
                  className={`mt-4 text-base font-bold ${
                    isDark ? "text-white" : "text-navy-deep"
                  }`}
                >
                  {area.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {area.points.map((point) => (
                    <li
                      key={point.slice(0, 24)}
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
