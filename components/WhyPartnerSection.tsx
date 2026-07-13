import { Stagger, StaggerItem } from "./Reveal";
import { whyPartner } from "@/lib/content";

export function WhyPartnerSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12 max-w-xl">
          <p className="eyebrow">Why Partner With Us</p>
          <h2 className="mt-2 text-2xl font-bold text-navy-deep md:text-3xl">
            Seven reasons institutions choose a single-source supplier
          </h2>
        </div>

        <Stagger className="divide-y divide-slate-200 border border-slate-200">
          {whyPartner.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="grid gap-4 bg-white p-6 md:grid-cols-12 md:items-start md:gap-8 md:p-8">
                <span className="text-sm font-bold text-gold md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="text-base font-bold text-navy-deep md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
