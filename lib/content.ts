export const company = {
  name: "MEB",
  fullName: "Middle East Business",
  legalName: "Middle East Business PLC",
  tagline: "Your Single-Source Procurement Partner",
  descriptor: "Multi-Sector Enterprise & Institutional Procurement Partner",
  owner: "Mrs. Leyla Eshetu Seid",
  ownerTitle: "Owner & General Manager",
  location: "Semera-Logiya, Afar Region, Ethiopia",
  headOffice:
    "Awsi Rasu Zone 1, Semera-Logiya City, Kebele 01, Afar Region, Ethiopia",
  operationalReach: "Addis Ababa Hub · Sidama Office (Hawassa)",
  email: "midelestbusenes@gmail.com",
  registrationNo: "AF/AT/1/0004782/2016",
  tin: "0089020816",
  registeredCapital: "4,000,000.00 ETB",
  phones: [
    { tel: "+251967139696", display: "+251 96 713 9696" },
    { tel: "+251913877760", display: "+251 91 387 7760" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Accent = "blue" | "ember" | "jade";

export const hero = {
  eyebrow: "Offices in Semera, Addis Ababa & Hawassa",
  title: "Samsung tablets, phones and laptops for Ethiopian institutions.",
  titleAccent: "for Ethiopian institutions.",
  subtitle:
    "We source genuine Samsung devices through authorized channels and check every unit against your tender specification before it ships. Federal commissions, regional courts, colleges and international NGOs already buy from us.",
  primaryCta: { label: "Request a quote", href: "/contact" },
  secondaryCta: { label: "See our products", href: "/products" },
  credentials: [
    { label: "Reg.", value: "AF/AT/1/0004782/2016" },
    { label: "TIN", value: "0089020816" },
    { label: "Capital", value: "4,000,000 ETB" },
  ],
};

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Major Contracts" },
  { value: 64, prefix: "ETB ", suffix: "M+", label: "Contracted Value" },
  { value: 100, suffix: "%", label: "Spec Compliance" },
  { value: 3, suffix: " Regions", label: "Operational Reach" },
];

export const overview = {
  eyebrow: "Company Profile & Executive Overview",
  title: "An established supplier and trusted public-sector partner",
  partner: {
    title: "Trusted Public Sector Partner",
    body: "**Middle East Business** (operating as Middle East Business PLC) is a premier multi-sector commercial enterprise legally registered under the laws of the Federal Democratic Republic of Ethiopia. Headquartered in Semera-Logiya, Afar Region, with fully established operational wings in Addis Ababa and the Sidama National Regional State, we specialize in high-capacity procurement and technical distribution for governmental, public, and non-governmental institutions.",
  },
  leadership: {
    title: "Leadership & Governance",
    body: "Fully owned and directed by **Mrs. Leyla Eshetu Seid** (Owner & General Manager), Middle East Business has built a flawless reputation for operational transparency, strict technical compliance, and rapid contract fulfillment. With registered capital of 4,000,000.00 ETB, the enterprise possesses robust liquidity and credit arrangements to finance multi-million ETB institutional procurement orders.",
  },
  body: [
    "Middle East Business (operating as Middle East Business PLC) is a premier multi-sector commercial enterprise legally registered under the laws of the Federal Democratic Republic of Ethiopia. Headquartered in Semera-Logiya, Afar Region, with fully established operational wings in Addis Ababa and the Sidama National Regional State, we specialize in high-capacity procurement and technical distribution for governmental, public, and non-governmental institutions.",
    "Fully owned and directed by Mrs. Leyla Eshetu Seid, the enterprise has built a flawless reputation for operational transparency, strict technical compliance, and rapid contract fulfillment — backed by robust liquidity and credit arrangements to finance multi-million ETB procurement orders.",
  ],
  pullQuote:
    "We serve as a single-source provider for modern institutional requirements — combining strict technical compliance with end-to-end supply chain management across ICT, infrastructure, and agricultural sectors.",
};

export const coreBusinessSection = {
  eyebrow: "Core Business Sectors & Solutions",
  title: "Three sectors. One certified vendor.",
  intro:
    "A comprehensive portfolio that lets institutions consolidate ICT, construction and agricultural procurement with a single registered, fully compliant supplier.",
};

export type Capability = { title: string; text: string };

export type CoreBusinessArea = {
  number: string;
  slug: string;
  title: string;
  accent: Accent;
  summary: string;
  capabilities: Capability[];
  image: string;
};

export const coreBusinessAreas: CoreBusinessArea[] = [
  {
    number: "01",
    slug: "ict-digital-hardware",
    title: "ICT & Digital Hardware",
    accent: "blue",
    summary:
      "Samsung devices, enterprise computing, peripherals and networking — sourced through authorized channels and verified against every tender specification.",
    capabilities: [
      {
        title: "Hardware Supply",
        text: "Laptops, desktops, high-spec tablets, enterprise servers & smartphones.",
      },
      {
        title: "Peripherals & Networking",
        text: "Photocopiers, printers, UPS systems, network cabling & infrastructure setup.",
      },
      {
        title: "Digital Solutions",
        text: "Software engineering, digital platforms, and system commissioning.",
      },
    ],
    image: "/images/products/network-cabling.webp",
  },
  {
    number: "02",
    slug: "industrial-construction",
    title: "Industrial & Construction",
    accent: "ember",
    summary:
      "Specialized finishing works, bulk industrial supplies and heavy equipment rental for construction and industrial projects.",
    capabilities: [
      {
        title: "Finishing Contractors",
        text: "Technical completion and specialized building finishing works.",
      },
      {
        title: "Industrial Supplies",
        text: "Bulk wholesale chemicals and specialized industrial processing materials.",
      },
      {
        title: "Equipment Rental",
        text: "Heavy construction machinery, tools, and technical logistics support.",
      },
    ],
    image: "/images/sectors/construction.webp",
  },
  {
    number: "03",
    slug: "agri-commodities-supply-chain",
    title: "Agri-Commodities & Supply Chain",
    accent: "jade",
    summary:
      "Certified seeds, essential grains and regional logistics supporting food security and agricultural development.",
    capabilities: [
      {
        title: "Agricultural Commodities",
        text: "Bulk wholesale supply of certified plant seeds and essential grains.",
      },
      {
        title: "Regional Logistics",
        text: "Strategic bulk transport, warehousing, and regional distribution networks.",
      },
      {
        title: "Development Support",
        text: "Supplying regional food security and agricultural initiatives.",
      },
    ],
    image: "/images/sectors/agri.webp",
  },
];

export type ContractStatus =
  | "Awarded & Active"
  | "Fully Delivered"
  | "Delivered On-Time"
  | "Completed";

export type PastWork = {
  client: string;
  scope: string;
  /** Formatted ETB amount, or a descriptor when no single value applies. */
  value: string;
  valueNumeric: number | null;
  status: ContractStatus;
};

export const pastWorks: PastWork[] = [
  {
    client: "Willows International",
    scope: "500 units Samsung A11 tablets with glass protectors & rugged covers",
    value: "ETB 29,727,500.00",
    valueNumeric: 29727500,
    status: "Awarded & Active",
  },
  {
    client: "EDRMC (Disaster Risk Management Commission)",
    scope: "Lot-8 Electronic Supplies: 54 units Samsung Galaxy Tab A11+ (128GB/8GB)",
    value: "ETB 5,278,500.00",
    valueNumeric: 5278500,
    status: "Fully Delivered",
  },
  {
    client: "The Fred Hollows Foundation",
    scope: "Tender FHFE/IFB/04/2026: Supply of 433 institutional smartphones",
    value: "Multi-Batch Supply",
    valueNumeric: null,
    status: "Delivered On-Time",
  },
  {
    client: "Sidama Regional Supreme Court",
    scope: "Supply and installation of office electronic equipment & computers",
    value: "ETB 1,765,000.00",
    valueNumeric: 1765000,
    status: "Completed",
  },
  {
    client: "Sidama Bureau of Finance",
    scope: "High-performance Core i5 laptop computers and IT peripherals",
    value: "ETB 2,032,688.00",
    valueNumeric: 2032688,
    status: "Completed",
  },
  {
    client: "College of Health Sciences (Hawassa)",
    scope: "Next-gen Core Ultra 2 high-computing laptops & clinical research tech",
    value: "ETB 1,202,570.00",
    valueNumeric: 1202570,
    status: "Completed",
  },
  {
    client: "Sidama Regional Justice Bureau",
    scope: "Laptops, heavy-duty photocopying machinery, and document digitizers",
    value: "ETB 1,500,000.00",
    valueNumeric: 1500000,
    status: "Completed",
  },
  {
    client: "Sidama Industry Development Bureau",
    scope: "Specialized DSLR camera setups & communication technology",
    value: "ETB 2,199,000.00",
    valueNumeric: 2199000,
    status: "Completed",
  },
];

export const portfolioSection = {
  eyebrow: "Proven Public Sector Track Record",
  title: "Key executed contracts",
  intro:
    "Middle East Business has consistently delivered complex, time-sensitive tender contracts for major federal commissions, international NGOs, regional supreme courts, and academic institutions across Ethiopia.",
};

export type CaseStudy = {
  client: string;
  title: string;
  reference: string;
  accent: Accent;
  image: string;
  scope: string;
  performance: string;
  metrics: Array<Stat & { decimals?: number }>;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Willows International",
    title: "Willows International Contract",
    reference: "P.O. WI-ETH-06",
    accent: "blue",
    image: "/images/products/samsung-tablet-spen.webp",
    scope:
      "Procurement and end-to-end delivery of 500 Samsung A11 tablets complete with protective glass and covers (P.O. WI-ETH-06).",
    performance:
      "Full compliance with strict 10% performance security (ETB 2,972,750.00), rigorous pre-delivery technical inspection, comprehensive 1-year manufacturer warranty, and direct delivery to Willows' Addis Ababa headquarters within 7 working days.",
    metrics: [
      { value: 500, label: "Samsung tablets" },
      { value: 29.7, prefix: "ETB ", suffix: "M", decimals: 1, label: "Contract value" },
      { value: 7, label: "Working days to deliver" },
    ],
  },
  {
    client: "Ethiopian Disaster Risk Management Commission",
    title: "EDRMC Federal Tender Execution",
    reference: "DRMC-NCB-G-0052-2018-BID-Open · Lot-8",
    accent: "jade",
    image: "/images/products/samsung-tablet-closeup.webp",
    scope:
      "Public Tender DRMC-NCB-G-0052-2018-BID-Open (Lot-8 Electronic Supplies) for the Ethiopian Disaster Risk Management Commission.",
    performance:
      "Ranked #1 winning bidder. Delivered high-specification Samsung Galaxy Tab A11+ units (128GB Storage / 8GB RAM) matching 100% of national disaster monitoring technical requirements on time and within budget.",
    metrics: [
      { value: 1, prefix: "#", label: "Ranked winning bidder" },
      { value: 54, label: "Galaxy Tab A11+ units" },
      { value: 100, suffix: "%", label: "Requirements matched" },
    ],
  },
];

export const sopSection = {
  eyebrow: "Operational Commitments & Quality Standards",
  title: "Standard operating procedures behind every delivery",
  intro:
    "Four commitments written into every contract — so procurement officers know exactly what they will receive, when, and with what guarantees.",
};

export const commitments = [
  {
    number: "01",
    title: "100% Specification Matching",
    highlight: "100% match",
    text: "Every item sourced undergoes rigorous pre-shipment verification against exact client tender specifications. We eliminate counterfeit, refurbished, or grey-market risk by maintaining direct authorized supply chain channels.",
  },
  {
    number: "02",
    title: "Defect Compensation Guarantee",
    highlight: "3–5 day response",
    text: "We back all electronic and technical deliveries with a full defect compensation warranty. Faulty units are repaired or replaced entirely at our own expense with a rapid response time of 3–5 working days.",
  },
  {
    number: "03",
    title: "Disciplined Logistics & Timeliness",
    highlight: "0.1%/day penalty",
    text: "End-to-end logistical control guarantees punctual execution. We operate under strict contractual delivery timelines, backed by penalty clauses (0.1% per day up to 10%) to assure clients of total schedule reliability.",
  },
  {
    number: "04",
    title: "Full Legal & Financial Compliance",
    highlight: "TIN · VAT · Bonds",
    text: "Fully compliant with Federal Democratic Republic of Ethiopia procurement regulations, maintaining active TIN, VAT registration, commercial licenses, and full capacity for issuing performance bonds and bank guarantees.",
  },
];

export const whyPartnerSection = {
  eyebrow: "Value Proposition",
  title: "Why partner with Middle East Business?",
};

export const whyPartner: Array<{ title: string; text: string; accent: Accent }> = [
  {
    title: "Single-Source Efficiency",
    text: "Consolidate multi-category procurement — from IT hardware and construction supplies to agricultural commodities — with one certified vendor.",
    accent: "ember",
  },
  {
    title: "Multi-Region Footprint",
    text: "Active delivery capacity and physical presence across Afar Region, Addis Ababa, and Sidama National Regional State.",
    accent: "blue",
  },
  {
    title: "Proven Value for Money",
    text: "Highly competitive, realistic pricing models designed to meet public procurement value-for-money standards without quality compromise.",
    accent: "jade",
  },
];

export type Location = {
  slug: string;
  name: string;
  city: string;
  region: string;
  role: string;
  /** Position on the 600×460 map viewBox in RegionsMap. */
  x: number;
  y: number;
};

export const locations: Location[] = [
  {
    slug: "semera",
    name: "Head Office",
    city: "Semera-Logiya",
    region: "Afar Region",
    role: "Headquarters · Awsi Rasu Zone 1, Kebele 01",
    x: 322.6,
    y: 137.1,
  },
  {
    slug: "addis",
    name: "Addis Ababa Hub",
    city: "Addis Ababa",
    region: "Federal Capital",
    role: "Central Distribution",
    x: 241.7,
    y: 235.7,
  },
  {
    slug: "hawassa",
    name: "Sidama Office",
    city: "Hawassa",
    region: "Sidama National Regional State",
    role: "Hawassa Operations",
    x: 232.3,
    y: 306,
  },
];

export const missionPoints = [
  "Strive to meet the diverse IT and office equipment demands of our customers",
  "Provide quality electronics and IT hardware from reputable manufacturers and authorized distributors",
  "Be the preferred supplier with products that meet or exceed technical specifications and are delivered on time",
  "Be transparent and responsive to customer requirements and tender specifications",
  "Promote enduring business relationships with manufacturers, suppliers, and institutional clients",
  "Build an efficient supply chain from sourcing to final delivery at client locations",
  "Provide accurate, honest information and full responsiveness throughout the procurement process",
];

export const mission =
  "To meet the diverse IT, office equipment, and multi-sector supply demands of our customers through quality products, transparent procurement, and reliable end-to-end delivery.";

export const vision =
  "To become a trusted and preferred national supplier of electronics, IT, and office equipment, recognized for product quality, reliability, and long-term partnerships with government and institutional clients.";

export const goals = [
  "Supply good-quality electronics, IT hardware, and office equipment that meet the technical specifications required by clients and customers",
  "Ensure all products supplied meet customer requirements, standards, and tender specifications",
  "Deliver products on schedule and to the agreed delivery location of our customers",
  "Provide products at a competitive and affordable price, consistent with public procurement value-for-money principles",
];

export const valuePillars = [
  {
    title: "Client Commitment",
    text: "Dedicated to our clients' needs and procurement requirements at every stage of delivery.",
  },
  {
    title: "Loyalty & Honesty",
    text: "Loyal and honest relationships with commercial partners, suppliers, and customers.",
  },
  {
    title: "Integrity & Respect",
    text: "Working with customers and partners on the basis of justice, integrity, and mutual respect.",
  },
  {
    title: "Genuine Quality",
    text: "Supply of genuine, good-quality electronics and IT equipment that match required specifications.",
  },
  {
    title: "Ethical Procurement",
    text: "Adherence to standard ethical and professional procurement practices in every contract.",
  },
];

export const targetPartners = [
  {
    title: "Federal Commissions",
    text: "National agencies such as the Disaster Risk Management Commission, requiring tender-compliant, high-specification supply.",
  },
  {
    title: "Supreme Courts & Justice Bureaus",
    text: "Office electronics, computers, photocopiers and document digitizers for judicial and legal institutions.",
  },
  {
    title: "Universities & Colleges",
    text: "Academic and health-science institutions needing high-computing laptops and research technology.",
  },
  {
    title: "Regional Bureaus",
    text: "Finance, industry and administrative bureaus procuring laptops, peripherals and communication technology.",
  },
  {
    title: "International NGOs",
    text: "Humanitarian and development organizations equipping field teams with tablets and smartphones at scale.",
  },
  {
    title: "Construction & Agri Projects",
    text: "Finishing works, equipment rental, industrial supplies, certified seeds and regional logistics.",
  },
];

export const aboutSection = {
  eyebrow: "About Middle East Business",
  title: "Built for compliance. Proven in delivery.",
};

export const brandStory = {
  origin:
    "Middle East Business (operating as Middle East Business PLC) is legally registered under the laws of the Federal Democratic Republic of Ethiopia, headquartered in Semera-Logiya, Afar Region, with fully established operational wings in Addis Ababa and the Sidama National Regional State.",
  purpose:
    "The company exists to serve as a single-source provider for modern institutional requirements — delivering products that meet tender specifications for governmental, public, and non-governmental institutions, on time and with full logistical support.",
  future:
    "Middle East Business remains committed to growing alongside the institutions it serves — continuously expanding its technical, logistical, and commercial capacity to meet evolving public procurement needs across Ethiopia.",
};

export const commitment =
  "Middle East Business remains committed to growing alongside the institutions, commissions, and agencies it serves. We invite government offices, NGOs, and private institutions to engage us as a dependable, compliant, single-source partner for their ICT, construction, industrial, and agricultural sourcing requirements.";

export const closingGateway = {
  eyebrow: "Registered. Compliant. Ready to Deliver.",
  body: [
    "Whether you need Samsung devices and ICT hardware, industrial supplies, construction support, or agricultural commodities — success in public procurement requires more than a quote. It requires a partner who matches specifications, delivers on time, and stands behind every product.",
    "Middle East Business brings the registration, financial capacity, and operational discipline your institution needs — including performance bonds and bank guarantees on request.",
  ],
  headline: "Partner with a supplier you can trust.",
  cta: "Get in Touch",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  accent: Accent;
  image: string;
  number: string;
  features: Capability[];
};

export const services: Service[] = coreBusinessAreas.map((area) => ({
  slug: area.slug,
  title: area.title,
  summary: area.summary,
  accent: area.accent,
  image: area.image,
  number: area.number,
  features: area.capabilities,
}));

export const contactSection = {
  eyebrow: "Contact & Corporate Registration",
  title: "Start your procurement partnership",
  intro:
    "Share your tender requirements, supply specifications, or partnership inquiry. We respond promptly to all institutional and government requests.",
  objectives: [
    "Samsung Devices & ICT Hardware",
    "Peripherals, Networking & UPS",
    "Industrial & Construction Supplies",
    "Equipment Rental",
    "Agricultural Commodities & Logistics",
    "Public Tender Participation",
    "Other",
  ],
  submitLabel: "Send Inquiry",
};
