/**
 * Product catalog. Photos are from Unsplash (Unsplash License — free for
 * commercial use); see public/images/CREDITS.md for photographers.
 */

export const productCategories = [
  "Smartphones",
  "Tablets",
  "Laptops",
  "TVs & Displays",
  "Wearables & Storage",
  "Office & Infrastructure",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  slug: string;
  name: string;
  brand: "Samsung" | "Multi-brand";
  category: ProductCategory;
  image: string;
  alt: string;
  blurb: string;
  tags: string[];
  /** Shown in the home page showcase. */
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "galaxy-tab-a",
    name: "Samsung Galaxy Tab A-series",
    brand: "Samsung",
    category: "Tablets",
    image: "/images/products/samsung-tablet-hands.webp",
    alt: "Samsung Galaxy tablet held in two hands showing the home screen",
    blurb:
      "Galaxy Tab A11 / A11+ tablets (up to 128GB / 8GB) — our flagship institutional line, supplied at scale to EDRMC and Willows International.",
    tags: ["Bulk fleet supply", "Glass protectors & covers", "1-year warranty"],
    featured: true,
  },
  {
    slug: "galaxy-tab-s",
    name: "Samsung Galaxy Tab S-series",
    brand: "Samsung",
    category: "Tablets",
    image: "/images/products/samsung-tablet-spen.webp",
    alt: "Back of a Samsung Galaxy Tab S tablet with S Pen on white fabric",
    blurb:
      "Premium Galaxy Tab S tablets with S Pen for executives, clinical research, field data capture and digital signing.",
    tags: ["S Pen included", "High-spec models", "Pre-delivery inspection"],
  },
  {
    slug: "galaxy-smartphones",
    name: "Samsung Galaxy smartphones",
    brand: "Samsung",
    category: "Smartphones",
    image: "/images/products/samsung-galaxy-phones.webp",
    alt: "Two Samsung Galaxy smartphones on a wooden table, screen and back",
    blurb:
      "From dependable Galaxy A-series fleets to flagship Galaxy S models — provisioned for staff, field teams and programmes.",
    tags: ["Fleet provisioning", "Multi-batch delivery", "Authorized channels"],
    featured: true,
  },
  {
    slug: "galaxy-s-ultra",
    name: "Galaxy S Ultra flagships",
    brand: "Samsung",
    category: "Smartphones",
    image: "/images/products/samsung-galaxy-ultra.webp",
    alt: "Green Samsung Galaxy S Ultra smartphone lying on burlap",
    blurb:
      "Top-tier Galaxy S Ultra devices with built-in S Pen and pro-grade cameras for leadership and specialist roles.",
    tags: ["Built-in S Pen", "Pro cameras", "Manufacturer warranty"],
    featured: true,
  },
  {
    slug: "galaxy-z-fold",
    name: "Galaxy Z foldables",
    brand: "Samsung",
    category: "Smartphones",
    image: "/images/products/samsung-galaxy-fold.webp",
    alt: "Samsung Galaxy Z Fold opened on its start-up screen",
    blurb:
      "Foldable Galaxy Z devices that combine a phone and a tablet — ideal for executives on the move.",
    tags: ["Phone + tablet in one", "Samsung Knox security"],
    featured: true,
  },
  {
    slug: "samsung-laptops",
    name: "Samsung laptops & Chromebooks",
    brand: "Samsung",
    category: "Laptops",
    image: "/images/products/samsung-chromebook.webp",
    alt: "Silver Samsung Chromebook laptop on a wooden desk",
    blurb:
      "Lightweight Samsung laptops and Chromebooks for education, administration and mobile staff.",
    tags: ["Education & admin", "Lightweight", "Bulk orders"],
    featured: true,
  },
  {
    slug: "business-laptops",
    name: "Business laptops — Core i5 & Core Ultra",
    brand: "Multi-brand",
    category: "Laptops",
    image: "/images/products/business-laptop.webp",
    alt: "Business laptop open on a clean white surface",
    blurb:
      "High-performance Core i5 and next-gen Core Ultra laptops, delivered to the Sidama Bureau of Finance and College of Health Sciences.",
    tags: ["Core i5 / Core Ultra", "Tender-spec matched", "IT peripherals"],
  },
  {
    slug: "samsung-smart-tv",
    name: "Samsung Smart TVs",
    brand: "Samsung",
    category: "TVs & Displays",
    image: "/images/products/samsung-smart-tv.webp",
    alt: "Samsung Smart TV showing Earth from space in a bright living room",
    blurb:
      "4K UHD Smart TVs for boardrooms, training halls, waiting areas and public information screens.",
    tags: ["4K UHD", "Supply & installation", "Wall or stand mount"],
  },
  {
    slug: "samsung-large-format",
    name: "Wall-mounted & large-format displays",
    brand: "Samsung",
    category: "TVs & Displays",
    image: "/images/products/samsung-wall-tv.webp",
    alt: "Wall-mounted Samsung TV above a white minimalist cabinet",
    blurb:
      "Large-screen Samsung displays supplied and installed for conference rooms, lobbies and command centres.",
    tags: ["Installation included", "Large screen sizes"],
  },
  {
    slug: "samsung-monitors",
    name: "Samsung monitors",
    brand: "Samsung",
    category: "TVs & Displays",
    image: "/images/products/samsung-monitor.webp",
    alt: "Samsung monitor on a wooden desk with keyboard and mouse",
    blurb:
      "Business and high-resolution monitors for workstations, finance teams, design offices and control rooms.",
    tags: ["Workstation setups", "Multi-monitor"],
  },
  {
    slug: "galaxy-watch",
    name: "Samsung Galaxy Watch",
    brand: "Samsung",
    category: "Wearables & Storage",
    image: "/images/products/samsung-galaxy-watch.webp",
    alt: "Samsung Galaxy Watch on a wrist",
    blurb:
      "Galaxy Watch wearables for health programmes, staff wellness and connected field operations.",
    tags: ["Health tracking", "Galaxy ecosystem"],
    featured: true,
  },
  {
    slug: "galaxy-buds",
    name: "Samsung Galaxy Buds",
    brand: "Samsung",
    category: "Wearables & Storage",
    image: "/images/products/samsung-galaxy-buds.webp",
    alt: "White Samsung Galaxy Buds charging case on a black background",
    blurb:
      "Wireless Galaxy Buds for clear calls and virtual meetings, bundled with smartphone and tablet orders.",
    tags: ["Bundles available", "Noise cancelling models"],
  },
  {
    slug: "samsung-ssd",
    name: "Samsung portable SSDs & memory",
    brand: "Samsung",
    category: "Wearables & Storage",
    image: "/images/products/samsung-portable-ssd.webp",
    alt: "Hand holding a blue Samsung T7 portable SSD",
    blurb:
      "Samsung portable SSDs, memory cards and internal drives for secure data storage, backups and upgrades.",
    tags: ["Fast storage", "Backups & archives"],
  },
  {
    slug: "printers-photocopiers",
    name: "Printers, photocopiers & digitizers",
    brand: "Multi-brand",
    category: "Office & Infrastructure",
    image: "/images/products/office-printer.webp",
    alt: "Multifunction office printer and copier",
    blurb:
      "Heavy-duty photocopying machinery, printers and document digitizers — as delivered to the Sidama Regional Justice Bureau.",
    tags: ["Heavy-duty copiers", "Document digitizers"],
  },
  {
    slug: "networking-ups",
    name: "Servers, networking & UPS",
    brand: "Multi-brand",
    category: "Office & Infrastructure",
    image: "/images/products/network-cabling.webp",
    alt: "Network patch panel with blue and grey ethernet cables",
    blurb:
      "Enterprise servers, network cabling and infrastructure setup, plus UPS systems to keep critical equipment running.",
    tags: ["Cabling & setup", "UPS power", "System commissioning"],
  },
  {
    slug: "desktops-workstations",
    name: "Desktops & workstations",
    brand: "Multi-brand",
    category: "Office & Infrastructure",
    image: "/images/products/desktop-workstation.webp",
    alt: "Desktop computer workstation with monitor, keyboard and speakers",
    blurb:
      "Office desktops and high-spec workstations, supplied and installed with the peripherals your teams need.",
    tags: ["Supply & installation", "Peripherals"],
  },
  {
    slug: "dslr-cameras",
    name: "DSLR cameras & comms technology",
    brand: "Multi-brand",
    category: "Office & Infrastructure",
    image: "/images/products/dslr-camera.webp",
    alt: "Professional DSLR camera with lens on a white background",
    blurb:
      "Specialized DSLR camera setups and communication technology — supplied to the Sidama Industry Development Bureau.",
    tags: ["Media & comms teams", "Complete kits"],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

// Hero photos are deliberately not reused by the featured product cards.
export const heroImages = {
  main: {
    src: "/images/sectors/ict.webp",
    alt: "Two Samsung Galaxy S Ultra smartphones, screen and back",
  },
  secondary: {
    src: "/images/products/samsung-phone-buds-flatlay.webp",
    alt: "Samsung Galaxy smartphone with Galaxy Buds and stylus",
  },
  tertiary: {
    src: "/images/products/samsung-smart-tv.webp",
    alt: "Samsung Smart TV in a living room",
  },
};

export const productsSection = {
  eyebrow: "Featured Products",
  title: "Samsung devices & enterprise ICT, supplied to spec",
  intro:
    "Genuine products through direct authorized supply channels — verified against your tender specification, delivered on schedule and backed by our defect compensation guarantee.",
};

export const samsungSpotlight = {
  eyebrow: "Featured Brand",
  title: "The Samsung Galaxy ecosystem, for institutions",
  body: "Our largest contracts are built on Samsung. From Galaxy Tab fleets for federal disaster monitoring to smartphones, laptops, smart displays and storage, we source genuine Samsung devices with full manufacturer warranty — never refurbished or grey-market stock.",
  facts: [
    { value: 554, label: "Samsung tablets contracted" },
    { value: 2, label: "Flagship Samsung tenders" },
    { value: 1, suffix: "-year", label: "Manufacturer warranty" },
  ],
  image: "/images/products/samsung-tv-bezel.webp",
};

export const procurementProcess = [
  {
    title: "Specification review",
    text: "Every line item is mapped against your tender's exact technical requirements before we quote.",
  },
  {
    title: "Authorized sourcing",
    text: "Direct authorized supply channels only — no counterfeit, refurbished or grey-market stock.",
  },
  {
    title: "Pre-delivery inspection",
    text: "Rigorous pre-shipment verification of every unit, with protective accessories fitted where specified.",
  },
  {
    title: "On-time delivery",
    text: "Direct delivery to your site under contractual timelines (0.1% per day penalty, capped at 10%).",
  },
  {
    title: "Warranty & support",
    text: "Manufacturer warranty plus defect repair or replacement at our expense within 3–5 working days.",
  },
];
