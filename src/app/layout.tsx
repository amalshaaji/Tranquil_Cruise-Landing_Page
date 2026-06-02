import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleTagManagerNoscript from "@/components/analytics/GoogleTagManagerNoscript";
import DeferredGlobalConversionLayer from "@/components/conversion/DeferredGlobalConversionLayer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { getGooglePlaceReviewData } from "@/lib/google-place-reviews";
import {
  createLocalBusinessSchema,
  createPageMetadata,
  createTravelAgencySchema,
} from "@/lib/seo";
import {
  DEFAULT_OG_IMAGE,
  INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/site";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: {
    icon: "/tranquil-cruise-logo-search.jpg",
    shortcut: "/tranquil-cruise-logo-search.jpg",
    apple: "/tranquil-cruise-logo-search.jpg",
  },
  authors: [{ name: "Tranquil Cruise" }],
  creator: "Tranquil Cruise",
  publisher: "Tranquil Cruise",
  referrer: "origin-when-cross-origin",
  verification:
    googleSiteVerification || bingSiteVerification
      ? {
          google: googleSiteVerification || undefined,
          other: bingSiteVerification
            ? {
                "msvalidate.01": bingSiteVerification,
              }
            : undefined,
        }
      : undefined,
  ...createPageMetadata({
    title: "Alappuzha Houseboat | Private Houseboat Booking in Kerala",
    description:
      "Book an Alappuzha houseboat, private day cruise, overnight stay, and backwater experiences in Kerala with local planning support from Tranquil Cruise.",
    path: "/",
    keywords: [
      "Alappuzha houseboat",
      "Alappuzha houseboat booking",
      "Alleppey houseboat",
      "Alappuzha backwater cruise",
      "Kerala backwaters",
      "private shikkara ride Alleppey",
      "backwater kayaking Alleppey",
    ],
    image: {
      url: DEFAULT_OG_IMAGE,
      width: 4640,
      height: 3739,
      alt: "Private Kerala houseboat in the Alleppey backwaters",
    },
  }),
};

export const viewport: Viewport = {
  themeColor: "#2F4F68",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleReviewData = await getGooglePlaceReviewData();
  const aggregateRating =
    googleReviewData?.rating && googleReviewData.reviewCount
      ? {
          ratingValue: googleReviewData.rating,
          reviewCount: googleReviewData.reviewCount,
        }
      : undefined;

  const siteOffers = [
    { name: "Private Alleppey Houseboats", path: "/houseboats" },
    { name: "Private Shikkara Rides", path: "/shikkara" },
    { name: "Country Boat Rides", path: "/canoe-boats" },
    { name: "Backwater Kayaking", path: "/kayaking" },
    { name: "Backwater Rooms", path: "/rooms" },
    { name: "Ayurvedic Spa", path: "/spa" },
  ];

  const globalSchema = [
    createLocalBusinessSchema({
      description:
        "Tranquil Cruise offers private houseboats, shikkara rides, country boats, kayaking, backwater rooms, and Ayurvedic wellness in Alleppey and the Kerala backwaters.",
      sameAs: [WHATSAPP_URL, INSTAGRAM_URL],
      aggregateRating,
      makesOffer: siteOffers,
    }),
    createTravelAgencySchema({
      description:
        "Travel planning and private Kerala backwater experiences in Alappuzha including houseboats, shikkara rides, country boats, kayaking, rooms, and wellness.",
      sameAs: [WHATSAPP_URL, INSTAGRAM_URL],
      aggregateRating,
      makesOffer: siteOffers,
    }),
  ];

  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col text-foreground">
        <JsonLd data={globalSchema} />
        <GoogleTagManagerNoscript />
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[90] rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#173247] shadow-lg focus:not-sr-only"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <DeferredGlobalConversionLayer />
      </body>
    </html>
  );
}
