"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav, company } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="container-x flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          aria-label="Middle East Business home"
          className="relative z-50"
        >
          <Logo tone="dark" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-accent-text"
                      : "text-charcoal hover:text-accent-text"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-[1.35rem] left-0 h-0.5 w-full bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-brand bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark lg:inline-flex"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 -mr-2 inline-flex items-center justify-center p-2 text-charcoal lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 pb-8 pt-24">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between border-b border-slate-100 py-4 text-lg font-medium transition-colors ${
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
            );
          })}
        </div>

        <div className="mt-auto px-6 pb-10">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-brand bg-gold px-7 py-3.5 text-sm font-semibold text-white"
          >
            Get in Touch
          </Link>
          <p className="mt-5 text-center text-xs text-slate-400">
            {company.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}
