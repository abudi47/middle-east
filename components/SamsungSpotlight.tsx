import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { samsungSpotlight } from "@/lib/products";

const tiles = [
  { src: "/images/products/samsung-tablet-spen.webp", alt: "Samsung Galaxy Tab with S Pen" },
  { src: "/images/products/samsung-galaxy-phones.webp", alt: "Samsung Galaxy smartphones" },
  { src: "/images/products/samsung-smart-tv.webp", alt: "Samsung Smart TV" },
  { src: "/images/products/samsung-galaxy-watch.webp", alt: "Samsung Galaxy Watch" },
];

export function SamsungSpotlight() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            {samsungSpotlight.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-navy-deep md:text-4xl">
            {samsungSpotlight.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {samsungSpotlight.body}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {samsungSpotlight.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-200 bg-mist p-4"
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <p className="font-display text-2xl font-extrabold text-accent-text md:text-3xl">
                    <Counter value={fact.value} suffix={fact.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-500">
                    {fact.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-jade-dark">
            <ShieldCheck className="h-4 w-4" />
            Genuine devices · direct authorized supply channels
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <Reveal className="row-span-2">
            <div className="group relative h-full min-h-[22rem] overflow-hidden rounded-3xl bg-navy-ink">
              <Image
                src={samsungSpotlight.image}
                alt="Close-up of the Samsung wordmark on a TV bezel"
                fill
                sizes="(min-width: 1024px) 380px, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/80 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-display text-lg font-bold text-white">
                Phones · Tablets · Laptops · TVs · Wearables · Storage
              </p>
            </div>
          </Reveal>
          {tiles.slice(0, 2).map((tile, i) => (
            <Reveal key={tile.src} delay={0.08 * (i + 1)}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {tiles.slice(2).map((tile, i) => (
              <Reveal key={tile.src} delay={0.08 * (i + 3)}>
                <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
