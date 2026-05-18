import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: MetadataInput): Metadata {
  const ogImage = image ?? {
    url: DEFAULT_OG_IMAGE,
    width: 4640,
    height: 3739,
    alt: "Private Kerala houseboat in the Alleppey backwaters",
  };

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export async function generatePageMetadata(
  input: MetadataInput,
): Promise<Metadata> {
  return createPageMetadata(input);
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};

export function createServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Place", name: "Alleppey" },
      { "@type": "Place", name: "Alappuzha" },
      { "@type": "Place", name: "Kuttanad" },
      { "@type": "Place", name: "Vembanad Lake" },
      { "@type": "Place", name: "Kerala Backwaters" },
    ],
  };
}

export function createOrganizationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: SITE_NAME,
    description,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };
}
