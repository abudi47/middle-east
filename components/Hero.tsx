"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Award, ShieldCheck, Tablet } from "lucide-react";
import { Button } from "./Button";
import { Aurora } from "./Aurora";
import { Counter } from "./Counter";
import { hero, stats } from "@/lib/content";
import { heroImages } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;

function useParallax(source: MotionValue<number>, distance: number) {
  return useSpring(useTransform(source, [-0.5, 0.5], [-distance, distance]), {
    stiffness: 90,
    damping: 18,
  });
}

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const backX = useParallax(mx, 10);
  const backY = useParallax(my, 10);
  const midX = useParallax(mx, 22);
  const midY = useParallax(my, 22);
  const frontX = useParallax(mx, 36);
  const frontY = useParallax(my, 36);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const [lead] = hero.title.split(hero.titleAccent);
  const leadWords = lead.trim().split(" ");
  const accentWords = hero.titleAccent.split(" ");

  return (
    <section
      onPointerMove={onMove}
      className="relative overflow-hidden bg-hero-gradient pt-[4.5rem] text-white"
    >
      <Aurora />

      <div className="container-x relative">
        <div className="grid items-center gap-12 py-14 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="eyebrow-on-dark flex items-center gap-3"
            >
              <span className="hidden h-px w-8 bg-gold-soft sm:block" />
              {hero.eyebrow}
            </motion.p>

            <h1 className="mt-6 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {leadWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
              {accentWords.map((word, i) => (
                <motion.span
                  key={`${word}-a${i}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + (leadWords.length + i) * 0.06,
                    ease,
                  }}
                  className="mr-[0.25em] inline-block text-gold-soft"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href={hero.primaryCta.href} variant="gold">
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease }}
              className="mt-8 flex items-start gap-2 text-sm text-slate-400"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.8} />
              <span>
                {hero.credentials
                  .map((cred) => `${cred.label} ${cred.value}`)
                  .join(" · ")}
              </span>
            </motion.p>
          </div>

          {/* Product collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative mx-auto aspect-[5/5] w-full max-w-[560px] sm:aspect-[6/5] lg:col-span-6 lg:max-w-none"
          >
            {/* Glow */}
            <div className="absolute inset-[12%] rounded-full bg-gold/30 blur-3xl" />

            {/* Main image */}
            <motion.div
              style={{ x: backX, y: backY }}
              className="absolute inset-x-[8%] top-[8%] bottom-[14%] overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={heroImages.main.src}
                alt={heroImages.main.alt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/50 via-transparent to-transparent" />
            </motion.div>

            {/* Secondary image — top left */}
            <motion.div
              style={{ x: midX, y: midY }}
              className="absolute left-0 top-0 hidden w-[34%] sm:block"
            >
              <div className="relative aspect-[4/5] animate-float overflow-hidden rounded-2xl border border-white/20 shadow-lift">
                <Image
                  src={heroImages.secondary.src}
                  alt={heroImages.secondary.alt}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Tertiary image — bottom right */}
            <motion.div
              style={{ x: frontX, y: frontY }}
              className="absolute bottom-0 right-0 hidden w-[40%] sm:block"
            >
              <div className="relative aspect-[4/3] animate-float-delayed overflow-hidden rounded-2xl border border-white/20 shadow-lift">
                <Image
                  src={heroImages.tertiary.src}
                  alt={heroImages.tertiary.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Contract badges */}
            <motion.div
              style={{ x: frontX, y: frontY }}
              className="absolute -left-2 bottom-[6%] sm:bottom-[20%] sm:left-[-4%]"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease }}
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 text-navy-deep shadow-lift backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash text-gold">
                  <Tablet className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold leading-none">
                    500 Samsung tablets
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Willows International · ETB 29.7M
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ x: midX, y: midY }}
              className="absolute right-0 top-[2%] sm:right-[2%] sm:top-[4%]"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.25, ease }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-ink/80 px-4 py-3 shadow-lift backdrop-blur-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/20 text-ember-soft">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold leading-none">
                    Ranked #1 bidder
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    EDRMC federal tender · Lot-8
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="relative grid grid-cols-2 overflow-hidden rounded-t-3xl border border-b-0 border-white/10 bg-white/[0.04] backdrop-blur-md lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-6 md:px-8 md:py-7 ${
                i % 2 === 0 ? "border-r border-white/10" : ""
              } ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""} ${
                i === 1 ? "lg:border-r" : ""
              }`}
            >
              <p className="font-display text-2xl font-extrabold text-white md:text-4xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-jade-soft" />
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
