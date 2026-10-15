import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const isSamsung = product.brand === "Samsung";

  return (
    <SpotlightCard
      className="h-full rounded-3xl"
      glow="rgba(74,154,212,0.14)"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold/30 group-hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md ${
                isSamsung
                  ? "bg-navy-ink/80 text-white"
                  : "bg-white/85 text-navy-deep"
              }`}
            >
              {product.brand}
            </span>
          </div>
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-deep backdrop-blur">
            {product.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold leading-snug text-navy-deep">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {product.blurb}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200"
              >
                <Check className="h-3 w-3 text-jade" strokeWidth={3} />
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text transition-colors hover:text-navy-deep"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
