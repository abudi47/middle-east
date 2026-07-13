"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";
import { Button } from "./Button";
import { HeroPattern } from "./HeroPattern";
import { hero, company } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const titleParts = hero.title.split(hero.titleAccent);

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <HeroPattern />
      <div className="relative border-b border-white/10">
        <div className="container-x flex min-h-[calc(100vh-4.5rem)] flex-col">
          {/* Main content */}
          <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="eyebrow-on-dark"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06, ease }}
                className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
              >
                {titleParts[0]}
                <span className="hero-accent">{hero.titleAccent}</span>
                {titleParts[1]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14, ease }}
                className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22, ease }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button
                  href={hero.primaryCta.href}
                  variant="gold"
                  withArrow={false}
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  href={hero.secondaryCta.href}
                  variant="outlineLight"
                  withArrow={false}
                >
                  {hero.secondaryCta.label}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-6 flex items-center gap-2 text-slate-400"
              >
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                <span className="text-sm">
                  {company.location} · Est. 2016
                </span>
              </motion.div>
            </div>

            {/* Credentials panel */}
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
              className="w-full"
            >
              <div className="border border-white/15 bg-white/5 p-6 md:p-8">
                <p className="font-label text-[11px] font-semibold uppercase tracking-brand text-gold-soft">
                  Company Credentials
                </p>
                <dl className="mt-5 divide-y divide-white/10">
                  {hero.credentials.map((cred) => (
                    <div
                      key={cred.label}
                      className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[140px_1fr]"
                    >
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {cred.label}
                      </dt>
                      <dd className="text-sm font-semibold text-white sm:text-base">
                        {cred.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex items-start gap-3 border-t border-white/10 pt-5">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm leading-relaxed text-slate-300">
                    Registered under Ethiopian law for public tender
                    participation
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Stats — in document flow, no overlap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="grid grid-cols-3 border-t border-white/10"
          >
            {hero.highlights.map((item) => (
              <div
                key={item.label}
                className="border-r border-white/10 px-4 py-5 text-center last:border-r-0"
              >
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
