import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GlobalConversionLayer from "@/components/conversion/GlobalConversionLayer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import TransitionProvider from "./transition-provider";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const editorialFont = localFont({
  src: "../../node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-italic.woff2",
  variable: "--font-editorial",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

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
      className={`${editorialFont.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col pb-28 text-foreground xl:pb-0">
        <GoogleAnalytics />
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
        <GlobalConversionLayer />
        <Footer />
      </body>
    </html>
  );
}
