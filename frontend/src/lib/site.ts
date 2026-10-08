/** Canonical origin. Set NEXT_PUBLIC_SITE_URL to the custom domain; Vercel's production URL is the fallback. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const site = {
  name: "Tranquil Cruise",
  tagline: "Slow days on the Kerala backwaters",
  description:
    "Private houseboat journeys through the Alleppey backwaters, hosted by a local crew and fed from a Kerala kitchen.",
  location: "Pallathuruthy, Alappuzha, Kerala",
  address: {
    street: "8/308B, Chungam Road, Pallathuruthy",
    locality: "Alappuzha",
    region: "Kerala",
    postalCode: "688011",
  },
  /** Your Google Maps listing, where guests can read reviews. */
  googleMapsUrl: "https://maps.app.goo.gl/TtpGGRda5CuSssNRA",
  /** Rating shown on the Google listing. Update if it changes. */
  googleRating: "5.0",
  /** Number of Google reviews on the listing. Update if it changes. */
  googleReviewCount: 136,
  /** Justdial rating and vote count, as listed. */
  justdial: { rating: "5.0", votes: 122 },
  jetty: "Kannita jetty",
  hours: "Open 24 hours",
  email: "cruisetranquil@gmail.com",
  phone: "+91 79940 73491",
  // Digits only, with country code (e.g. 919876543210). Set in .env.local.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "910000000000",
};

export const nav = [
  { href: "/houseboats", label: "Houseboats" },
  { href: "/day-cruise", label: "Day cruise" },
  { href: "/shikkara", label: "Shikkara" },
  { href: "/kayaking", label: "Kayaking" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = [{ href: "/contact", label: "Contact" }] as const;
