import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticSeoPage from "@/components/seo/ProgrammaticSeoPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  getProgrammaticSeoPageBySlug,
  programmaticSeoPages,
} from "@/lib/programmatic-seo-pages";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return programmaticSeoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgrammaticSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return generatePageMetadata({
    title: `${page.title} | Tranquil Cruise`,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    image: {
      url: page.heroImage.src,
      width: 1200,
      height: 630,
      alt: page.heroImage.alt,
    },
  });
}

export default async function ProgrammaticSeoRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProgrammaticSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbJsonLd = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Houseboats", path: "/houseboats" },
    { name: page.title, path: page.path },
  ]);

  const imageJsonLd = createImageObjectSchema({
    path: page.heroImage.src,
    alt: page.heroImage.alt,
    width: 1200,
    height: 630,
  });

  const serviceJsonLd = createServiceSchema({
    name: page.title,
    description: page.description,
    path: page.path,
    serviceType: "Private houseboat stay",
  });

  const touristTripJsonLd = createTouristTripSchema({
    name: page.touristTripName,
    description: page.touristTripDescription,
    path: page.path,
    image: {
      path: page.heroImage.src,
      alt: page.heroImage.alt,
      width: 1200,
      height: 630,
    },
    itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
    touristType: page.touristTypes,
    keywords: page.keywords,
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          imageJsonLd,
          serviceJsonLd,
          touristTripJsonLd,
          createFaqSchema(page.faqs),
        ]}
      />
      <ProgrammaticSeoPage page={page} />
    </>
  );
}
