"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { productCategoryIcons } from "@/lib/icons";
import {
  productCategories,
  products as allProducts,
  type Product,
} from "@/lib/products";

type Filter = "All" | (typeof productCategories)[number];

export function ProductCatalog({
  products = allProducts,
  samsungToggle = false,
}: {
  products?: Product[];
  /** Show a "Samsung only" switch next to the category tabs. */
  samsungToggle?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [samsungOnly, setSamsungOnly] = useState(false);

  const pool = useMemo(
    () => (samsungOnly ? products.filter((p) => p.brand === "Samsung") : products),
    [products, samsungOnly]
  );

  const tabs: Filter[] = [
    "All",
    ...productCategories.filter((c) => pool.some((p) => p.category === c)),
  ];
  const active = tabs.includes(filter) ? filter : "All";
  const visible =
    active === "All" ? pool : pool.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div
          role="tablist"
          aria-label="Product categories"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
        >
          {tabs.map((tab) => {
            const Icon = productCategoryIcons[tab];
            const selected = tab === active;
            const count =
              tab === "All"
                ? pool.length
                : pool.filter((p) => p.category === tab).length;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(tab)}
                className={`relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-navy-deep hover:ring-slate-300"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="catalog-tab"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-navy-deep shadow-card"
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4" />}
                  {tab}
                  <span
                    className={`rounded-full px-1.5 text-[10px] ${
                      selected ? "bg-white/20" : "bg-slate-100"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {samsungToggle && (
          <button
            type="button"
            role="switch"
            aria-checked={samsungOnly}
            onClick={() => setSamsungOnly((v) => !v)}
            className="inline-flex shrink-0 items-center gap-3 self-start whitespace-nowrap text-sm font-semibold text-navy-deep md:self-auto"
          >
            Samsung only
            <span
              className={`relative h-7 w-12 rounded-full transition-colors ${
                samsungOnly ? "bg-gold" : "bg-slate-300"
              }`}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow ${
                  samsungOnly ? "right-1" : "left-1"
                }`}
              />
            </span>
          </button>
        )}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
