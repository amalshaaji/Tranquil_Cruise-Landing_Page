import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import type { FaqItem } from "@/lib/seo";

type GuideImage = {
  src: string;
  alt: string;
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
  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <PageBreadcrumbs crumbs={breadcrumbs} />
            <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
              {eyebrow}
            </div>
            <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
              {intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#dff3ef]/70 via-[#eef7d7]/50 to-navy-100/15 blur-2xl opacity-70" />
            <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
              <ScrollableImageRow
                images={galleryImages}
                showFeaturedSpace={false}
                showIntroCopy={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {quickFacts.map((fact) => (
            <div
              key={fact}
              className="rounded-full border border-navy/10 bg-white/80 px-4 py-2 text-[0.72rem] font-medium text-foreground/60 shadow-sm backdrop-blur-sm sm:px-5 sm:text-xs"
            >
              {fact}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr,0.96fr]">
          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Overview
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              {overviewTitle}
            </h2>
            <div className="mt-8 grid gap-4">
              {overviewCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-navy/8 bg-[#f8fcfd] p-5"
                >
                  <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/66">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#edf6f4_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Planning Notes
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              {practicalTitle}
            </h2>
            <div className="mt-8 grid gap-3">
              {practicalItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-[#dce8df] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
              {practicalNote}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <div>
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                {featureEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {featureTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-lg">
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

      <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Related Paths
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
              {compareTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
              {compareIntro}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {compareCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_46px_rgba(23,50,71,0.08)]"
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

      <section className="px-4 py-12 sm:px-6 lg:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
              Keep Exploring
            </span>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
              {ctaTitle}
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
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
