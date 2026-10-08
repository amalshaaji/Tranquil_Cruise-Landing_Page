# Tranquil Cruise

Premium Kerala backwater tourism site.

A fully static site: Next.js (App Router), TypeScript, Tailwind CSS v4. There is no backend or database.

## Run locally

```bash
cd frontend && npm install && npm run dev   # http://localhost:3000
npm run build                               # writes the static site to frontend/out/
```

Copy `frontend/.env.example` to `frontend/.env.local`.

## Frontend layout

- `src/app` — routes (`/`, `/stays`, `/experiences`, `/about`, `/contact`)
- `src/components/ui` — Button, Card, Container, Section, Heading primitives
- `src/components/layout` — Header, Footer, PageHero
- `src/app/globals.css` — design tokens (`@theme`): paper / sand / moss / clay palette, Fraunces + Inter
- `src/lib` — site config, content, houseboats, homestays

## Enquiries

The contact form, the houseboat booking window and the party form all open WhatsApp with the
guest's details filled in. Nothing is stored on a server. Set `NEXT_PUBLIC_WHATSAPP_NUMBER`
(digits, with country code) in `frontend/.env.local`.

## Deploying to Vercel

The site is the `frontend/` folder, exported as static files (`output: "export"`).

1. **Import the repo** in Vercel and set **Root Directory** to `frontend`. The framework (Next.js) and build settings are detected automatically.
2. **Environment variables** (Project → Settings → Environment Variables):

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | your domain, e.g. `https://www.tranquilcruise.in` (used for canonical URLs, sitemap, Open Graph) |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | digits with country code, e.g. `919876543210` |
   | `GOOGLE_PLACES_API_KEY` | optional, turns on live Google reviews (see below). Server-only, do not prefix with `NEXT_PUBLIC_` |
   | `GOOGLE_PLACE_ID` | optional, skips the lookup by name |

3. **Domain**: add it in Vercel, then set `NEXT_PUBLIC_SITE_URL` to match and redeploy.

Preview deployments are served with `noindex` (see `src/app/robots.ts`), so only production is crawlable. Security headers and photo caching are set in `frontend/vercel.json`.

### SEO checklist after launch

- Replace placeholder phone, email, copy and photos (`src/lib/site.ts`, `src/lib/content.ts`, `public/gallery/`).
- Add the site to Google Search Console and submit `/sitemap.xml`.
- Test pages in Google's Rich Results Test (FAQ, Service, TravelAgency schema are emitted).
- Add real guest reviews before marking them up with `Review` schema.

## Live Google reviews

The review cards on the home page can pull your Google reviews automatically.

1. In Google Cloud, create a project, enable **Places API (New)**, and create an API key.
2. Restrict the key to **Places API (New)** only.
3. Set `GOOGLE_PLACES_API_KEY` in Vercel (and in `frontend/.env.local` to try it locally).

The site finds your listing by name near its coordinates (or set `GOOGLE_PLACE_ID`), shows the
rating, review count and up to five reviews (a Google limit), and refreshes whenever the site is rebuilt and redeployed.
If the key is missing or Google is unreachable it falls back to the reviews pasted into
`src/lib/reviews.ts`, then to just the rating with a link to the listing.
Google's terms require the reviews to stay attributed to Google and the reviewer, which the cards do.
