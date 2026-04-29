import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TransitionProvider from "./transition-provider";

export const metadata: Metadata = {
  title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
  description: "Experience the ultimate luxury backwater cruise with Tranquil Cruise. Book premium houseboats, Shikkara rides, and rooms in Kerala.",
  metadataBase: new URL("https://www.tranquilcruise.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
    description: "Experience the ultimate luxury backwater cruise with Tranquil Cruise.",
    url: "https://www.tranquilcruise.com",
    siteName: "Tranquil Cruise",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tranquil Cruise Luxury Houseboat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquil Cruise | Luxury Houseboats & Backwater Tours",
    description: "Experience the ultimate luxury backwater cruise with Tranquil Cruise.",
    images: ["/images/og-image.svg"],
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
  verification: {
    google: "your-google-site-verification", // Replace with your actual Google Search Console code
  },
  keywords: ["Kerala houseboats", "Alleppey backwaters", "Shikkara ride", "luxury cruise Kerala", "boat booking Alleppey"],
  authors: [{ name: "Tranquil Cruise" }],
};

export const viewport: Viewport = {
  themeColor: "#00334A",
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
    >
      <body className="min-h-full flex flex-col text-foreground">
        <Navbar />
        <TransitionProvider>{children}</TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
