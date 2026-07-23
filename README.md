# Premium Car Travels

Production-ready Next.js 15 (App Router) website for **Premium Car Travels** — a car rental & travel service in Bhimavaram, West Godavari.

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- next/image + next/font (Poppins)
- Metadata API (full on-page SEO + JSON-LD schema)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/            → Routes (Home, Prebooking, Local Trips, Gallery, Services, Contact)
components/     → Reusable UI components
data/           → Static content (cars, services, gallery, faq, reviews, locations)
lib/            → constants.ts, seo.ts (metadata + schema builders), utils.ts
styles/         → globals.css (Tailwind + reusable utility classes)
```

## Replacing Placeholder Images

All car and gallery images are currently placeholder photos loaded from Unsplash/Pravatar so the site works out of the box. To use your real photos:

1. Add your images to `public/images/cars/`, `public/images/gallery/`, `public/images/hero/`.
2. Update the `image` fields in:
   - `data/cars.ts` (Baleno & Ertiga photos)
   - `data/gallery.ts` (gallery photos)
   - `data/reviews.ts` (customer avatars)
   - `components/HeroSlider.tsx` (`slides` array — hero background images)
   - `components/Hero.tsx` usages in each page (`backgroundImage` prop)
3. If using local files instead of remote URLs, you can remove the `remotePatterns` entries in `next.config.ts` once no longer needed (keep them if you still reference any remote URLs).

## Editing Business Info

Update phone number, WhatsApp number, email, and owner name in `lib/constants.ts`.

## SEO

Every page uses the shared `buildMetadata()` helper in `lib/seo.ts` for title, description, keywords, Open Graph, Twitter cards, and canonical URLs. JSON-LD schema (LocalBusiness, Organization, Breadcrumb, FAQ, Review) is injected per page. `app/sitemap.ts` and `app/robots.ts` are auto-generated — update `SITE.domain` in `lib/constants.ts` once you have your live domain.
