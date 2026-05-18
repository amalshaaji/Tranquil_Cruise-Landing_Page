import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Tranquil Cruise Kerala",
  description:
    "Reach out to Tranquil Cruise to book houseboats, Shikkara rides, or any Kerala backwater experience. We respond quickly and help shape your stay around your pace.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Tranquil Cruise Kerala",
    description:
      "Get in touch to book a houseboat, Shikkara ride, or backwater experience in Kerala's Alleppey.",
    url: "https://www.tranquilcruise.com/contact",
    images: [{ url: "/images/home-hero-rainbow-houseboat.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tranquil Cruise",
  description:
    "Contact Tranquil Cruise for Kerala houseboat stays, Shikkara rides, waterside rooms, and backwater experiences in Alappuzha.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    url: SITE_URL,
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <Suspense fallback={null}>
        <ContactPageContent />
      </Suspense>
    </>
  );
}
