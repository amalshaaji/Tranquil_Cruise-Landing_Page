import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/contact/ContactPageContent";
import JsonLd from "@/components/seo/JsonLd";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  generatePageMetadata,
} from "@/lib/seo";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  SITE_URL,
} from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Contact Tranquil Cruise | Alleppey Houseboat Booking",
    description:
      "Contact Tranquil Cruise for Alleppey houseboats, Shikara rides, country boats, kayaking, backwater rooms, and Ayurvedic wellness in Alappuzha.",
    path: "/contact",
    keywords: [
      "contact Tranquil Cruise",
      "Alleppey houseboat booking",
      "book shikara ride Alappuzha",
    ],
  });
}

const faqs = [
  {
    question: "How do I book a houseboat or backwater ride with Tranquil Cruise?",
    answer:
      "You can contact us on WhatsApp, call us, or send an enquiry through the contact form with your dates, group size, and preferred experience.",
  },
  {
    question: "Which areas do you serve for Kerala backwater experiences?",
    answer:
      "We help guests plan experiences around Alleppey, Alappuzha, Kuttanad, Vembanad Lake, and the wider Kerala backwaters.",
  },
  {
    question: "What details should I share when booking?",
    answer:
      "Share your dates, guest count, preferred experience, and whether you want a houseboat, Shikara ride, country boat, kayaking, a room stay, or a spa and wellness plan.",
  },
];

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

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
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 08:00-20:00",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={createFaqSchema(faqs)} />
      <Suspense fallback={null}>
        <ContactPageContent />
      </Suspense>
    </>
  );
}
