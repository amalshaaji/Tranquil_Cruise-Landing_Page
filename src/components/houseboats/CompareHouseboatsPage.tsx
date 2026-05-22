import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import {
  houseboatComparisonItems,
  houseboatComparisonRows,
} from "@/lib/houseboat-compare-data";
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/whatsapp";

const compareFaqs = [
  {
    question: "Which houseboat is usually best for couples?",
    answer:
      "Most couples start with the single-bedroom houseboat because it feels more private and intimate. If you want extra lounge space or are travelling with children or another couple, the two-bedroom format is often the next step up.",
  },
  {
    question: "How should I compare pricing across houseboats?",
    answer:
      "The single-bedroom and two-bedroom layouts have clearer starting rates, while the three-bedroom and five-bedroom options are usually quoted based on group size, dates, route, and stay details. Larger boats are best compared by total fit, not just headline price.",
  },
  {
    question: "When does it make sense to choose a larger group houseboat?",
    answer:
      "Choose the three-bedroom or five-bedroom formats when privacy across multiple rooms matters, when your group wants to stay together on one boat, or when the trip is more about shared time than a compact overnight stay.",
  },
] as const;

export default function CompareHouseboatsPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#eef4f8_0%,#d9e4ec_100%)] text-foreground">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(23,50,71,0.95)_0%,rgba(45,84,110,0.92)_52%,rgba(230,240,246,0.96)_52.2%,rgba(244,249,252,0.98)_100%)] p-6 shadow-[0_24px_70px_rgba(23,50,71,0.14)] sm:rounded-[2.6rem] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="text-white">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#a8d8d7]">
                Compare Houseboats
              </p>
              <h1 className="mt-4 max-w-xl font-[var(--font-display)] text-[2.4rem] leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
                See every houseboat side by side before you decide.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/74 sm:text-base">
                Compare pricing guidance, guest fit, room count, shared space, and stay style
                across our single-bedroom, two-bedroom, three-bedroom, and five-bedroom
                houseboats.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition hover:bg-[#eef5f8]"
                >
                  Plan my stay
                </Link>
                <Link
                  href="/houseboats"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                >
                  View all houseboats
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-navy/10 bg-white/90 p-5 shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                  Best use
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
                  Compare by fit, not just boat size
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/68">
                  Some guests need intimacy, some need family comfort, and some need celebration
                  space. This page helps you compare the formats in practical terms.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-navy/10 bg-white/88 p-5 shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm sm:p-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                  Included here
                </div>
                <div className="mt-4 space-y-3">
                  {["Price guidance", "Feature comparison", "Guest capacity fit", "Direct links to each boat"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] bg-[linear-gradient(180deg,#f7fbfc_0%,#ebf3f7_100%)] px-4 py-3 text-sm font-medium text-foreground/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-[2rem] border border-navy/8 bg-white/92 shadow-[0_24px_60px_rgba(47,79,104,0.08)] backdrop-blur-sm">
          <div className="border-b border-navy/8 px-5 py-5 sm:px-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
              Side-by-Side View
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold tracking-tight text-navy sm:text-4xl">
              Compare price, features, and fit in one view
            </h2>
          </div>

          <div className="hidden overflow-x-auto lg:block">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-navy/8 bg-[linear-gradient(180deg,#f8fbfc_0%,#edf4f8_100%)]">
                  <th className="w-56 px-6 py-5 text-left text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                    Compare
                  </th>
                  {houseboatComparisonItems.map((boat) => (
                    <th key={boat.slug} className="min-w-[17rem] px-4 py-5 text-left">
                      <div className="relative h-40 overflow-hidden rounded-[1.4rem]">
                        <Image
                          src={boat.image}
                          alt={`${boat.title} private houseboat on the Alleppey backwaters`}
                          fill
                          sizes="25vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-4">
                        <div className="text-xl font-semibold text-navy">{boat.shortTitle}</div>
                        <div className="mt-1 text-sm text-foreground/62">{boat.bestFor}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {houseboatComparisonRows.map((row) => (
                  <tr key={row.key} className="border-b border-navy/6 last:border-b-0">
                    <th className="bg-[linear-gradient(180deg,#fbfdfe_0%,#f5fafc_100%)] px-6 py-5 text-left text-sm font-semibold text-sand">
                      {row.label}
                    </th>
                    {houseboatComparisonItems.map((boat) => (
                      <td key={`${boat.slug}-${row.key}`} className="px-4 py-5 align-top text-sm leading-7 text-foreground/72">
                        {boat[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="bg-[linear-gradient(180deg,#fbfdfe_0%,#f5fafc_100%)] px-6 py-5 text-left text-sm font-semibold text-sand">
                    Features
                  </th>
                  {houseboatComparisonItems.map((boat) => (
                    <td key={`${boat.slug}-features`} className="px-4 py-5 align-top">
                      <div className="flex flex-col gap-3">
                        {boat.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-[1.1rem] bg-[linear-gradient(180deg,#f7fbfc_0%,#ebf3f7_100%)] px-4 py-3 text-sm leading-6 text-foreground/72"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-5 p-5 lg:hidden sm:p-6">
            {houseboatComparisonItems.map((boat) => {
              const whatsappHref = buildWhatsAppHref(
                buildInquiryMessage({
                  experience: "houseboat",
                  option: boat.slug,
                  message: `Please share availability, pricing, and route options for the ${boat.title.toLowerCase()}.`,
                }),
              );

              return (
                <article
                  key={boat.slug}
                  className="overflow-hidden rounded-[1.8rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f3f8fb_100%)] shadow-[0_18px_40px_rgba(47,79,104,0.07)]"
                >
                  <div className="relative h-52">
                    <Image
                      src={boat.image}
                      alt={`${boat.title} private houseboat on the Alleppey backwaters`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/80">
                      {boat.priceLabel}
                    </div>
                    <h3 className="mt-3 text-[1.7rem] font-semibold tracking-tight text-navy">
                      {boat.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">{boat.standout}</p>

                    <div className="mt-5 grid gap-3">
                      {houseboatComparisonRows.map((row) => (
                        <div
                          key={`${boat.slug}-mobile-${row.key}`}
                          className="rounded-[1.2rem] border border-navy/6 bg-white/75 px-4 py-3"
                        >
                          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal/80">
                            {row.label}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-foreground/72">
                            {boat[row.key]}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {boat.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-navy/8 bg-white/80 px-3 py-2 text-[0.72rem] font-medium text-foreground/68"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={boat.href}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink"
                      >
                        View boat
                      </Link>
                      <Link
                        href={whatsappHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:bg-white"
                      >
                        Ask pricing
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#173247] p-6 text-white shadow-[0_24px_60px_rgba(10,24,34,0.18)] sm:p-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#9fd0e7]">
              How to choose
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-[2rem] leading-[0.98] tracking-[-0.03em] sm:text-4xl">
              Start with the kind of stay, then compare the boat size.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">
              If your trip is about privacy and quiet, start small. If it is about family comfort,
              look at the two-bedroom and three-bedroom layouts. If the trip is built around a
              reunion or celebration, the five-bedroom format usually makes the most sense.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Best value for couples",
                text: "Single-bedroom usually feels most intimate and easiest to book for romantic or compact overnight plans.",
              },
              {
                title: "Best family balance",
                text: "Two-bedroom is usually the simplest upgrade when you want more room without moving into a large-format boat.",
              },
              {
                title: "Best for group comfort",
                text: "Three-bedroom gives families and friend groups better privacy and a stronger shared overnight flow.",
              },
              {
                title: "Best for bigger occasions",
                text: "Five-bedroom works best when staying together on one boat matters more than keeping the layout compact.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-navy/8 bg-white/90 p-5 shadow-[0_18px_40px_rgba(47,79,104,0.07)] backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-sand">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#dce7ee_0%,#d4e0e8_100%)]">
        <FaqSection
          eyebrow="Compare Houseboats"
          title="Questions guests ask when comparing boats"
          intro="A few practical answers to help you compare layout, pricing, and fit before you enquire."
          faqs={[...compareFaqs]}
        />
      </section>
    </main>
  );
}
