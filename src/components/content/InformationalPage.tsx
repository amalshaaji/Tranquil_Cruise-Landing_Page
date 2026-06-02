import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import type { InformationalPageData } from "@/lib/informational-pages";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createSpeakableSchema,
} from "@/lib/seo";

export default function InformationalPage({
  page,
}: {
  page: InformationalPageData;
}) {
  const breadcrumbJsonLd = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: page.title, path: page.path },
  ]);

  const speakableJsonLd = createSpeakableSchema({
    path: page.path,
    name: page.title,
    description: page.description,
    cssSelectors: ["main h1", "main section h2"],
    pageType: "Article",
  });
  const articleJsonLd = createArticleSchema({
    headline: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    articleSection: page.eyebrow,
  });

  return (
    <>
      <JsonLd
        data={[breadcrumbJsonLd, speakableJsonLd, articleJsonLd, createFaqSchema(page.faqs)]}
      />

      <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
          <div className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(242,248,250,0.98)_100%)] p-6 shadow-[0_28px_80px_rgba(23,50,71,0.12)] sm:p-10 lg:p-12">
            <PageBreadcrumbs
              crumbs={[{ label: "Home", href: "/" }, { label: page.title }]}
            />
            <div className="mt-6 inline-flex rounded-full border border-[#cfe0e7] bg-[#edf5f8] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-teal">
              {page.eyebrow}
            </div>
            <h1 className="responsive-title-flow mt-5 text-[clamp(2.4rem,7vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
              {page.title}
            </h1>

            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-foreground/70 sm:text-base">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {page.ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "secondary"
                      ? "inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                      : "inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[#173247] p-6 text-white shadow-[0_22px_50px_rgba(23,50,71,0.14)] sm:rounded-[2.4rem] sm:p-8">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-200/80">
                Quick Takeaways
              </div>
              <ul className="mt-5 space-y-3">
                {page.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-3 text-sm leading-6 text-white/86"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {page.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.4rem] sm:p-8"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-foreground/68 sm:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow={page.faqEyebrow ?? `${page.title} FAQ`}
          title={page.faqTitle ?? `Questions people ask about ${page.title.toLowerCase()}`}
          intro={page.faqIntro ?? "These short answers are here to keep the page practical and easy to scan."}
          faqs={page.faqs}
        />
      </main>
    </>
  );
}
