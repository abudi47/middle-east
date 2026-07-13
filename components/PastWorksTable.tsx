import { Reveal } from "./Reveal";
import { pastWorks, type PastWork } from "@/lib/content";

type PastWorksTableProps = {
  works?: PastWork[];
  limit?: number;
  compact?: boolean;
  variant?: "card" | "ledger";
};

function formatValue(value: string) {
  return `${value} ETB`;
}

export function PastWorksTable({
  works = pastWorks,
  limit,
  variant = "card",
}: PastWorksTableProps) {
  const rows = limit ? works.slice(0, limit) : works;
  const isLedger = variant === "ledger";

  if (isLedger) {
    return (
      <Reveal>
        <div className="divide-y divide-white/10">
          {rows.map((work, i) => (
            <div
              key={`${work.client}-${work.items}`}
              className="grid gap-2 py-4 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <div className="text-xs text-slate-500 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-5">
                <p className="text-sm font-semibold text-white">
                  {work.client}
                </p>
                <p className="mt-0.5 text-sm text-slate-400">{work.items}</p>
              </div>
              <div className="text-sm font-medium text-gold-soft md:col-span-3">
                {formatValue(work.value)}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 md:col-span-3 md:text-right">
                {work.status}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="overflow-x-auto border border-slate-200 bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-mist">
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Client
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Items Supplied
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contract Value
            </th>
            <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((work) => (
            <tr key={`${work.client}-${work.items}`} className="hover:bg-mist">
              <td className="px-5 py-4 font-semibold text-navy-deep">
                {work.client}
              </td>
              <td className="px-5 py-4 text-slate-600">{work.items}</td>
              <td className="px-5 py-4 font-medium text-accent-text">
                {formatValue(work.value)}
              </td>
              <td className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-teal">
                {work.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
