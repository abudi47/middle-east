"use client";

import { motion } from "framer-motion";
import { pastWorks, type ContractStatus, type PastWork } from "@/lib/content";

type PastWorksTableProps = {
  works?: PastWork[];
  limit?: number;
  tone?: "dark" | "light";
};

const statusStyles: Record<ContractStatus, { dark: string; light: string; live?: boolean }> = {
  "Awarded & Active": {
    dark: "bg-gold/20 text-gold-soft ring-gold/30",
    light: "bg-accent-wash text-accent-text ring-gold/25",
    live: true,
  },
  "Fully Delivered": {
    dark: "bg-jade/20 text-jade-soft ring-jade/30",
    light: "bg-jade-wash text-jade-dark ring-jade/25",
  },
  "Delivered On-Time": {
    dark: "bg-jade/20 text-jade-soft ring-jade/30",
    light: "bg-jade-wash text-jade-dark ring-jade/25",
  },
  Completed: {
    dark: "bg-white/10 text-slate-200 ring-white/15",
    light: "bg-slate-100 text-slate-700 ring-slate-200",
  },
};

export function PastWorksTable({
  works = pastWorks,
  limit,
  tone = "light",
}: PastWorksTableProps) {
  const rows = limit ? works.slice(0, limit) : works;
  const max = Math.max(...works.map((w) => w.valueNumeric ?? 0));
  const dark = tone === "dark";

  return (
    <div
      className={`overflow-hidden rounded-3xl border ${
        dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <div
        className={`hidden grid-cols-12 gap-6 px-6 py-4 text-[11px] font-bold uppercase tracking-wide md:grid ${
          dark ? "bg-white/[0.04] text-slate-400" : "bg-navy-deep text-white"
        }`}
      >
        <span className="col-span-5">Client / Project Scope</span>
        <span className="col-span-4">Contract Value (ETB)</span>
        <span className="col-span-3 text-right">Execution Status</span>
      </div>

      <ol className={dark ? "divide-y divide-white/10" : "divide-y divide-slate-100"}>
        {rows.map((work, i) => {
          const status = statusStyles[work.status];
          const pct = work.valueNumeric ? Math.max(4, (work.valueNumeric / max) * 100) : 0;
          return (
            <motion.li
              key={work.client}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group grid gap-3 px-6 py-5 transition-colors md:grid-cols-12 md:items-center md:gap-6 ${
                dark ? "hover:bg-white/[0.04]" : "hover:bg-mist"
              }`}
            >
              <div className="flex gap-4 md:col-span-5">
                <span
                  className={`mt-0.5 font-display text-sm font-bold ${
                    dark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className={`font-semibold ${dark ? "text-white" : "text-navy-deep"}`}>
                    {work.client}
                  </p>
                  <p className={`mt-0.5 text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
                    {work.scope}
                  </p>
                </div>
              </div>

              <div className="pl-9 md:col-span-4 md:pl-0">
                <p
                  className={`text-sm font-bold tabular-nums ${
                    dark ? "text-gold-soft" : "text-accent-text"
                  }`}
                >
                  {work.value}
                </p>
                <div
                  className={`mt-2 h-1.5 overflow-hidden rounded-full ${
                    dark ? "bg-white/10" : "bg-slate-100"
                  }`}
                >
                  {work.valueNumeric ? (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-gold to-jade-soft"
                    />
                  ) : (
                    <div className="h-full w-full bg-[repeating-linear-gradient(90deg,rgba(74,154,212,0.5)_0_6px,transparent_6px_12px)]" />
                  )}
                </div>
              </div>

              <div className="pl-9 md:col-span-3 md:pl-0 md:text-right">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1 ${
                    dark ? status.dark : status.light
                  }`}
                >
                  {status.live && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                  )}
                  {work.status}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
