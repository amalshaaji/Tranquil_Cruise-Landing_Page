# Tranquil Cruise

Premium Kerala backwater tourism site.

- `frontend/` — Next.js (App Router), TypeScript, Tailwind CSS v4
- `backend/` — FastAPI, SQLAlchemy 2, PostgreSQL
- `docker-compose.yml` — local Postgres

## Run locally

```bash
docker compose up -d                      # Postgres

cd backend && uv sync
uv run uvicorn app.main:app --reload      # http://localhost:8000/api/health

cd frontend && npm install && npm run dev # http://localhost:3000
```

Copy `.env.example` to `.env` (backend) and `.env.local` (frontend).

## Frontend layout

- `src/app` — routes (`/`, `/stays`, `/experiences`, `/about`, `/contact`)
- `src/components/ui` — Button, Card, Container, Section, Heading primitives
- `src/components/layout` — Header, Footer, PageHero
- `src/app/globals.css` — design tokens (`@theme`): paper / sand / moss / clay palette, Fraunces + Inter
- `src/lib` — site config, API client

## Enquiries

`POST /api/enquiries` stores an enquiry (service, date, guests, name, phone, email, message) in Postgres and returns a reference like `TC-52W7R8`. The site then shows `/enquiry/<reference>`, which has a WhatsApp button.

- `GET /api/enquiries/{reference}` — public confirmation view (no contact details)
- `GET /api/enquiries` — all enquiries, requires an `X-Admin-Key` header matching `ADMIN_KEY`
- Tables are created on API startup. Switch to Alembic before changing the schema.
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits, with country code) in `frontend/.env.local`.
- If port 8000 is busy, run the API elsewhere (`--port 8001`) and set `NEXT_PUBLIC_API_URL` to match.

## Deploying to Vercel

The site is the `frontend/` folder; the API and database are hosted separately.

1. **Import the repo** in Vercel and set **Root Directory** to `frontend`. The framework (Next.js) and build settings are detected automatically.
2. **Environment variables** (Project → Settings → Environment Variables):

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | your domain, e.g. `https://www.tranquilcruise.in` (used for canonical URLs, sitemap, Open Graph) |
   | `NEXT_PUBLIC_API_URL` | the deployed FastAPI URL, no trailing slash |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | digits with country code, e.g. `919876543210` |
   | `GOOGLE_PLACES_API_KEY` | optional, turns on live Google reviews (see below). Server-only, do not prefix with `NEXT_PUBLIC_` |
   | `GOOGLE_PLACE_ID` | optional, skips the lookup by name |

3. **Backend**: host the FastAPI app on any Python host (Render, Railway, Fly.io) with a managed Postgres (Neon, Supabase, Railway). Set `DATABASE_URL`, `ADMIN_KEY` and `CORS_ORIGINS=["https://your-domain"]` there. Without it, the enquiry form shows its WhatsApp fallback.
4. **Domain**: add it in Vercel, then set `NEXT_PUBLIC_SITE_URL` to match and redeploy.

Preview deployments are served with `noindex` (see `src/app/robots.ts`), so only production is crawlable.

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
rating, review count and up to five reviews (a Google limit), and refreshes about hourly.
If the key is missing or Google is unreachable it falls back to the reviews pasted into
`src/lib/reviews.ts`, then to just the rating with a link to the listing.
Google's terms require the reviews to stay attributed to Google and the reviewer, which the cards do.
