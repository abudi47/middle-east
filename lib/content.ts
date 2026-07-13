export const company = {
  name: "MEB",
  fullName: "Middle East Business",
  tagline: "Your Single-Source Procurement Partner",
  descriptor:
    "A multi-sector, single-source partner for governmental, public, and institutional procurement across Ethiopia",
  owner: "Mrs. Leyla Eshetu Seid",
  ownerTitle: "Owner & General Manager",
  location: "Semera-Logiya, Afar Region, Ethiopia",
  headOffice:
    "Awsi Rasu Zone 1, Semera-Logiya City, Kebele 01, Afar Region, Ethiopia",
  operationalReach: "Addis Ababa & Sidama National Regional State",
  email: "midelestbusenes@gmail.com",
  registrationNo: "AF/AT/1/0004782/2016",
  tin: "0089020816",
  registeredCapital: "4,000,000.00 ETB",
  phones: [{ tel: "+251911276231", display: "+251 911 276 231" }],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Multi-Sector Procurement & Supply",
  title: "Reliable, Compliant Supply for Ethiopia's Public & Institutional Sector.",
  titleAccent: "Public & Institutional",
  subtitle:
    "Middle East Business delivers quality ICT equipment, industrial supplies, construction support, and agricultural commodities — with strict specification matching, end-to-end logistics, and a proven track record across regional bureaus, courts, universities, and federal agencies.",
  primaryCta: { label: "Partner With Us", href: "#contact" },
  secondaryCta: { label: "Our Core Services", href: "#services" },
  credentials: [
    { label: "Registration", value: "AF/AT/1/0004782/2016" },
    { label: "Tax ID (TIN)", value: "0089020816" },
    { label: "Registered Capital", value: "4,000,000 ETB" },
  ],
  highlights: [
    { value: "12+", label: "Completed Contracts" },
    { value: "64M+", label: "ETB Delivered" },
    { value: "3", label: "Regions Served" },
  ],
};

export const overview = {
  eyebrow: "Company Overview",
  title: "A trusted, multi-sector enterprise built for public procurement",
  body: [
    "Middle East Business is a multi-sector enterprise formally established and registered under the laws of the Federal Democratic Republic of Ethiopia, operating primarily out of the Afar Region with a strong logistical and operational footprint expanding into Addis Ababa and the Sidama National Regional State.",
    "Fully owned and managed by Mrs. Leyla Eshetu Seid, the company has built a stellar reputation as a highly reliable, responsive, and compliant partner for governmental, public, and institutional procurement.",
    "With registered capital of up to 4,000,000.00 ETB, Middle East Business has successfully executed numerous large-scale competitive public tenders, recognized by regional bureaus, supreme courts, and academic institutions for strict adherence to technical specifications, exceptional quality control, and timely project delivery.",
  ],
  pullQuote:
    "We serve as a comprehensive single-source provider for modern corporate and industrial needs — from ICT hardware and network engineering to construction finishing, industrial chemicals, machinery rental, and agricultural commodities.",
};

export const coreBusinessSection = {
  eyebrow: "Core Business",
  title: "Three pillars. One dependable supplier.",
  intro:
    "Middle East Business operates across a highly diversified portfolio of commercial licenses, allowing clients to consolidate multiple procurement needs with one verified, registered supplier.",
};

export type CoreBusinessArea = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const coreBusinessAreas: CoreBusinessArea[] = [
  {
    number: "01",
    slug: "information-technology-ecommerce",
    title: "Information Technology & E-Commerce",
    summary:
      "Wholesale ICT supply, network engineering, and certified digital commerce operations for institutional clients.",
    capabilities: [
      "Wholesale trade in ICT equipment — communication setups, computer hardware, laptops, workstations, and peripherals",
      "Network & software engineering — design, cable installation, commissioning, monitoring, and database management",
      "Digital commerce platforms — certified operator and intermediary for electronic commerce intra-platforms",
    ],
  },
  {
    number: "02",
    slug: "industrial-construction-support",
    title: "Industrial & Construction Support",
    summary:
      "Specialized finishing works, industrial chemicals, and flexible machinery rental for construction and industrial projects.",
    capabilities: [
      "Specialized finishing contractors — technical construction completion and finishing works",
      "Industrial chemicals — bulk supply and wholesale trade of specialized chemicals for industrial usage",
      "Machinery & equipment rental — heavy machinery, construction tools, and technical equipment",
    ],
  },
  {
    number: "03",
    slug: "agricultural-supply-chain",
    title: "Agricultural & Supply Chain Logistics",
    summary:
      "Strategic bulk supply of certified seeds and agricultural commodities to support regional development initiatives.",
    capabilities: [
      "Wholesale of certified plant seeds and general agricultural products",
      "End-to-end supply chain logistics from sourcing to client delivery",
      "Bulk commodity trade aligned with institutional and regional development needs",
    ],
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

export const sopSection = {
  eyebrow: "Standard Operating Procedures",
  title: "Consistency, accountability, and compliance in every contract",
  intro:
    "Middle East Business operates under standard compliance frameworks derived from its proven operational contracts — ensuring reliable execution for public and private delivery.",
};

export const sopAreas = [
  {
    title: "Procurement & Quality Assurance",
    points: [
      "Specification Matching: Every piece of hardware or inventory sourced undergoes strict verification to ensure it matches 100% of the client's requested technical specifications",
      "Defect Compensation Warranty: If any delivered product fails due to manufacturing or processing faults, Middle East Business resolves, repairs, or replaces items entirely at its own expense",
    ],
  },
  {
    title: "Logistics, Transportation & Safe Delivery",
    points: [
      "End-to-End Delivery: Full logistical management with secure transport directly to the buyer's specified warehouse or project site",
      "Timeline Adherence: Deliveries are strictly scheduled with a penalty framework of 0.1% per day (capped at 10% total value) to guarantee punctual execution",
    ],
  },
  {
    title: "Financial & Administrative Closure",
    points: [
      "Post-Delivery Invoicing: Financial invoicing is finalized upon successful delivery, inspection, and formal receipt of goods",
      "Standard Payment Window: Clients typically settle accounts within a standard 5-workday window following full verification and item registration",
    ],
  },
];

export const whyPartner = [
  {
    title: "Diversified, Single-Source Capability",
    text: "From ICT hardware and network engineering to construction finishing, industrial chemicals, machinery rental, and agricultural commodities — consolidate multiple procurement needs with one verified supplier.",
  },
  {
    title: "Proven Public-Sector Track Record",
    text: "A consistent record of completed tenders and price-study contracts with regional bureaus, supreme courts, universities, colleges, and federal agencies.",
  },
  {
    title: "Formal Legal & Tax Compliance",
    text: "Fully registered under Ethiopian law (Reg. No. AF/AT/1/0004782/2016) with active TIN 0089020816, enabling smooth participation in public tenders and institutional contracting.",
  },
  {
    title: "Multi-Regional Operational Reach",
    text: "Head office in Semera-Logiya, Afar Region, with active operations and delivery capacity extending into Addis Ababa and the Sidama National Regional State.",
  },
  {
    title: "Quality-Backed Guarantees",
    text: "Strict specification matching on every order, backed by a defect compensation warranty under which faulty items are repaired or replaced entirely at the company's own expense.",
  },
  {
    title: "Disciplined Logistics & Timeliness",
    text: "End-to-end delivery management with a built-in penalty framework (0.1% per day, capped at 10%) to guarantee punctual execution on every contract.",
  },
  {
    title: "Transparent Financial Practices",
    text: "Clear, post-delivery invoicing and a standard 5-workday payment settlement window, ensuring smooth administrative closure for client finance teams.",
  },
];

export type PastWork = {
  client: string;
  items: string;
  value: string;
  valueNumeric: number;
  status: string;
};

export const pastWorks: PastWork[] = [
  {
    client: "Sidama National Regional State Supreme Court",
    items: "Office equipment / electronics",
    value: "1,155,000.00",
    valueNumeric: 1155000,
    status: "Completed",
  },
  {
    client: "Sidama National Regional State Bureau of Finance",
    items: "Laptop Core i5 computers",
    value: "2,852,599.93",
    valueNumeric: 2852599.93,
    status: "Completed",
  },
  {
    client: "Sidama National Regional State Bureau of Industry Development",
    items: "Digital cameras",
    value: "2,199,000.00",
    valueNumeric: 2199000,
    status: "Completed",
  },
  {
    client: "Hawassa College of Health Sciences",
    items: "HP Laptop Core Ultra 7",
    value: "347,999.99",
    valueNumeric: 347999.99,
    status: "Completed",
  },
  {
    client: "Sidama National Regional State Justice Bureau",
    items: "Laptops, photocopy machines, and dividers",
    value: "1,202,570.00",
    valueNumeric: 1202570,
    status: "Completed",
  },
  {
    client: "Sidama Design and Construction Supervision Enterprise",
    items: "Workstation Z2G9 (32″ monitor) & biometric time attendance machines",
    value: "1,590,000.00",
    valueNumeric: 1590000,
    status: "Completed",
  },
  {
    client: "Sidama Regional Land Administration and Investment Bureau",
    items: "Laptop Core i5 computers",
    value: "1,690,500.00",
    valueNumeric: 1690500,
    status: "Completed",
  },
  {
    client: "Sidama National Regional State Communication Affairs Bureau",
    items: "Laptop Core i5 computers",
    value: "3,470,000.00",
    valueNumeric: 3470000,
    status: "Completed",
  },
  {
    client: "Sidama National Regional State Urban & Infrastructure Bureau",
    items: "Work Station",
    value: "2,330,000.00",
    valueNumeric: 2330000,
    status: "Completed",
  },
  {
    client: "Sidama Regional Land Administration and Investment Bureau",
    items: "IT / office equipment supply",
    value: "4,109,300.00",
    valueNumeric: 4109300,
    status: "Completed",
  },
  {
    client: "AISDA",
    items: "Industrial machinery equipment",
    value: "38,456,700.00",
    valueNumeric: 38456700,
    status: "Completed",
  },
  {
    client: "Ethiopian Disaster Risk Management Commission",
    items: "IT / office equipment supply",
    value: "3,714,500.00",
    valueNumeric: 3714500,
    status: "Completed",
  },
];

export const portfolioSection = {
  eyebrow: "Past Works",
  title: "A demonstrated record of successful public contracts",
  intro:
    "Middle East Business has completed supply contracts and tenders with regional government bureaus, public institutions, and humanitarian agencies across Ethiopia. Supporting performance letters and award notifications are available upon request.",
};

export const stats = [
  { value: 12, suffix: "+", label: "Completed Contracts" },
  { value: 64, suffix: "M+", label: "ETB Total Contract Value" },
  { value: 3, suffix: "", label: "Regions Served" },
  { value: 100, suffix: "%", label: "Specification Matching" },
];

export const targetPartners = [
  {
    title: "Government Offices",
    text: "Regional bureaus, federal agencies, and public institutions requiring compliant, specification-matched procurement.",
  },
  {
    title: "Supreme Courts & Justice Bureaus",
    text: "Office equipment, electronics, and IT hardware supply for judicial and legal institutions.",
  },
  {
    title: "Universities & Colleges",
    text: "Academic institutions needing laptops, workstations, and digital equipment for teaching and administration.",
  },
  {
    title: "Construction Enterprises",
    text: "Finishing contractors, machinery rental, and industrial supply for construction supervision and development projects.",
  },
  {
    title: "NGOs & Humanitarian Agencies",
    text: "Development and disaster management organizations requiring reliable multi-sector supply partners.",
  },
  {
    title: "Private Institutions",
    text: "Corporate and institutional clients seeking a registered, multi-capability supplier for consolidated procurement.",
  },
];

export const aboutSection = {
  eyebrow: "About Middle East Business",
  title: "Built for compliance. Proven in delivery.",
};

export const brandStory = {
  origin:
    "Middle East Business was formally established and registered under Ethiopian law, with its head office in the Afar Region and expanding operations into Addis Ababa and the Sidama National Regional State.",
  purpose:
    "The company exists to serve as a dependable, multi-sector supply partner for governmental, public, and institutional procurement — delivering quality products that meet tender specifications, on time, and with full logistical support.",
  future:
    "Middle East Business remains committed to growing alongside the institutions it serves — continuously expanding its technical, logistical, and commercial capacity to meet evolving public procurement needs across Ethiopia.",
};

export const commitment =
  "Middle East Business remains committed to growing alongside the institutions, regional bureaus, and agencies it serves — continuously expanding its technical, logistical, and commercial capacity to meet evolving public procurement needs across Ethiopia. We invite government offices, NGOs, and private institutions to engage us as a dependable, compliant, and multi-sector supply partner for their IT, construction, industrial, and agricultural sourcing requirements.";

export const closingGateway = {
  eyebrow: "Registered. Compliant. Ready to Deliver.",
  body: [
    "Whether you need ICT equipment, industrial supplies, construction support, or agricultural commodities — success in public procurement requires more than a quote. It requires a partner who matches specifications, delivers on time, and stands behind every product.",
    "Middle East Business brings the registration, track record, and operational discipline your institution needs. Performance letters and tender award notifications are available for reference upon request.",
  ],
  headline: "Partner with a supplier you can trust.",
  cta: "Get in Touch",
};

export const credentialsBanner = {
  label: "Company Credentials",
  items: [
    {
      title: "Registration",
      text: "AF/AT/1/0004782/2016 — Registered under Ethiopian law since 2016",
    },
    {
      title: "Tax Compliance",
      text: "TIN 0089020816 — Active taxpayer identification for public tender participation",
    },
    {
      title: "Operational Reach",
      text: "Afar Region · Addis Ababa · Sidama National Regional State",
    },
  ],
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  highlight: string;
  features: string[];
};

export const services: Service[] = coreBusinessAreas.map((area) => ({
  slug: area.slug,
  title: area.title,
  summary: area.summary,
  intro: area.summary,
  highlight: area.capabilities[0],
  features: area.capabilities,
}));

export const contactSection = {
  eyebrow: "Contact Us",
  title: "Start your procurement partnership",
  intro:
    "Reach out to discuss tender requirements, supply specifications, or partnership opportunities. We respond promptly to all institutional and government inquiries.",
  objectives: [
    "IT & Office Equipment Supply",
    "Industrial & Construction Support",
    "Agricultural Commodities",
    "Public Tender Participation",
    "Machinery & Equipment Rental",
    "Other",
  ],
  submitLabel: "Send Inquiry",
};
