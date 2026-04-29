import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import ServiceCards from "@/components/home/ServiceCards";
import { categories } from "@/lib/tranquil-data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    description:
      "Luxury houseboats, Shikkara rides, and stays on Kerala backwaters.",
    url: "https://www.tranquilcruise.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    priceRange: "$$",
    image: "https://www.tranquilcruise.com/images/og-image.svg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex min-h-screen flex-col">
        <HeroSection />
        
        <ServiceCards categories={categories} />
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
            {[
              {
                title: "Static export friendly",
                desc: "No backend. Data comes from /data as JSON.",
              },
              {
                title: "SPA-like navigation",
                desc: "Client-side routing with smooth Framer Motion transitions.",
              },
              {
                title: "Luxury UI, mobile-first",
                desc: "Airbnb-inspired layout with premium Kerala theme.",
              },
            ].map((b) => (
              <div key={b.title} className="space-y-2">
                <div className="text-sm font-semibold text-sand">{b.title}</div>
                <div className="text-sm text-foreground/75">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
