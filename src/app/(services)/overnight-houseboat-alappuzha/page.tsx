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

const overnightFaqs = [
  {
    question: "What is included in an overnight houseboat stay in Alappuzha?",
    answer:
      "An overnight stay usually includes private houseboat access, cruising time, bedroom use, dinner and breakfast planning, and time on deck after the daytime cruise rhythm has slowed down.",
  },
  {
    question: "Do overnight houseboats in Alleppey have private rooms and attached bathrooms?",
    answer:
      "Yes. The exact layout depends on the boat you choose, but overnight houseboats are usually planned around private bedrooms, attached washrooms, and enough shared lounge space for the group size.",
  },
  {
    question: "How do AC timings usually work on an overnight houseboat?",
    answer:
      "AC timings vary by boat and package, so it is best to confirm the exact schedule during booking. Most guests specifically ask about nighttime air-conditioning because that is the part of the stay that matters most for sleeping comfort.",
  },
  {
    question: "Is an overnight houseboat better than a day cruise in Alappuzha?",
    answer:
      "An overnight stay is better if you want dinner on board, more room access, evening calm, and a slower morning on the water. A day cruise is better if you want the houseboat experience within one daytime schedule.",
  },
];

const galleryImages = [
  {
    src: "/images/home-backwater-houseboats.jpg",
    alt: "Overnight houseboat stay in Alappuzha",
  },
  {
    src: "/images/single-bed-gallery/bedroom-blue.jpeg",
    alt: "Private overnight houseboat bedroom in Alleppey",
  },
  {
    src: "/images/two-bedroom-gallery/lounge.jpeg",
    alt: "Indoor lounge for an overnight houseboat stay in Kerala",
  },
  {
    src: "/images/single-bed-gallery/open-deck-night.jpeg",
    alt: "Night deck atmosphere on an overnight houseboat in Alappuzha",
  },
];

const stayDetails = [
  {
    title: "A fuller backwater rhythm",
    text: "An overnight stay gives the cruise time to breathe. Instead of fitting everything into one daytime block, the route can hold space for evening quiet, dinner, and a gentler morning before checkout.",
  },
  {
    title: "More usable time on board",
    text: "Guests comparing overnight plans usually care less about raw cruise hours and more about whether the stay feels complete. Bedroom access, longer deck time, and a slower pace are what change the experience most.",
  },
  {
    title: "A better fit for private trips",
    text: "Couples, families, and small groups often choose an overnight houseboat because it keeps the trip in one place instead of splitting the experience across transport, meals, and separate stays.",
  },
];

const roomDetails = [
  "Private bedrooms are the center of the overnight format, whether you choose a single-bedroom couple stay or a larger family layout.",
  "Attached washrooms matter because they make the night feel simpler and more comfortable, especially for children, older guests, and mixed-age groups.",
  "Indoor lounge and dining space become more important once the stay stretches past sunset, because the boat needs to feel livable, not just scenic.",
  "The right room setup depends on guest count, privacy expectations, and whether you want an intimate stay or a more social family boat.",
] as const;

const acTimingNotes = [
  {
    title: "Ask for the exact AC window",
    copy: "This is one of the most important overnight-booking questions because comfort at sleeping time matters more than daytime cooling. The exact AC schedule should always be confirmed with your selected boat.",
  },
  {
    title: "Night comfort is the real priority",
    copy: "Most overnight guests judge AC value by how well the room supports sleep through the night, not by whether cooling runs constantly during every part of the cruise.",
  },
  {
    title: "Boat category affects expectations",
    copy: "Luxury, family, and compact couple formats can differ in room feel, layout, and hospitality rhythm, so AC expectations should be discussed alongside the boat type rather than treated as a separate detail.",
  },
];

const nightExperience = [
  {
    title: "Sunset and dinner",
    copy: "The emotional shift from daytime cruising to evening calm is what makes overnight houseboats distinct. Dinner on board feels strongest when it arrives as part of that slower sunset transition.",
  },
  {
    title: "A quieter deck atmosphere",
    copy: "After the daytime pace settles, the deck becomes a place for conversation, still water, softer light, and a more private backwater mood that short rides cannot really replicate.",
  },
  {
    title: "Sleep on the water",
    copy: "For many guests, this is the real reason to choose an overnight plan. The room, washroom access, and nighttime AC window all come together around the simple appeal of staying on the backwaters instead of only visiting them.",
  },
  {
    title: "Morning calm before checkout",
    copy: "An overnight stay usually ends with a softer, less hurried feel than a day cruise. That final morning stretch often becomes one of the most memorable parts of the trip.",
  },
];

const overnightFormats = [
  {
    title: "Single Bedroom Overnight Stay",
    href: "/houseboats/single-bed",
    fit: "Best for couples or solo guests",
    copy: "Usually the clearest fit when privacy, a compact room setup, and a calmer overnight atmosphere matter more than a larger shared layout.",
  },
  {
    title: "2 Bedroom Family Overnight Houseboat",
    href: "/houseboats/2-bedroom",
    fit: "Best for smaller families",
    copy: "A practical option for families who want private rooms, shared lounge comfort, and a smoother overnight rhythm without stepping into a large-group format.",
  },
  {
    title: "3 or 5 Bedroom Group Overnight Stay",
    href: "/houseboats/3-bedroom",
    fit: "Best for larger private groups",
    copy: "Usually the right direction when the trip includes extended family, more private rooms, or a celebration group that needs the boat to function as a shared social space overnight.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Overnight Houseboat Alappuzha | Alleppey Night Stay Cruise",
    description:
      "Plan an overnight houseboat in Alappuzha with stay details, room guidance, AC timing expectations, and a clearer picture of the Alleppey night-cruise experience.",
    path: "/overnight-houseboat-alappuzha",
    keywords: [
      "overnight houseboat alappuzha",
      "alleppey night stay cruise",
      "overnight houseboat alleppey",
      "kerala overnight houseboat stay",
    ],
    image: {
      url: "/images/home-backwater-houseboats.jpg",
      width: 1200,
      height: 630,
      alt: "Overnight houseboat in Alappuzha",
    },
  });
}

const breadcrumbJsonLd = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Houseboats", path: "/houseboats" },
  {
    name: "Overnight Houseboat Alappuzha",
    path: "/overnight-houseboat-alappuzha",
  },
]);

const faqJsonLd = createFaqSchema(overnightFaqs);

const imageJsonLd = createImageObjectSchema({
  path: "/images/home-backwater-houseboats.jpg",
  alt: "Overnight houseboat in Alappuzha",
  width: 1200,
  height: 630,
});

const serviceJsonLd = createServiceSchema({
  name: "Overnight Houseboat Alappuzha",
  description:
    "Private overnight houseboat stays in Alappuzha with bedroom access, dinner-and-breakfast pacing, nighttime comfort planning, and a slower Kerala backwater rhythm.",
  path: "/overnight-houseboat-alappuzha",
  serviceType: "Overnight houseboat stay",
});

const touristTripJsonLd = createTouristTripSchema({
  name: "Overnight Houseboat Experience in Alappuzha",
  description:
    "A private Kerala backwater overnight cruise in Alappuzha designed around room comfort, AC timing clarity, evening calm, and a more complete stay on the water.",
  path: "/overnight-houseboat-alappuzha",
  image: {
    path: "/images/home-backwater-houseboats.jpg",
    alt: "Overnight houseboat in Alappuzha",
    width: 1200,
    height: 630,
  },
  itinerary: ["Alleppey", "Alappuzha", "Kuttanad", "Vembanad Lake"],
  touristType: ["Couples", "Families", "Private groups"],
  keywords: ["overnight houseboat alappuzha", "overnight houseboat alleppey"],
});

export default function OvernightHouseboatAlappuzhaPage() {
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div>
              <PageBreadcrumbs
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: "Houseboats", href: "/houseboats" },
                  { label: "Overnight Houseboat Alappuzha" },
                ]}
              />
              <div className="mb-4 inline-block text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-600/80">
                Overnight Backwater Stay
              </div>
              <h1 className="text-[clamp(2.35rem,9vw,4.8rem)] font-semibold leading-[1.02] tracking-tight text-sand">
                Overnight houseboats in Alappuzha for guests who want the backwaters after the day visitors have gone.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-lg">
                This page is for travelers comparing a real Alleppey overnight
                stay, not just a daytime boat ride. If you want clear stay
                details, room guidance, AC timing expectations, and a better
                sense of what the night experience actually feels like, start
                here.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#173247] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  Plan an overnight houseboat
                </Link>
                <Link
                  href="/houseboats/compare"
                  className="inline-flex items-center justify-center rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#f4f9fb]"
                >
                  Compare houseboats
                </Link>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#dfeef6]/70 via-[#f6f1df]/55 to-[#173247]/10 blur-2xl opacity-70" />
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
          <div className="grid gap-6 lg:grid-cols-[0.98fr,1.02fr]">
            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Stay Details
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Overnight stays work best when the boat feels like more than transport.
              </h2>
              <div className="mt-8 grid gap-4">
                {stayDetails.map((item) => (
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

            <div className="rounded-[2rem] border border-navy/8 bg-[linear-gradient(180deg,#edf5f8_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Room Details
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                Room comfort shapes how restful the overnight experience feels.
              </h2>
              <div className="mt-8 grid gap-3">
                {roomDetails.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-[#dce8df] bg-white px-4 py-4 text-sm leading-7 text-foreground/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-gold/25 bg-[#edf5f8] p-5 text-sm leading-7 text-foreground/72">
                If you are unsure which room format suits your stay, the
                simplest way to decide is by guest count first, then privacy
                needs, and then the kind of shared lounge flow you want on
                board.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2.2rem] border border-navy/8 bg-[#173247] px-6 py-8 text-white shadow-[0_24px_60px_rgba(23,50,71,0.16)] sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-white/70">
                  AC Timings
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  AC timing questions belong right at the center of overnight planning.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/74 sm:text-lg">
                  Guests rarely ask about AC for curiosity alone. They ask
                  because cooling, sleep quality, and night comfort strongly
                  shape whether the stay feels relaxing. That is why this page
                  makes AC expectations explicit instead of leaving them hidden
                  until the booking conversation.
                </p>
              </div>
              <div className="grid gap-4">
                {acTimingNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
          <div className="rounded-[2rem] border border-navy/8 bg-[#fbfbf8] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.05)] sm:rounded-[2.6rem] sm:p-10">
            <div className="max-w-3xl">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Night Experience
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
                The night experience is what separates an overnight stay from a longer boat ride.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {nightExperience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-navy/8 bg-white p-6"
                >
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                    {item.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fa] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center sm:mb-14">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
                Compare Formats
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
                Compare the overnight format with the houseboat layouts that support it best
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
                The best overnight choice depends on whether you want an
                intimate room for two, a family-friendly setup, or extra shared
                space for a larger private group.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {overnightFormats.map((item) => (
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
                    Explore this option
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          eyebrow="Overnight Stay FAQs"
          title="Questions guests usually ask before booking an overnight houseboat"
          intro="These answers focus on overnight stay intent in Alleppey and Alappuzha."
          faqs={overnightFaqs}
        />

        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#173247] px-8 py-16 text-center text-white shadow-[0_24px_80px_rgba(23,50,71,0.2)]">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="mb-4 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/70">
                Ready To Plan
              </span>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start planning an overnight houseboat in Alappuzha
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                Share your dates, guest count, preferred room layout, and AC
                expectations, and we can help match you with the overnight
                houseboat format that feels right for your Kerala backwater
                stay.
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
