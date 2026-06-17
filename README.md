# RAS Packaging — E-Commerce Store

A modern e-commerce storefront for **RAS Packaging**, a premium custom packaging manufacturer based in Pakistan. Built with Next.js 15, React 19, and Tailwind CSS 4.

---

## Features

- **Product catalogue** — Boxes, Paper Cups, Business Cards, Shopping Bags, Labels & Tags
- **Shop page** with category filtering and sort options
- **Product detail pages** with dynamic routing (`/product/[slug]`)
- **Shopping cart** with persistent state via `localStorage`
- **Checkout flow**
- **Static informational pages** — About, FAQ, Shipping, Returns, Track Order, Materials, Sustainability, Careers, Contact, Press
- **Legal pages** — Privacy Policy, Terms of Service, Cookie Policy
- Responsive design with a navy (`#1B2A4A`) and gold (`#C9A84C`) brand palette
- SEO sitemap generated at `/sitemap.xml`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Image optimisation | Next.js `<Image>` + Sharp |
| Utilities | clsx |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── shop/             # Shop listing page
│   ├── product/[slug]/   # Dynamic product detail pages
│   ├── checkout/         # Checkout page
│   ├── about/            # About page
│   └── ...               # Other static pages
├── components/           # Shared UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartDrawer.tsx
│   └── ...
├── context/
│   └── CartContext.tsx   # Global cart state (React Context)
├── data/
│   └── products.ts       # Product and category data
└── types/
    └── index.ts          # TypeScript type definitions
```

---

## Product Categories

| Category | Products |
|---|---|
| Boxes | Custom Mailer Box, Luxury Rigid Gift Box, Corrugated Shipping Box, Die-Cut Window Display Box |
| Paper Cups | Single Wall Kraft 8oz, Double Wall Insulated 12oz, Clear Cold Drink 16oz |
| Business Cards | Premium Matte, Spot UV Luxury |
| Shopping Bags | Kraft Paper Handle Bag, Glossy Laminated Gift Bag |
| Labels & Tags | Custom BOPP Sticker Labels |

---

## License

Private — all rights reserved by RAS Packaging.
