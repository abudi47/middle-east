# Middle East Business

Corporate marketing website for **Middle East Business PLC** — a registered multi-sector supplier in Ethiopia serving governmental, public, and non-governmental procurement, with a featured Samsung device catalog.

> Multi-Sector Enterprise & Institutional Procurement Partner

**Owner & General Manager:** Mrs. Leyla Eshetu Seid  
**Head Office:** Awsi Rasu Zone 1, Semera-Logiya City, Kebele 01, Afar Region, Ethiopia  
**Operational wings:** Addis Ababa Hub (Central Distribution) · Sidama Office (Hawassa Operations)  
**Registration:** AF/AT/1/0004782/2016 · **TIN:** 0089020816 · **Capital:** 4,000,000 ETB

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** with corporate design tokens
- **Framer Motion** for scroll reveals, counters, parallax, layout transitions and the product filter
- **next/font** (Inter + Plus Jakarta Sans), self-hosted at build time
- **lucide-react** for icons

## Brand System

| Token | Value | Use |
| --- | --- | --- |
| Navy Ink / Deep | `#0A1C33` / `#0F2744` | Hero, dark sections, footer |
| Corporate Blue (`gold`) | `#1D6FB8` | Buttons, links, ICT sector accent |
| Ember | `#D97706` | Industrial & Construction sector accent |
| Jade | `#0D9488` | Agri-Commodities sector accent, status badges |
| Mist | `#F8FAFC` | Light section backgrounds |

- **Typography:** Plus Jakarta Sans (headings), Inter (body)
- **Style:** Navy → blue → teal gradients from the company profile, rounded cards, glass panels on dark sections
- **Motion:** every animation respects `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` + a global CSS override)

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero with product collage, client marquee, overview, featured products, sectors, case spotlights, contract ledger, commitments, regions map, contact |
| `/products` | Samsung spotlight, filterable product catalog (category tabs + Samsung-only switch), 5-step delivery process |
| `/services` | ICT & Digital Hardware, Industrial & Construction, Agri-Commodities & Supply Chain |
| `/portfolio` | Key executed contracts, case spotlights, client types |
| `/about` | Overview & leadership, mission, vision, goals, values, story, footprint map |
| `/contact` | Inquiry form, corporate registration details, regions map |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project Structure

```
app/
  page.tsx              # Home
  about/page.tsx
  services/page.tsx
  portfolio/page.tsx
  contact/page.tsx
  layout.tsx
  globals.css

components/
  Hero.tsx              # Word-reveal headline, parallax product collage, stats
  ProductCatalog.tsx    # Filterable product grid (tabs, Samsung-only switch)
  ProductCard.tsx
  SamsungSpotlight.tsx
  CoreBusinessGrid.tsx  # Three sector cards
  CaseStudies.tsx       # Willows International & EDRMC spotlights
  PastWorksTable.tsx    # Contract ledger with animated value bars
  SopSection.tsx        # Four operational commitments
  RegionsMap.tsx        # Interactive Ethiopia map (HQ, Addis hub, Hawassa)
  SpotlightCard.tsx     # Cursor-glow / tilt card wrapper
  Navbar.tsx, Footer.tsx, ...

lib/
  content.ts            # Company data and copy (from the company profile)
  products.ts           # Product catalog, hero images, Samsung spotlight
  accent.ts             # Sector accent class sets
  icons.ts              # Icon maps

public/images/
  products/, sectors/   # Optimized WebP photos
  CREDITS.md            # Photographer credits (Unsplash License)
```

## Content

Company copy is centralized in `lib/content.ts`, sourced from the Middle East Business company profile (`company_profile/`, not committed). Update registration details, contracts, sectors, and contact info there.

Products live in `lib/products.ts`. To add one, drop a WebP image (about 1000px wide) into `public/images/products/` and add an entry with its category; set `featured: true` to show it on the home page. Record the photo's source in `public/images/CREDITS.md`.

The contact form opens the visitor's email client via `mailto:` and can be wired to a backend or email service later.

## Customization

| What | Where |
| --- | --- |
| Colors & tokens | `tailwind.config.ts`, `app/globals.css` |
| Copy & data | `lib/content.ts` |
| Products | `lib/products.ts`, `public/images/products/` |
| Logo | `components/Logo.tsx` |
| Favicon | `app/icon.svg`, `app/apple-icon.svg` |

## Deployment

Configured for static export via Netlify (`netlify.toml`). Build with `npm run build` and publish the `out` directory.
