import Link from "next/link";
import {
  ComparisonTable,
  QuestionAnswerList,
} from "@/components/seo/AiAnswerSections";
import FaqSection from "@/components/seo/FaqSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
import type { SeoKnowledgePageData } from "@/lib/seo-knowledge";

export default function SeoKnowledgePage({
  page,
}: {
  page: SeoKnowledgePageData;
}) {
  const ctas = page.ctas ?? [
    { label: "Plan your trip", href: "/contact" },
    { label: "Message on WhatsApp", href: "/contact", variant: "secondary" as const },
  ];
  const quickAnswers = page.answerFirstItems ?? page.faqs.slice(0, 4);
  const comparisonTitle =
    page.kind === "landing"
      ? "Compare the main ways travelers approach this Alleppey trip."
      : "Compare the main trip choices this guide helps you make.";

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
        <GalleryPreviewHero
          galleryImages={page.gallery}
          breadcrumbs={
            <PageBreadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: page.title },
              ]}
            />
          }
          eyebrow={page.eyebrow}
          title={page.title}
          description={
            <>
              <p className="text-foreground/76">{page.directAnswer}</p>
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          }
          actions={ctas}
          aside={
            <div className="rounded-[2rem] border border-navy/8 bg-white/92 p-6 shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-7">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                Quick answer
              </div>
              <div className="mt-4 rounded-[1.4rem] border border-navy/8 bg-[#f8fbfc] p-4">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                  Why this page matters
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/68">
                  {page.description}
                </p>
              </div>
              <div className="mt-6 border-t border-navy/5 pt-6">
                <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-foreground/40">
                  Snapshot
                </div>
                <div className="mt-4 space-y-3">
                  {page.quickFacts.map((fact) => (
                    <div
                      key={fact}
                      className="flex items-start gap-3 rounded-2xl border border-navy/6 bg-white px-4 py-3 text-sm font-medium text-foreground/68 shadow-sm"
                    >
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </section>

      <QuestionAnswerList
        eyebrow="Answer First"
        title="Fast answers for travelers and answer engines."
        intro="These concise answers come first so the page is useful both for quick human decisions and for AI systems trying to summarize the topic accurately."
        items={quickAnswers}
      />

      {page.comparisonRows?.length ? (
        <ComparisonTable
          title={comparisonTitle}
          intro="Use this quick comparison to decide which route, timing, or experience type fits your trip before you get into the fuller planning detail below."
          rows={page.comparisonRows}
        />
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="mb-8 max-w-4xl">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
            Detailed Guide
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            Practical local guidance for planning the right Kerala backwater experience.
          </h2>
        </div>
        <div className="grid gap-6">
          {page.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.4rem] sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/74">{section.answer}</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/68 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[1.2rem] border border-navy/8 bg-white px-4 py-3 text-sm leading-6 text-foreground/66"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="rounded-[2rem] border border-navy/8 bg-[#173247] p-6 text-white shadow-[0_22px_50px_rgba(23,50,71,0.14)] sm:rounded-[2.6rem] sm:p-10">
          <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-200/80">
            Ready To Book
          </div>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Use the guide, then take the next step that fits your trip.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
            If you already know your dates, send the guest count and the experience style you want.
            If you are still comparing, open one of the related pages below and keep narrowing the
            plan without losing the local context.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <Link
                key={cta.href + cta.label}
                href={cta.href}
                className={
                  cta.variant === "secondary"
                    ? "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
                    : "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#173247] transition hover:bg-[#f0f8fb]"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow={page.kind === "landing" ? "Service FAQ" : "Guide FAQ"}
        title={
          page.kind === "landing"
            ? "Questions travelers ask before booking this experience"
            : "Questions travelers ask when planning this Alleppey guide topic"
        }
        intro="These answers are written to be concise first and detailed second so they work well for both readers and AI-powered search experiences."
        faqs={page.faqs}
      />

      <InternalLinksSection graph={page.internalLinks} />
    </main>
  );
}
