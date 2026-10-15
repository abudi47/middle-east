import { BadgeCheck } from "lucide-react";
import { pastWorks } from "@/lib/content";

const clients = pastWorks.map((w) => w.client);

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {clients.map((client) => (
        <li
          key={client}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-sm"
        >
          <BadgeCheck className="h-4 w-4 text-gold" />
          {client}
        </li>
      ))}
    </ul>
  );
}

export function ClientMarquee() {
  return (
    <section
      aria-label="Institutions we have supplied"
      className="border-b border-slate-200 bg-mist py-10"
    >
      <p className="container-x text-center text-xs font-semibold uppercase tracking-brand text-slate-500">
        Trusted by federal commissions, international NGOs, regional courts &amp;
        academic institutions
      </p>
      <div className="mask-fade-x group mt-6 overflow-hidden">
        <div className="group-pause flex w-max animate-marquee-slow">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
