import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { overview, goals, company } from "@/lib/content";

export function OverviewSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={overview.eyebrow}
              title={overview.title}
            />
            <div className="ruled-margin mt-8 space-y-5">
              {overview.body.map((p) => (
                <Reveal key={p.slice(0, 24)}>
                  <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 flex flex-wrap gap-4">
              <div className="stamp-box">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Registration
                </p>
                <p className="mt-1 text-sm font-bold text-navy-deep">
                  {company.registrationNo}
                </p>
              </div>
              <div className="stamp-box">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  TIN
                </p>
                <p className="mt-1 text-sm font-bold text-navy-deep">
                  {company.tin}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="bg-navy-deep p-8 text-white md:p-10">
              <p className="text-lg font-medium leading-relaxed md:text-xl">
                &ldquo;{overview.pullQuote}&rdquo;
              </p>
              <p className="mt-5 border-t border-white/15 pt-5 text-sm text-slate-300">
                {company.owner}, {company.ownerTitle}
              </p>
            </Reveal>

            <div className="mt-10">
              <p className="eyebrow">Goals &amp; Objectives</p>
              <h3 className="mt-2 text-xl font-bold text-navy-deep">
                What we deliver on every contract
              </h3>

              <Stagger className="mt-6 space-y-3">
                {goals.map((goal, i) => (
                  <StaggerItem key={goal.slice(0, 24)}>
                    <div className="flex gap-4 border border-slate-200 bg-mist px-5 py-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-gold text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {goal}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
