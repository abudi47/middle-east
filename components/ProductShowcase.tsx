import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { ProductCatalog } from "./ProductCatalog";
import { featuredProducts, productsSection } from "@/lib/products";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="container-x relative">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={productsSection.eyebrow}
            title={productsSection.title}
            intro={productsSection.intro}
          />
          <Reveal className="shrink-0">
            <Button href="/products" variant="navy">
              View full catalog
            </Button>
          </Reveal>
        </div>

        <ProductCatalog products={featuredProducts} />
      </div>
    </section>
  );
}
