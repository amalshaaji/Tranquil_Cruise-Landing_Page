import Link from "next/link";
import {
  ComparisonTable,
  QuestionAnswerList,
} from "@/components/seo/AiAnswerSections";
import FaqSection from "@/components/seo/FaqSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import GalleryPreviewHero from "@/components/shared/GalleryPreviewHero";
import type { FaqItem } from "@/lib/seo";

type GuideImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  containerClassName?: string;
  aspectRatio?: string;
};

type GuideCard = {
  title: string;
  text: string;
};

type GuideLinkCard = {
  title: string;
  href: string;
  fit: string;
  copy: string;
};

type GuideAttractionRow = {
  attraction: string;
  vibe: string;
  bestFor: string;
  typicalCost: string;
};

export type BackwaterGuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
  galleryImages: GuideImage[];
  quickFacts: readonly string[];
  overviewTitle: string;
  overviewCards: GuideCard[];
  practicalTitle: string;
  practicalItems: readonly string[];
  practicalNote: string;
  featureEyebrow: string;
  featureTitle: string;
  featureIntro: string;
  featureCards: GuideCard[];
  attractionTableTitle?: string;
  attractionTableIntro?: string;
  attractionRows?: GuideAttractionRow[];
  compareTitle: string;
  compareIntro: string;
  compareCards: GuideLinkCard[];
  faqEyebrow: string;
  faqTitle: string;
  faqIntro: string;
  faqs: FaqItem[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  ctaTitle: string;
  ctaText: string;
};

export default function BackwaterGuidePage({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  galleryImages,
  quickFacts,
  overviewTitle,
  overviewCards,
  practicalTitle,
  practicalItems,
  practicalNote,
  featureEyebrow,
  featureTitle,
  featureIntro,
  featureCards,
  attractionTableTitle,
  attractionTableIntro,
  attractionRows = [],
  compareTitle,
  compareIntro,
  compareCards,
  faqEyebrow,
  faqTitle,
  faqIntro,
  faqs,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  ctaTitle,
  ctaText,
}: BackwaterGuidePageProps) {
  const comparisonRows = compareCards.map((item) => ({
    label: item.title,
    bestFor: item.fit,
    details: item.copy,
  }));
  const quickQuestions = faqs.slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-28">
        <GalleryPreviewHero
          galleryImages={galleryImages}
          breadcrumbs={<PageBreadcrumbs crumbs={breadcrumbs} />}
          eyebrow={eyebrow}
          title={title}
          description={<p>{intro}</p>}
          actions={[
            { href: primaryCtaHref, label: primaryCtaLabel },
            { href: secondaryCtaHref, label: secondaryCtaLabel, variant: "secondary" },
          ]}
          bottomTags={
            <ul className="flex flex-wrap gap-3">
              {quickFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-navy/10 bg-white/80 px-4 py-2 text-[0.72rem] font-medium text-foreground/60 shadow-sm backdrop-blur-sm sm:px-5 sm:text-xs"
                >
                  {fact}
                </li>
              ))}
            </ul>
          }
        />
      </section>

      <QuestionAnswerList
        title="Fast answers before you read the full guide."
        intro="These short answer blocks are placed near the top so you can get the main takeaway quickly before moving deeper into planning details."
        items={quickQuestions}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,0.96fr]">
          <div className="rounded-[1.8rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Overview
            </div>
            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-sand sm:text-4xl">
              {overviewTitle}
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8">
              {overviewCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.3rem] border border-navy/8 bg-[#f8fcfd] p-4 sm:rounded-[1.5rem] sm:p-5"
                >
                  <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/66">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-navy/8 bg-[linear-gradient(180deg,#edf6f4_0%,#ffffff_100%)] p-5 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Planning Notes
            </div>
            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-sand sm:text-4xl">
              {practicalTitle}
            </h2>
            <ul className="mt-6 grid gap-3 sm:mt-8">
              {practicalItems.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.35rem] border border-[#dce8df] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-[1.4rem] border border-gold/25 bg-[#edf5f8] p-4 text-sm leading-7 text-foreground/72 sm:mt-6 sm:rounded-[1.6rem] sm:p-5">
              {practicalNote}
            </div>
          </div>
        </div>
      </section>

      {comparisonRows.length > 0 ? (
        <ComparisonTable
          title={compareTitle}
          intro={compareIntro}
          rows={comparisonRows}
        />
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
        <div className="rounded-[1.9rem] border border-navy/8 bg-[#173247] px-5 py-6 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:rounded-[2.2rem] sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <div>
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                {featureEyebrow}
              </div>
              <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight sm:text-4xl">
                {featureTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/74 sm:mt-5 sm:text-lg">
                {featureIntro}
              </p>
            </div>
            <div className="grid gap-4">
              {featureCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {attractionRows.length > 0 && attractionTableTitle && attractionTableIntro ? (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-navy/8 bg-white shadow-[0_18px_40px_rgba(23,50,71,0.05)]">
            <div className="border-b border-navy/8 bg-[linear-gradient(180deg,#f8fbfc_0%,#ffffff_100%)] px-5 py-6 sm:px-8 sm:py-8">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Attraction Snapshot
              </div>
              <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-sand sm:text-4xl">
                {attractionTableTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/66 sm:mt-4 sm:text-base">
                {attractionTableIntro}
              </p>
            </div>

            <div className="grid gap-3 p-4 sm:hidden">
              {attractionRows.map((row, index) => (
                <article
                  key={`${row.attraction}-mobile-${index}`}
                  className="rounded-[1.35rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbfd_100%)] p-4 shadow-[0_10px_24px_rgba(23,50,71,0.05)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173247] text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-teal/75">
                        Attraction
                      </div>
                      <h3 className="mt-1 text-lg font-semibold leading-tight text-[#173247]">
                        {row.attraction}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 border-l-2 border-[#d7e7ee] pl-4">
                    <div>
                      <div className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-teal/75">
                        Vibe
                      </div>
                      <p className="mt-1 text-sm leading-6 text-foreground/68">
                        {row.vibe}
                      </p>
                    </div>

                    <div>
                      <div className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-teal/75">
                        Best For
                      </div>
                      <p className="mt-1 text-sm leading-6 text-foreground/68">
                        {row.bestFor}
                      </p>
                    </div>

                    <div>
                      <div className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-teal/75">
                        Typical Cost
                      </div>
                      <p className="mt-1 text-sm leading-6 text-foreground/68">
                        {row.typicalCost}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden overflow-x-auto sm:block">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#f4f8fa] text-left">
                    <th className="px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                      Attraction
                    </th>
                    <th className="px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                      Vibe
                    </th>
                    <th className="px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                      Best For
                    </th>
                    <th className="px-4 py-4 text-xs font-bold uppercase tracking-[0.22em] text-teal/75 sm:px-8">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attractionRows.map((row, index) => (
                    <tr
                      key={`${row.attraction}-${index}`}
                      className="border-t border-navy/8 align-top"
                    >
                      <td className="px-4 py-5 text-sm font-semibold text-[#173247] sm:px-8 sm:text-base">
                        {row.attraction}
                      </td>
                      <td className="px-4 py-5 text-sm leading-7 text-foreground/68 sm:px-8">
                        {row.vibe}
                      </td>
                      <td className="px-4 py-5 text-sm leading-7 text-foreground/68 sm:px-8">
                        {row.bestFor}
                      </td>
                      <td className="px-4 py-5 text-sm leading-7 text-foreground/68 sm:px-8">
                        {row.typicalCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f4f8fa] px-4 py-10 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-14">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Related Paths
            </div>
            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight text-sand sm:text-5xl">
              {compareTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-foreground/66 sm:mt-4 sm:text-base">
              {compareIntro}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {compareCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-navy/10 bg-white p-5 shadow-[0_20px_46px_rgba(23,50,71,0.08)] sm:rounded-[2rem] sm:p-6"
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                  {item.fit}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-sand">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-foreground/66">
                  {item.copy}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                >
                  Explore this page
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow={faqEyebrow}
        title={faqTitle}
        intro={faqIntro}
        faqs={faqs}
      />

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.8rem] bg-[#173247] px-5 py-10 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)] sm:rounded-[2rem] sm:px-8 sm:py-16">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
              Keep Exploring
            </span>
            <h2 className="mb-6 text-[1.9rem] font-semibold tracking-tight sm:mb-8 sm:text-5xl">
              {ctaTitle}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/72 sm:mb-12 sm:text-base">
              {ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition hover:bg-sand hover:text-white"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
