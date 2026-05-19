import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  authorityFaqs,
  authorityLinkableAssets,
  authorityOutreachAngles,
  authorityReferencePoints,
} from "@/lib/authority-data";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createSpeakableSchema,
  generatePageMetadata,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Travel Partners & Media References | Tranquil Cruise Alleppey",
    description:
      "A citation-ready hub for travel writers, Kerala tourism partners, and local mentions looking for verified Tranquil Cruise references, review proof, and linkable backwater resources.",
    path: "/partners",
    keywords: [
      "Tranquil Cruise travel partners",
      "Alleppey tourism references",
      "Kerala backwater media references",
      "Tranquil Cruise citations",
    ],
    image: {
      url: "/images/home-backwater-houseboats.jpg",
      width: 1200,
      height: 630,
      alt: "Houseboats on the Kerala backwaters in Alleppey",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Partners & Media", path: "/partners" },
]);

const speakableJsonLd = createSpeakableSchema({
  path: "/partners",
  name: "Travel Partners & Media References",
  description:
    "Verified Tranquil Cruise references, review proof, and linkable resources for travel writers and Kerala tourism mentions.",
  cssSelectors: ["main h1", "main section:nth-of-type(1) p"],
});

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tranquil Cruise Travel Partners & Media References",
  description:
    "A partner-facing resource page that collects review proof, brand context, and linkable Alleppey backwater guides for travel writers and local tourism mentions.",
  url: "https://www.tranquilcruise.com/partners",
};

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          speakableJsonLd,
          collectionPageJsonLd,
          createFaqSchema([...authorityFaqs]),
        ]}
      />

      <main className="pb-20 pt-28 sm:pt-32">
        <section className="border-b border-navy/10 bg-[linear-gradient(180deg,#eef4f7_0%,#f8fbfc_100%)]">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
              Authority Hub
            </div>
            <h1 className="mx-auto mt-4 max-w-4xl text-[2.2rem] font-semibold leading-[1.02] text-sand sm:text-5xl">
              Travel partners, media mentions, and citation-ready Tranquil Cruise references.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-foreground/70 sm:text-base">
              This page is built for Kerala tourism partners, local directories, travel
              writers, and destination roundups that want a clean place to verify Tranquil
              Cruise, find the strongest internal pages to cite, and cross-check live review
              proof before publishing a mention.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
              >
                Review Proof
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-navy/12 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#edf4f7]"
              >
                Contact For Partnerships
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="mb-10">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
              Verified Reference Points
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-sand sm:text-4xl">
              Start with the places that already prove the experience is real.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {authorityReferencePoints.map((item) => {
              const external = item.href.startsWith("http");

              return (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-navy/10 bg-white p-6 shadow-[0_20px_50px_rgba(23,50,71,0.07)]"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.eyebrow}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-sand">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/68">{item.description}</p>
                  <Link
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Open reference
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-10">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
              Linkable Assets
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-sand sm:text-4xl">
              These are the strongest pages to cite when the topic needs more than a homepage link.
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {authorityLinkableAssets.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-navy/8 bg-white p-5"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.fit}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[#173247]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">{item.copy}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Use this page
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/70">
              Outreach Angles
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
              The page is built to support local backlinks, editorial mentions, and calmer Kerala travel stories.
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {authorityOutreachAngles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow="Partners FAQs"
          title="Questions partners and writers ask before linking or mentioning the business"
          intro="These answers keep the page honest about what can be verified directly today and which resources are safest to cite."
          faqs={[...authorityFaqs]}
        />
      </main>
    </>
  );
}
