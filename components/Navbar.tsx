"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, company } from "@/lib/content";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark band, so the bar starts transparent/light.
  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          open
            ? "border-b border-slate-200/70 bg-white"
            : scrolled
              ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[4.5rem] items-center justify-between">
          <Link
            href="/"
            aria-label="Middle East Business home"
            className="relative z-50"
          >
            <Logo tone={solid ? "dark" : "light"} />
          </Link>

          <ul
            className={`hidden items-center gap-1 rounded-full p-1 lg:flex ${
              solid ? "" : "bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
            }`}
          >
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className={`absolute inset-0 rounded-full ${
                        solid ? "bg-accent-wash" : "bg-white/15"
                      }`}
                    />
                  )}
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      solid
                        ? active
                          ? "text-accent-text"
                          : "text-charcoal hover:text-accent-text"
                        : active
                          ? "text-white"
                          : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="btn-shine group hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-dark lg:inline-flex"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`relative z-50 -mr-2 inline-flex items-center justify-center rounded-full p-2 transition-colors lg:hidden ${
              solid ? "text-charcoal" : "text-white"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise become
          the containing block for this fixed panel and collapse it to 0px. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[4.5rem] z-[45] flex flex-col overflow-y-auto bg-white lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
              className="flex flex-col px-6 pb-8 pt-4"
            >
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 24 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between border-b border-slate-100 py-4 font-display text-xl font-semibold transition-colors ${
                        active
                          ? "text-accent-text"
                          : "text-charcoal hover:text-accent-text"
                      }`}
                    >
                      {item.label}
                      <ArrowRight
                        className={`h-5 w-5 ${active ? "opacity-100" : "opacity-30"}`}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="mt-auto space-y-3 px-6 pb-10">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
              <a
                href={`tel:${company.phones[0].tel}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-navy-deep"
              >
                <Phone className="h-4 w-4" />
                {company.phones[0].display}
              </a>
              <p className="pt-2 text-center text-xs text-slate-400">
                {company.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
