import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoKnowledgePage from "@/components/content/SeoKnowledgePage";
import ProgrammaticSeoPage from "@/components/seo/ProgrammaticSeoPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  getProgrammaticSeoPageBySlug,
  programmaticSeoPages,
} from "@/lib/programmatic-seo-pages";
import { getSeoKnowledgePageBySlug, seoKnowledgePages } from "@/lib/seo-pages";
import { alappuzhaHouseboatSeoStrategy } from "@/lib/alappuzha-houseboat-seo-strategy";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createItemListSchema,
  createLocalBusinessSchema,
  createServiceSchema,
  createSpeakableSchema,
  createTravelAgencySchema,
  createTouristTripSchema,
  createWebPageSchema,
  generatePageMetadata,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...programmaticSeoPages, ...seoKnowledgePages].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seoKnowledgePage = getSeoKnowledgePageBySlug(slug);

  if (seoKnowledgePage) {
    return generatePageMetadata({
      title: `${seoKnowledgePage.title} | Tranquil Cruise`,
      description: seoKnowledgePage.description,
      path: seoKnowledgePage.path,
      keywords: seoKnowledgePage.keywords,
      image: {
        url: seoKnowledgePage.heroImage.src,
        width: 1200,
        height: 630,
        alt: seoKnowledgePage.heroImage.alt,
      },
    });
  }

  const page = getProgrammaticSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return generatePageMetadata({
    title: page.metadataTitle ?? `${page.title} | Tranquil Cruise`,
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
  const seoKnowledgePage = getSeoKnowledgePageBySlug(slug);

  if (seoKnowledgePage) {
    const breadcrumbJsonLd = createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: seoKnowledgePage.title, path: seoKnowledgePage.path },
    ]);

    const imageJsonLd = createImageObjectSchema({
      path: seoKnowledgePage.heroImage.src,
      alt: seoKnowledgePage.heroImage.alt,
      width: 1200,
      height: 630,
    });

    const webPageJsonLd = createWebPageSchema({
      path: seoKnowledgePage.path,
      name: seoKnowledgePage.title,
      description: seoKnowledgePage.description,
      image: {
        path: seoKnowledgePage.heroImage.src,
        alt: seoKnowledgePage.heroImage.alt,
        width: 1200,
        height: 630,
      },
      breadcrumbName: seoKnowledgePage.title,
    });

    const speakableJsonLd = createSpeakableSchema({
      path: seoKnowledgePage.path,
      name: seoKnowledgePage.title,
      description: seoKnowledgePage.description,
      cssSelectors: ["main h1", "main section h2"],
      pageType: seoKnowledgePage.kind === "blog" ? "Article" : "WebPage",
    });

    const localBusinessJsonLd = createLocalBusinessSchema({
      description: seoKnowledgePage.description,
      path: seoKnowledgePage.path,
      image: {
        path: seoKnowledgePage.heroImage.src,
        alt: seoKnowledgePage.heroImage.alt,
        width: 1200,
        height: 630,
      },
      images: seoKnowledgePage.gallery.map((image) => ({
        path: image.src,
        alt: image.alt,
        width: 1200,
        height: 630,
      })),
    });

    const travelAgencyJsonLd = createTravelAgencySchema({
      description: seoKnowledgePage.description,
      path: seoKnowledgePage.path,
      image: {
        path: seoKnowledgePage.heroImage.src,
        alt: seoKnowledgePage.heroImage.alt,
        width: 1200,
        height: 630,
      },
    });

    const pageSpecificSchema =
      seoKnowledgePage.kind === "blog"
        ? createArticleSchema({
            headline: seoKnowledgePage.title,
            description: seoKnowledgePage.description,
            path: seoKnowledgePage.path,
            image: {
              path: seoKnowledgePage.heroImage.src,
              alt: seoKnowledgePage.heroImage.alt,
              width: 1200,
              height: 630,
            },
            keywords: seoKnowledgePage.keywords,
            articleSection: seoKnowledgePage.eyebrow,
          })
        : [
            createServiceSchema({
              name: seoKnowledgePage.title,
              description: seoKnowledgePage.description,
              path: seoKnowledgePage.path,
              serviceType: "Private backwater experience",
            }),
            createTouristTripSchema({
              name: seoKnowledgePage.title,
              description: seoKnowledgePage.description,
              path: seoKnowledgePage.path,
              image: {
                path: seoKnowledgePage.heroImage.src,
                alt: seoKnowledgePage.heroImage.alt,
                width: 1200,
                height: 630,
              },
              itinerary: ["Alleppey", "Alappuzha", "Kainakary", "Punnamada Lake", "Vembanad Lake"],
              touristType: ["Couples", "Families", "One-day travelers", "Private groups"],
              keywords: seoKnowledgePage.keywords,
            }),
          ];

    return (
      <>
        <JsonLd
          data={[
            breadcrumbJsonLd,
            imageJsonLd,
            webPageJsonLd,
            localBusinessJsonLd,
            travelAgencyJsonLd,
            speakableJsonLd,
            ...(Array.isArray(pageSpecificSchema) ? pageSpecificSchema : [pageSpecificSchema]),
            createFaqSchema(seoKnowledgePage.faqs),
          ]}
        />
        <SeoKnowledgePage page={seoKnowledgePage} />
      </>
    );
  }

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

  const localBusinessJsonLd = createLocalBusinessSchema({
    description: `${page.title}. ${page.description}`,
    path: page.path,
    image: {
      path: page.heroImage.src,
      alt: page.heroImage.alt,
      width: 1200,
      height: 630,
    },
    images: page.gallery.map((image) => ({
      path: image.src,
      alt: image.alt,
      width: 1200,
      height: 630,
    })),
  });

  const travelAgencyJsonLd = createTravelAgencySchema({
    description: `${page.title}. ${page.description}`,
    path: page.path,
    image: {
      path: page.heroImage.src,
      alt: page.heroImage.alt,
      width: 1200,
      height: 630,
    },
  });

  const itemListJsonLd =
    page.path === "/alappuzha-houseboat"
      ? createItemListSchema({
          path: page.path,
          items: alappuzhaHouseboatSeoStrategy.requiredPages.map((item) => ({
            name: item.title,
            url: item.href,
            description: `${item.intent} page targeting ${item.primaryKeyword}`,
          })),
        })
      : null;

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

  const speakableJsonLd = createSpeakableSchema({
    path: page.path,
    name: page.title,
    description: page.description,
    cssSelectors: ["main h1", "main section h2"],
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          imageJsonLd,
          localBusinessJsonLd,
          serviceJsonLd,
          travelAgencyJsonLd,
          touristTripJsonLd,
          ...(itemListJsonLd ? [itemListJsonLd] : []),
          speakableJsonLd,
          createFaqSchema(page.faqs),
        ]}
      />
      <ProgrammaticSeoPage page={page} />
    </>
  );
}
