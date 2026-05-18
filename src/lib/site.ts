export const SITE_URL = "https://www.tranquilcruise.com";
export const SITE_NAME = "Tranquil Cruise";
export const DEFAULT_OG_IMAGE = "/images/home-hero-rainbow-houseboat.jpg";
export const BUSINESS_PHONE = "+91 79940 73491";
export const BUSINESS_PHONE_LINK = "tel:+917994073491";
export const WHATSAPP_URL = "https://wa.me/917994073491";
export const BUSINESS_EMAIL = "info@tranquilcruise.com";
export const BUSINESS_EMAIL_LINK = "mailto:info@tranquilcruise.com";
export const BUSINESS_LOCATION = "Alappuzha, Kerala";
export const BUSINESS_HOURS = "8:00 AM – 8:00 PM daily";
export const SERVICE_AREAS = [
  "Alleppey",
  "Alappuzha",
  "Kuttanad",
  "Vembanad Lake",
  "Kerala Backwaters",
] as const;

export type SiteRoute = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/houseboats", changeFrequency: "weekly", priority: 0.95 },
  { path: "/luxury-houseboat-alappuzha", changeFrequency: "weekly", priority: 0.9 },
  { path: "/budget-houseboat-alappuzha", changeFrequency: "weekly", priority: 0.9 },
  { path: "/honeymoon-houseboat-alappuzha", changeFrequency: "weekly", priority: 0.9 },
  { path: "/houseboats/single-bed", changeFrequency: "monthly", priority: 0.9 },
  { path: "/houseboats/2-bedroom", changeFrequency: "monthly", priority: 0.9 },
  { path: "/houseboats/3-bedroom", changeFrequency: "monthly", priority: 0.9 },
  { path: "/houseboats/5-bedroom", changeFrequency: "monthly", priority: 0.9 },
  { path: "/shikkara", changeFrequency: "weekly", priority: 0.85 },
  { path: "/canoe-boats", changeFrequency: "weekly", priority: 0.85 },
  { path: "/kayaking", changeFrequency: "weekly", priority: 0.85 },
  { path: "/rooms", changeFrequency: "weekly", priority: 0.8 },
  { path: "/spa", changeFrequency: "monthly", priority: 0.75 },
  { path: "/experience", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
] as const;

// TODO: Configure a permanent 301 redirect from the Vercel deployment URL to
// https://www.tranquilcruise.com so search engines index only the production domain.
