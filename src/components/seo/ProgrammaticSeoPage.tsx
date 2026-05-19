import Link from "next/link";
import {
  ComparisonTable,
  QuestionAnswerList,
} from "@/components/seo/AiAnswerSections";
import FaqSection from "@/components/seo/FaqSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import type { ProgrammaticSeoPage as ProgrammaticSeoPageData } from "@/lib/programmatic-seo-pages";

export default function ProgrammaticSeoPage({
  page,
}: {
  page: ProgrammaticSeoPageData;
}) {
  const comparisonRows = page.routeFit.map((item, index) => ({
    label: item.title,
    bestFor: page.quickFacts[index] ?? page.touristTypes.join(", "),
    details: item.description,
  }));
  const quickQuestions = page.faqs.slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
        <div className="grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
          <div>
            <PageBreadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Houseboats", href: "/houseboats" },
                { label: page.title },
              ]}
            />
            <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
              {page.eyebrow}
            </div>
            <h1 className="text-[clamp(2.35rem,9vw,4.9rem)] font-semibold leading-[1.02] tracking-tight text-sand">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/72 sm:text-lg">
              {page.intro.directAnswer}
            </p>

            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-foreground/64 sm:text-base">
              {page.intro.supporting.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
              >
                Check availability
              </Link>
              <Link
                href="/houseboats"
                className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
              >
                Compare houseboats
              </Link>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
            <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
              <ScrollableImageRow
                images={page.gallery}
                showFeaturedSpace={false}
                showIntroCopy={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,0.95fr]">
          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Direct Takeaways
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              What matters most when someone searches this route.
            </h2>
            <div className="mt-8 grid gap-4">
              {page.whyThisPageWins.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-navy/8 bg-white p-5"
                >
                  <h3 className="text-xl font-semibold text-[#173247]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-navy/8 bg-[#173247] p-6 text-white shadow-[0_22px_50px_rgba(23,50,71,0.14)] sm:rounded-[2.6rem] sm:p-8">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-200/80">
              Quick Notes
            </div>
            <ul className="mt-5 space-y-3">
              {page.quickFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-3 text-sm leading-6 text-white/86"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <ComparisonTable
        title="Compare the main versions of this booking intent."
        intro="This table keeps the page easy to scan for answer engines and for guests who want the fastest route to the right fit."
        rows={comparisonRows}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:p-8">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Best Fit
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand">
              When this page intent matches the trip.
            </h2>
            <div className="mt-6 grid gap-4">
              {page.routeFit.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-navy/8 bg-[#f7fbfc] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#173247]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#f8fbfc_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:p-8">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Booking Pointers
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand">
              Questions worth answering before you book.
            </h2>
            <div className="mt-6 space-y-3">
              {page.bookingPointers.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-navy/8 bg-white px-5 py-4 text-sm leading-7 text-foreground/68"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuestionAnswerList
        title="Short answers before the full accordion FAQ."
        intro="These quick answers keep the main booking questions visible in a simple question-and-answer format."
        items={quickQuestions}
      />

      <FaqSection
        eyebrow="Programmatic SEO FAQ"
        title="Questions that come up before this booking decision gets made"
        intro="Each answer is written for the specific route intent on this page so the content stays useful, not generic."
        faqs={page.faqs}
      />

      <InternalLinksSection graph={page.internalLinks} />
    </main>
  );
}
