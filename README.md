# Zuhr

An animated fashion e-commerce landing page built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — root layout, global styles, and the single home page
- `components/` — Nav, Hero, IntroBand, Shop, Story, FeatureSplit, Essence, Gallery, Footer
- `lib/data.ts` — product, category, and gallery data

Product/gallery photography is placeholder imagery from picsum.photos — swap the URLs in `lib/data.ts` and the `src` props in `components/` for real campaign photography.
