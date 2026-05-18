import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";
import TransitionProvider from "./transition-provider";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
  description: "Private houseboats, shikkara rides, country boat trips, rooms, and spa experiences in the Alleppey backwaters of Kerala.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
    description: "Private houseboats, scenic rides, and relaxed backwater stays in Alleppey, Kerala.",
    url: "https://www.tranquilcruise.com",
    siteName: "Tranquil Cruise",
    images: [
      {
        url: "/images/home-hero-rainbow-houseboat.jpg",
        width: 4640,
        height: 3739,
        alt: "Traditional Kerala houseboat resting on calm water beneath a rainbow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
    description: "Private houseboats, scenic rides, and relaxed backwater stays in Alleppey, Kerala.",
    images: ["/images/home-hero-rainbow-houseboat.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ["Kerala houseboats", "Alleppey backwaters", "Shikkara ride", "luxury cruise Kerala", "boat booking Alleppey"],
  authors: [{ name: "Tranquil Cruise" }],
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#06343D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col text-foreground">
        <GoogleAnalytics />
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
