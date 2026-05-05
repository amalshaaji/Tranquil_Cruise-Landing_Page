import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";

const HOME_HERO_IMAGE = "/images/home-hero-backwater-canoe.jpg";
const INTRO_IMAGE = "/images/home-backwater-houseboats.jpg";
const serviceCards = [
  {
    eyebrow: "Overnight Escape",
    title: "Signature Houseboats",
    copy: "Private floating stays with slower routes, open decks, and relaxed overnight comfort.",
    href: "/houseboats",
    image: "/images/houseboats-card-blue.jpg",
  },
  {
    eyebrow: "Stay Well",
    title: "Waterside Rooms",
    copy: "Warm Kerala stays with easy access to the backwaters and quieter local hospitality.",
    href: "/rooms",
    image: "/images/room-card.png",
  },
  {
    eyebrow: "Slow Cruising",
    title: "Scenic Shikkara Rides",
    copy: "Gentle rides through scenic canals for couples, families, and unhurried evenings.",
    href: "/shikkara",
    image: "/images/shikkara-real.png",
  },
  {
    eyebrow: "Wellness Pause",
    title: "Ayurvedic Spa Rituals",
    copy: "Restorative treatments and a softer wellness pause folded into your Kerala escape.",
    href: "/spa",
    image: "/images/spa-card.png",
  },
  {
    eyebrow: "Village Routes",
    title: "Village Canoe Journeys",
    copy: "Smaller backwater journeys through village canals with a more intimate point of view.",
    href: "/canoe-boats",
    image: "/images/canoe-card.png",
  },
  {
    eyebrow: "Active Waterways",
    title: "Backwater Kayaking Trails",
    copy: "Paddle through quieter stretches of Kerala with a more active, close-to-the-water experience.",
    href: "/experience?category=kayaking",
    image: "/images/kayaking-card.png",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Tranquil Cruise",
    description:
      "Luxury houseboats, Shikkara rides, and stays on Kerala backwaters.",
    url: "https://www.tranquilcruise.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    priceRange: "$$",
    image: `https://www.tranquilcruise.com${HOME_HERO_IMAGE}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex min-h-screen flex-col">
        <HeroSection />

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
            <div className="space-y-6">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                Private Planning
              </div>
              <h2 className="max-w-xl text-4xl font-semibold leading-[0.98] text-sand sm:text-5xl">
                Simple on the page, beautifully tailored in real life.
              </h2>
              <p className="max-w-xl text-sm leading-7 text-foreground/72 sm:text-base">
                We keep the homepage calm and uncluttered so the journey can be
                shaped around you. Share the pace you want, and we plan the
                route, stay, and moments around that rhythm.
              </p>
            </div>

            <div className="grid gap-6 text-sm leading-7 text-foreground/74 sm:grid-cols-2">
              <p>
                Some guests want an early quiet cruise with soft morning light.
                Others want village canals, a slower afternoon, or a sunset
                stretch before dinner on board.
              </p>
              <p>
                Instead of crowding the page with every package combination, we
                plan the details with you directly and keep each itinerary warm,
                personal, and easy to settle into.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-screen-2xl overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_24px_80px_rgba(23,50,71,0.1)]">
            <div className="grid lg:grid-cols-[1.12fr,0.88fr]">
              <div className="relative min-h-[24rem] lg:min-h-[38rem]">
                <Image
                  src={INTRO_IMAGE}
                  alt="Backwater houseboats framed by palms"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="flex flex-col justify-between bg-[linear-gradient(180deg,#ffffff_0%,#f2f8fb_100%)] p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/75">
                    Tailored Escapes
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
                    Tell us your pace, and we shape the route around it.
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-foreground/72 sm:text-base">
                    From sunrise departures to quieter overnight stays, every
                    journey is arranged with a lighter, slower touch so it feels
                    more like a private retreat than a standard booking flow.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Departure
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Sunrise drift, golden-hour cruise, or an unhurried
                      afternoon on the water.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Route
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Slower village canals, open backwater stretches, and stops
                      that suit your mood.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-navy/10 bg-[#eef5f8] p-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Stay
                    </div>
                    <p className="mt-3 text-sm leading-7 text-foreground/70">
                      Day ride, sunset plan, or a quieter overnight experience
                      with more breathing room.
                    </p>
                  </div>
                </div>

                <div
                  id="explore-experiences"
                  className="mt-6 scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-[#d9e5eb] bg-[linear-gradient(180deg,#f8fbfc_0%,#edf5f8_100%)] p-5 shadow-[0_18px_50px_rgba(23,50,71,0.08)] sm:scroll-mt-32 sm:p-6"
                >
                  <div className="flex flex-col gap-3 border-b border-navy/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-teal/75">
                        Explore Our Experiences
                      </div>
                      <h4 className="mt-2 text-2xl font-semibold leading-tight text-sand">
                        Six ways to slip into the backwaters.
                      </h4>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-foreground/66">
                      Choose the mood that feels right, then step into a page
                      shaped around that experience.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {serviceCards.map((card, index) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={`group relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-white shadow-[0_14px_34px_rgba(23,50,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(23,50,71,0.16)] ${index === 0
                          ? "lg:row-span-2"
                          : index === serviceCards.length - 1
                            ? "lg:col-span-2"
                            : ""
                          }`}
                      >
                        <div
                          className={`relative overflow-hidden ${index === 0
                            ? "h-[21rem] sm:h-[24rem] lg:h-full"
                            : index === serviceCards.length - 1
                              ? "h-[17rem] sm:h-[19rem]"
                              : "h-64"
                            }`}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,28,40,0.08)_0%,rgba(10,28,40,0.18)_28%,rgba(10,28,40,0.74)_100%)]" />
                          <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
                            <span className="inline-flex rounded-full border border-white/24 bg-white/12 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-sm">
                              {card.eyebrow}
                            </span>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                            <h5 className="max-w-sm text-2xl font-semibold leading-tight text-white">
                              {card.title}
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                          <p className="max-w-md text-sm leading-6 text-foreground/70">
                            {card.copy}
                          </p>
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/12 bg-[#f4f8fa] text-sand transition group-hover:bg-[#173247] group-hover:text-white">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                d="M7 17 17 7M17 7H8.5M17 7v8.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
