import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/seo/FaqSection";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import ScrollableImageRow from "@/components/services/ScrollableImageRow";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createImageObjectSchema,
  createServiceSchema,
  createTouristTripSchema,
  generatePageMetadata,
} from "@/lib/seo";

const luxuryFaqs = [
  {
    question: "What makes a luxury houseboat in Alleppey different from a standard stay?",
    answer:
      "Luxury houseboats usually focus more on bedroom comfort, private space, curated food service, calmer route planning, and a more polished deck-and-lounge experience from the start.",
  },
  {
    question: "Which luxury houseboat is best for families or private groups?",
    answer:
      "Two-bedroom and three-bedroom layouts are often the easiest fit for families, while larger private groups and celebration stays usually compare the three-bedroom and five-bedroom options first.",
  },
  {
    question: "Can I book a premium houseboat in Kerala for an overnight cruise?",
    answer:
      "Yes. Most guests looking for a premium houseboat experience in Kerala choose an overnight route because it gives them more time for dinner service, slower evening cruising, and a quieter morning on the water.",
  },
  {
    question: "Do luxury houseboats in Alappuzha include custom route planning?",
    answer:
      "Yes. Route planning is usually shaped around your timing, group size, preferred mix of village canals and open water, and whether you want a sunrise, sunset, or overnight rhythm.",
  },
];

const galleryImages = [
  {
    src: "/images/houseboats-card-blue.jpg",
    alt: "Luxury houseboat exterior in Alleppey",
  },
  {
    src: "/images/two-bedroom-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_01.jpeg",
    alt: "Premium family houseboat interior in Alleppey",
  },
  {
    src: "/images/three-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_13_06.jpeg",
    alt: "Luxury three bedroom houseboat stay in Kerala",
  },
  {
    src: "/images/five-bedroom-gallery/WhatsApp_Image_2026-05-14_at_18_04_14.jpeg",
    alt: "Premium five bedroom celebration houseboat in Alappuzha",
  },
];

const luxuryReasons = [
  {
    title: "More private space",
    text: "Luxury guests usually want more breathing room between the bedroom, lounge, dining area, and the open deck.",
  },
  {
    title: "Better route pacing",
    text: "Premium stays feel stronger when the route is shaped around quieter hours, softer light, and less rushed cruising.",
  },
  {
    title: "Hospitality details",
    text: "Meals, service timing, family comfort, and the flow of the stay matter as much as the boat itself.",
  },
];

const luxuryFormats = [
  {
    title: "2 Bedroom Luxury Houseboat",
    href: "/houseboats/2-bedroom",
    fit: "Families and smaller private groups",
    copy: "A balanced premium format for guests who want separate rooms, easier family pacing, and more shared comfort than a compact stay.",
  },
  {
    title: "3 Bedroom Luxury Houseboat",
    href: "/houseboats/3-bedroom",
    fit: "Extended families and private groups",
    copy: "A stronger fit when you want extra bedrooms, a more social lounge layout, and room for a longer overnight rhythm.",
  },
  {
    title: "5 Bedroom Luxury Houseboat",
    href: "/houseboats/5-bedroom",
    fit: "Celebrations and larger group stays",
    copy: "Ideal for reunions, milestone trips, and premium group travel that needs bigger common areas and a more expansive deck feel.",
  },
];

const routeStyles = [
  "Village canal cruising for a slower, more intimate feel",
  "Open-water Alleppey stretches for wide views and iconic houseboat atmosphere",
  "Overnight plans that hold space for dinner service and relaxed evening light",
  "Custom mixes of quieter canals and broader lake sections based on your group",
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Luxury Houseboat Alleppey | Premium Houseboat Kerala",
    description:
      "Explore luxury houseboats in Alleppey with premium Kerala backwater stays, curated overnight cruises, private family layouts, and polished service in Alappuzha.",
    path: "/luxury-houseboat-alappuzha",
    keywords: [
      "luxury houseboat alleppey",
      "premium houseboat kerala",
      "luxury houseboat alappuzha",
      "private premium houseboat Kerala backwaters",
    ],
    image: {
      url: "/images/houseboats-card-blue.jpg",
      width: 1200,
      height: 630,
      alt: "Private luxury houseboat cruise in the Alleppey backwaters",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  { name: "Luxury Houseboat Alleppey", path: "/luxury-houseboat-alappuzha" },
]);

const faqJsonLd = createFaqSchema(luxuryFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/houseboats-card-blue.jpg",
  alt: "Private luxury houseboat cruise in the Alleppey backwaters",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Luxury Houseboat Alleppey",
  description:
    "Premium private houseboats in Alleppey with curated overnight routes, family-friendly layouts, and polished Kerala backwater hospitality.",
  path: "/luxury-houseboat-alappuzha",
  serviceType: "Luxury houseboat stay",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Luxury Houseboat Experience in Alleppey",
  description:
    "A premium Kerala backwater experience in Alleppey designed around private cruising, overnight comfort, family layouts, and slower curated routes.",
  path: "/luxury-houseboat-alappuzha",
  image: {
    path: "/images/houseboats-card-blue.jpg",
    alt: "Private luxury houseboat cruise in the Alleppey backwaters",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Luxury travelers", "Families", "Private groups"],
  keywords: ["luxury houseboat alleppey", "premium houseboat kerala"],
});

export default function LuxuryHouseboatAlappuzhaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd,
          faqJsonLd,
          imageJsonLd,
          serviceJsonLd,
          touristTripJsonLd,
        ]}
      />

      <main className="overflow-x-hidden bg-white pb-24 font-sans antialiased sm:pb-32">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-44">
          <div className="grid gap-10 lg:grid-cols-[0.88fr,1.12fr] lg:items-start">
            <div>
              <PageBreadcrumbs
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: "Houseboats", href: "/houseboats" },
                  { label: "Luxury Houseboat Alleppey" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Premium Backwater Stay
              </div>
              <h1 className="text-[clamp(2.4rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Luxury houseboats in Alleppey for guests who want more than a standard cruise.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for travelers comparing a truly premium Kerala
                backwater stay, not just any boat on the water. If you want
                private space, better route pacing, a polished overnight feel,
                and layouts that suit families or curated group stays, start
                here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Enquire about a luxury houseboat
                </Link>
                <Link
                  href="/houseboats"
                  className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                >
                  Compare all houseboats
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-teal-100/40 to-navy-100/20 blur-2xl opacity-60" />
              <div className="relative rounded-[2rem] border border-navy/10 bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem]">
                <ScrollableImageRow
                  images={galleryImages}
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
                Why Luxury
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Premium houseboats feel different because the stay is planned differently.
              </h2>
              <div className="mt-8 grid gap-4">
                {luxuryReasons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-navy/8 bg-[#f7fbfd] p-5"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#eef5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Premium Route Style
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Luxury guests usually care about route mood as much as the boat.
              </h2>
              <div className="mt-8 grid gap-3">
                {routeStyles.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white bg-white/92 px-4 py-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                    <p className="text-sm leading-7 text-foreground/68">{item}</p>
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
                Luxury Formats
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Choose the premium houseboat layout that fits your trip
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
                The most useful comparison is not “best boat” in the abstract.
                It is the luxury layout that best fits your guest count,
                privacy needs, and the pace you want from the backwaters.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {luxuryFormats.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_46px_rgba(23,50,71,0.08)]"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.fit}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-sand">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.copy}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Explore this luxury format
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Internal Planning Path
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              Keep comparing before you book
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
              If this premium page matches your intent, the next best step is to
              compare the main <Link href="/houseboats" className="font-semibold text-teal hover:text-navy">houseboats hub</Link> with the
              specific <Link href="/houseboats/2-bedroom" className="font-semibold text-teal hover:text-navy">2-bedroom</Link>,{" "}
              <Link href="/houseboats/3-bedroom" className="font-semibold text-teal hover:text-navy">3-bedroom</Link>, and{" "}
              <Link href="/houseboats/5-bedroom" className="font-semibold text-teal hover:text-navy">5-bedroom</Link> pages so you can align
              luxury expectations with your actual group size.
            </p>
          </div>
        </section>

        <FaqSection
          eyebrow="Luxury Houseboat FAQs"
          title="Questions guests ask before booking a premium houseboat in Kerala"
          intro="These answers focus on luxury houseboat intent in Alleppey and Alappuzha."
          faqs={luxuryFaqs}
        />

        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                Ready To Plan
              </span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start planning your premium Alleppey houseboat stay
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                Share your dates, guest count, and whether you want a family
                luxury stay, a private couple plan, or a larger group houseboat.
                We will help shape the right premium route and layout.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy shadow-lg transition hover:bg-sand hover:text-white"
                >
                  Enquire now
                </Link>
                <Link
                  href="/houseboats"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View all houseboats
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
