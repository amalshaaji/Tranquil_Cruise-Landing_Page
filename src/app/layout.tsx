import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleTagManagerNoscript from "@/components/analytics/GoogleTagManagerNoscript";
import GlobalConversionLayer from "@/components/conversion/GlobalConversionLayer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import TransitionProvider from "./transition-provider";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: SITE_NAME,
  description:
    "Private houseboats, shikara rides, country boats, kayaking, backwater rooms, and Ayurvedic wellness in Alleppey, Alappuzha, and the Kerala backwaters.",
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
  authors: [{ name: "Tranquil Cruise" }],
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
};

export const viewport: Viewport = {
  themeColor: "#2F4F68",
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
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col text-foreground">
        <GoogleTagManagerNoscript />
        <GoogleAnalytics />
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
        <GlobalConversionLayer />
        <Footer />
      </body>
    </html>
  );
}
