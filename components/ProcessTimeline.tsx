"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PackageCheck, SearchCheck, ShieldCheck, Truck } from "lucide-react";
import { procurementProcess } from "@/lib/products";

const icons = [ClipboardCheck, ShieldCheck, SearchCheck, Truck, PackageCheck];
const ease = [0.22, 1, 0.36, 1] as const;

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Connector line that draws itself in on scroll (desktop) */}
      <div className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 bg-white/10 lg:block">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, ease }}
          className="h-full origin-left bg-gradient-to-r from-gold via-gold-soft to-jade-soft"
        />
      </div>

      <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
        {procurementProcess.map((step, i) => {
          const Icon = icons[i];
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease }}
              className="group flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-navy-ink text-gold-soft shadow-lift transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/50 group-hover:text-white">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white lg:mt-5">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                  {step.text}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
