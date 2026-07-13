import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="text-center lg:text-left">
            <div className="text-3xl font-bold text-navy-deep md:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
