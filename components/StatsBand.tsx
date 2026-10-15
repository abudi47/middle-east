import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-profile-gradient py-14 text-white">
      <div className="grid-dark absolute inset-0" />
      <div className="container-x relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center">
            <div className="font-display text-3xl font-extrabold md:text-5xl">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/75">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
