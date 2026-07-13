# Middle East Business

Corporate marketing website for **Middle East Business** — a registered multi-sector supplier in Ethiopia serving governmental, public, and institutional procurement.

> Your Single-Source Procurement Partner

**Owner:** Mrs. Leyla Eshetu Seid  
**Head Office:** Awsi Rasu Zone 1, Semera-Logiya City, Kebele 01, Afar Region, Ethiopia  
**Registration:** AF/AT/1/0004782/2016 · **TIN:** 0089020816

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** with corporate design tokens
- **Framer Motion** for scroll reveals and stat counters
- **lucide-react** for icons

## Brand System

| Token | Value | Use |
| --- | --- | --- |
| Navy Deep | `#0F2744` | Headers, footer, dark sections |
| Navy | `#1B3A5C` | Secondary dark surfaces |
| Corporate Blue | `#1D6FB8` | Buttons, links, accents |
| Slate | `#64748B` | Secondary text |
| Mist | `#F8FAFC` | Page backgrounds |

- **Typography:** Inter (all UI and headings)
- **Style:** Clean corporate layout — white nav, bordered cards, navy hero, no decorative gradients

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, overview, services, values, why partner, SOP, portfolio preview, stats, contact |
| `/services` | IT & E-Commerce, Industrial & Construction, Agricultural & Supply Chain |
| `/portfolio` | Completed public contracts and institutional clients |
| `/about` | Mission, vision, goals, values, SOP, commitment |
| `/contact` | Inquiry form and full company contact details |

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
  Hero.tsx              # Hero with credentials + stats
  OverviewSection.tsx
  CoreBusinessGrid.tsx
  WhyPartnerSection.tsx
  SopSection.tsx
  PastWorksTable.tsx
  ExecutiveContactSection.tsx
  Navbar.tsx
  Footer.tsx
  Logo.tsx
  ...

lib/
  content.ts            # All site copy and company data
  icons.ts              # Service and partner icon maps
```

## Content

All copy is centralized in `lib/content.ts`, sourced from the Middle East Business company profile. Update registration details, portfolio entries, services, and contact info there.

The contact form opens the visitor's email client via `mailto:` and can be wired to a backend or email service later.

## Customization

| What | Where |
| --- | --- |
| Colors & tokens | `tailwind.config.ts`, `app/globals.css` |
| Copy & data | `lib/content.ts` |
| Logo | `components/Logo.tsx` |
| Favicon | `app/icon.svg`, `app/apple-icon.svg` |

## Deployment

Configured for static export via Netlify (`netlify.toml`). Build with `npm run build` and publish the `out` directory.
