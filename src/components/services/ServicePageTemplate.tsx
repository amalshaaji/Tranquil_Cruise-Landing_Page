"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ScrollableImageRow from "./ScrollableImageRow";
import ServiceGallery from "./ServiceGallery";
import FaqSection from "@/components/seo/FaqSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ExperienceComparisonSection from "@/components/seo/ExperienceComparisonSection";
import type { FaqItem } from "@/lib/seo";
import { services, type ServicePage } from "@/lib/services-data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const serviceFaqs: Record<string, FaqItem[]> = {
  houseboats: [
    {
      question: "How much does a private houseboat in Alleppey cost?",
      answer:
        "Houseboat pricing depends on the season, boat size, route, meal plan, and whether you want a day cruise or an overnight stay. Contact Tranquil Cruise for current private houseboat rates for your dates.",
    },
    {
      question: "What is included in a Tranquil Cruise houseboat stay?",
      answer:
        "A typical private houseboat stay includes the boat, crew, cruising time, bedroom access, meals or refreshments based on the plan, and help shaping the route around your group and timing.",
    },
    {
      question: "Which is better: houseboat or shikara ride?",
      answer:
        "A houseboat is better if you want more comfort, privacy, dining space, and time on the water. A shikara ride is better if you want a shorter, more intimate canal experience through narrower Alleppey routes.",
    },
    {
      question: "Is the houseboat suitable for families?",
      answer:
        "Yes. Families often choose the two-bedroom, three-bedroom, or five-bedroom houseboats because they offer more shared space, private rooms, and an easier pace for children and older guests.",
    },
    {
      question: "Where does the cruise start?",
      answer:
        "Houseboat departures are arranged in the Alappuzha area. Your exact starting point depends on the route, boat selection, and date, and we confirm those details during booking.",
    },
  ],
  "canoe-boats": [],
  kayaking: [
    {
      question: "Is kayaking in Alleppey safe for beginners?",
      answer:
        "Yes. Beginner-friendly kayaking routes are available, and we help match you with calmer backwater stretches and a suitable pace if you are new to paddling.",
    },
    {
      question: "What should I wear for backwater kayaking?",
      answer:
        "Wear light, quick-drying clothes, sun protection, and footwear that can handle water. Morning and sunset sessions are usually the most comfortable in Kerala's climate.",
    },
  ],
  rooms: [
    {
      question: "Are rooms near the Alleppey backwaters available?",
      answer:
        "Yes. Tranquil Cruise can help arrange backwater rooms and homestays in the Alappuzha area based on your travel dates, comfort preferences, and whether you want water-facing surroundings.",
    },
    {
      question: "Can I combine a room stay with a houseboat or shikara ride?",
      answer:
        "Yes. Many guests pair a room stay with a private houseboat cruise, a Shikara or Shikkara ride, or another backwater activity so the trip feels more balanced.",
    },
  ],
  spa: [
    {
      question: "What wellness or spa services are available?",
      answer:
        "Spa and wellness options can include Ayurvedic massages, restorative treatments, and slower wellness-focused sessions shaped around your stay and timing.",
    },
    {
      question: "Can spa services be combined with a backwater stay?",
      answer:
        "Yes. Spa sessions can be paired with a room stay, a houseboat plan, or a slower Kerala backwater itinerary for guests who want both rest and sightseeing.",
    },
  ],
};

function descriptiveGalleryAlt(service: ServicePage, index: number) {
  const labels: Record<string, string[]> = {
    houseboats: [
      "Luxury houseboat cruising through the Alleppey backwaters",
      "Private Kerala houseboat stay in Alappuzha",
      "Backwater houseboat deck and canal views in Alleppey",
    ],
    "canoe-boats": [
      "Country boat ride through a village canal in Alleppey",
      "Open country boat on the Kerala backwaters",
    ],
    kayaking: [
      "Guided kayaking trail in the Alleppey backwaters",
      "Kayaking through quiet Alappuzha canals",
      "Kerala backwater kayak route near village waterways",
      "Sunset kayaking in Alleppey",
    ],
    rooms: ["Backwater room and homestay setting in Alappuzha"],
    spa: [
      "Ayurvedic spa room near the Kerala backwaters",
      "Wellness space for spa treatments in Alappuzha",
      "Backwater wellness retreat setting in Kerala",
      "Relaxing spa area near Alleppey waterways",
    ],
  };

  return labels[service.slug]?.[index] ?? `${service.title} in Alleppey, Kerala`;
}

export default function ServicePageTemplate({
  service,
}: {
  service: ServicePage;
}) {
  const hasGallery = service.gallery.length > 0;
  const showCloserLookGallery =
    hasGallery &&
    service.slug !== "spa" &&
    service.slug !== "houseboats" &&
    service.slug !== "canoe-boats";
  const galleryImages = service.gallery.map((src, index) => ({
    src,
    alt: descriptiveGalleryAlt(service, index),
  }));
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const faqs = serviceFaqs[service.slug] ?? [];
  const titleBySlug: Record<string, string> = {
    houseboats: "Luxury Houseboats in Alleppey",
    kayaking: "Backwater Kayaking in Alleppey",
    rooms: "Backwater Rooms & Homestays in Alleppey",
    spa: "Ayurvedic Spa & Wellness in Alleppey Backwaters",
    "canoe-boats": "Country Boat Rides in Alleppey",
  };

  const featuredHighlights = service.highlights.slice(0, 3);
  const supportingHighlights = service.highlights.slice(3);
  const quickFacts = service.facilities.slice(0, 4);
  const isHouseboatsPage = service.slug === "houseboats";
  const optionsGridClass = isHouseboatsPage
    ? "grid gap-6 md:grid-cols-2"
    : "grid gap-10 lg:grid-cols-2";

  return (
    <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:pt-44">
        <div
          className={`grid items-start gap-8 sm:gap-12 lg:gap-16 ${
            isHouseboatsPage ? "lg:grid-cols-1" : "lg:grid-cols-12"
          }`}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={isHouseboatsPage ? "max-w-4xl" : "lg:col-span-8"}
          >
            <PageBreadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: service.slug === "canoe-boats" ? "Country Boats" : service.title },
              ]}
            />
            <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
              {service.eyebrow}
            </div>
            <h1 className="mb-5 text-[clamp(2.45rem,11vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-sand sm:mb-6">
              {titleBySlug[service.slug] ?? service.title}
              <span className="hidden sm:inline"> <br /></span>
              <span
                className={`font-[var(--font-luxe)] text-[1.08em] italic tracking-[-0.02em] ${
                  service.slug === "spa" ? "text-[#6b7f73]" : "text-[#5f6f83]"
                }`}
              >
                {" "}
                {service.subtitle.toLowerCase()}.
              </span>
            </h1>
            <div className="mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/60 sm:mb-10 sm:text-lg">
              {service.description.map((paragraph, index) => (
                <p
                  key={`${service.slug}-description-${index}`}
                  className={index === 0 ? "text-foreground/72" : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {!isHouseboatsPage && (
              <>
                {hasGallery ? (
                  <div className="group relative">
                    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
                    <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
                      <ScrollableImageRow images={galleryImages} />
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 lg:justify-start">
                  <Link
                    href={service.ctaHref}
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#173247] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-2xl active:scale-95 sm:w-auto sm:px-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="relative z-10 rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] tracking-widest text-white/80 backdrop-blur-md">
                      CURATED
                    </span>
                    <span className="relative z-10">{service.ctaText}</span>
                    <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </>
            )}
          </motion.div>

          {!isHouseboatsPage && (
            <motion.aside
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="lg:col-span-4 lg:sticky lg:top-36"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-navy/5 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-6 shadow-[0_30px_60px_-15px_rgba(23,50,71,0.1)] sm:rounded-[2.5rem] sm:p-8">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal/70">
                  Starting Point
                </div>
                <div className="rounded-[1.6rem] border border-navy/8 bg-white/90 p-5 shadow-sm">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    Booking Guidance
                  </div>
                  <div className="mt-3 text-2xl font-bold tracking-tight text-sand sm:text-3xl">
                    {service.priceLabel}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-teal-100 bg-teal-50/60 p-5">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal-700/80">
                    Booking Note
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/72">
                    {service.priceLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {service.priceNote}
                  </p>
                </div>

                <div className="mt-6 border-t border-navy/5 pt-6">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-widest text-foreground/40">
                    Quick Notes
                  </div>
                  <div className="mt-4 space-y-3">
                    {quickFacts.map((fact) => (
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
            </motion.aside>
          )}
        </div>

        {!isHouseboatsPage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 lg:justify-start"
          >
            {service.facilities.map((facility) => (
              <div
                key={facility}
                className="cursor-default rounded-full border border-navy/10 bg-white/80 px-5 py-2 text-xs font-medium text-foreground/60 shadow-sm backdrop-blur-sm transition-all hover:border-teal-400 hover:text-teal-700"
              >
                {facility}
              </div>
            ))}
          </motion.div>
        )}
      </section>

      {service.options && service.options.length > 0 && (
        <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 text-center sm:mb-14"
            >
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Curated Selection
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Choose your version of the experience
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={optionsGridClass}
            >
              {service.options.map((option) => {
                const featuredLabel = isHouseboatsPage ? option.details[0] : null;
                const visibleDetails = isHouseboatsPage
                  ? option.details.slice(1, 3)
                  : option.details.slice(0, 2);

                return (
                  <motion.div
                    key={option.title}
                    variants={fadeInUp}
                    className={`group relative overflow-hidden rounded-[2.5rem] border border-navy/10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_28px_68px_rgba(23,50,71,0.18)] ${
                      isHouseboatsPage
                        ? "min-h-[24rem] sm:min-h-0 sm:aspect-[6/5] lg:h-[430px] lg:aspect-auto"
                        : "min-h-[28rem] sm:min-h-0 sm:aspect-[5/4] lg:h-[600px] lg:aspect-auto"
                    }`}
                  >
                    {option.image ? (
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 600px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,#dcecf1_0%,#b9d8df_100%)]" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#173247] via-[#173247]/46 to-[#173247]/10 opacity-92 transition-opacity duration-500 group-hover:opacity-96" />

                    <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-5 sm:p-8 lg:p-10">
                      {featuredLabel ? (
                        <div className="mb-3">
                          <span className="inline-flex rounded-full border border-white/35 bg-white/18 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                            {featuredLabel}
                          </span>
                        </div>
                      ) : null}
                      <h3 className={`max-w-[12ch] font-semibold tracking-tight text-white ${
                        isHouseboatsPage ? "text-[1.22rem] leading-[1.06] sm:text-[1.85rem]" : "text-[1.8rem] sm:text-4xl"
                      }`}>
                        {option.title}
                      </h3>
                      <div className={`mt-4 flex flex-wrap gap-2.5 sm:gap-3 ${
                        isHouseboatsPage ? "mb-5" : "mb-6 sm:mb-8"
                      }`}>
                        {visibleDetails.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[0.68rem] font-medium leading-tight text-white backdrop-blur-md sm:text-xs"
                          >
                            <div className="h-1 w-1 rounded-full bg-teal-300" />
                            {detail}
                          </div>
                        ))}
                      </div>

                      {option.href && (
                        <Link
                          href={option.href}
                          className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-center text-[0.82rem] font-bold text-[#173247] shadow-2xl transition-all duration-300 hover:bg-sand hover:text-white sm:w-full sm:px-8 sm:py-4 sm:text-sm lg:w-auto"
                        >
                          <span className={`uppercase ${isHouseboatsPage ? "tracking-[0.08em] sm:tracking-wider" : "tracking-wider"}`}>
                            {option.ctaLabel ?? "Reserve now"}
                          </span>
                          <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
                            →
                          </span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 rounded-[2rem] border border-navy/5 bg-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              The Appeal
            </div>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-sand sm:mb-10 sm:text-4xl">
              Why guests choose {service.title.toLowerCase()}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-navy/5 bg-[#fbfbfc] p-5 transition-all hover:border-teal-200 hover:bg-white hover:shadow-lg sm:flex-row sm:gap-5 sm:p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-center text-xs font-bold text-white transition-colors group-hover:bg-teal-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-sand">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-[2rem] border border-navy/5 bg-gradient-to-b from-[#eef5f8] to-white p-6 shadow-sm sm:rounded-[3rem] sm:p-12"
          >
            <div className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Included
            </div>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-sand sm:mb-8">
              Planning cues
            </h2>
            <div className="flex flex-col gap-4">
              {service.facilities.slice(0, 6).map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/70 px-4 py-4 text-sm font-medium text-foreground/70 backdrop-blur-md transition-all hover:translate-x-2 hover:shadow-md sm:gap-4 sm:px-5"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  {facility}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {supportingHighlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {supportingHighlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={fadeInUp}
                className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)]"
              >
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                  Signature Detail
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-sand">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {showCloserLookGallery && (
        <ServiceGallery images={service.gallery} />
      )}

      <ExperienceComparisonSection />

      {faqs.length > 0 ? (
        <FaqSection
          title={`FAQs about ${titleBySlug[service.slug] ?? service.title}`}
          intro="These answers reflect the visible planning details on this page."
          faqs={faqs}
        />
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-10">
          <span className="block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
            Related Experiences
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
            Explore related Alleppey backwater options
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <article
                key={item.slug}
                className="rounded-[1.6rem] border border-white bg-white p-5"
              >
                <h3 className="text-xl font-semibold text-sand">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  {item.description[0]}
                </p>
                <Link
                  href={`/${item.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-teal hover:text-navy"
                >
                  View {item.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]"
        >
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
              Ready to Experience
            </span>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
              Start planning your{" "}
              <span className="text-teal/80">
                {service.title.toLowerCase()}
              </span>{" "}
              journey
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Share your dates, group size, and preferences. We&apos;ll shape
              the perfect backwater experience around your pace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={service.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sand hover:text-white"
              >
                {service.ctaText}
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore All Experiences
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
