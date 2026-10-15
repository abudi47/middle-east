import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { commitmentIcons } from "@/lib/icons";
import { sopSection, commitments } from "@/lib/content";

export function SopSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 ${
        isDark ? "bg-navy-deep text-white" : "border-b border-slate-200 bg-mist"
      }`}
    >
      <div className={`${isDark ? "grid-dark" : "grid-light"} absolute inset-0`} />
      <div className="container-x relative">
        <SectionHeading
          eyebrow={sopSection.eyebrow}
          title={sopSection.title}
          intro={sopSection.intro}
          tone={isDark ? "light" : "dark"}
          className="mb-12"
        />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {commitments.map((item, i) => {
            const Icon = commitmentIcons[i];
            return (
              <StaggerItem key={item.title} className="h-full">
                <SpotlightCard className="h-full rounded-3xl" tilt={2}>
                  <div
                    className={`relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-500 md:p-8 ${
                      isDark
                        ? "border-white/10 bg-white/[0.04] group-hover:border-white/20"
                        : "border-slate-200 bg-white shadow-sm group-hover:shadow-lift"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -right-2 -top-6 font-display text-[7rem] font-extrabold leading-none ${
                        isDark ? "text-white/[0.04]" : "text-navy/[0.04]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <div className="relative flex items-start gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-navy text-white shadow-gold transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-7 w-7" strokeWidth={1.7} />
                      </span>
                      <div>
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                            isDark
                              ? "bg-jade/20 text-jade-soft"
                              : "bg-jade-wash text-jade-dark"
                          }`}
                        >
                          {item.highlight}
                        </span>
                        <h3
                          className={`mt-2 text-lg font-bold ${
                            isDark ? "text-white" : "text-navy-deep"
                          }`}
                        >
                          {item.number}. {item.title}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
