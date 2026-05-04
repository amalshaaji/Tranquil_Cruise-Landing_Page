import HeroSection from "@/components/home/HeroSection";
import ServiceCards, {
  type ServiceCardCategory,
} from "@/components/home/ServiceCards";
import { categories } from "@/lib/tranquil-data";

const HOME_HERO_IMAGE = "/images/home-hero-backwater-canoe.jpg";
const HOUSEBOAT_CARD_IMAGE = "/images/houseboats-card-blue.jpg";

export default function Home() {
  const serviceCategories: ServiceCardCategory[] = [
    ...categories.map((category) => {
      switch (category.type) {
        case "houseboat":
          return { ...category, image: HOUSEBOAT_CARD_IMAGE };
        case "shikkara":
          return { ...category, image: "/images/shikkara-real.png" };
        case "kayaking":
          return { ...category, image: "/images/kayaking-card.png" };
        case "room":
          return { ...category, image: "/images/room-card.png" };
        default:
          return category;
      }
    }),
    {
      type: "canoe",
      title: "Canoe Boat",
      subtitle: "Quiet village canal cruises",
      href: "/contact",
      image: "/images/canoe-card.png",
    },
    {
      type: "spa",
      title: "Ayurvedic Wellness Spa",
      subtitle: "Restorative Kerala therapies",
      href: "/contact",
      image: "/images/spa-card.png",
    },
  ];

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

  const activities = [
    {
      title: "Overnight Stay",
      desc: "Enjoy an overnight cruise in Alleppey houseboats with cozy bedrooms, Kerala cuisine, and serene backwaters for a memorable stay.",
      meta: "Stay onboard",
    },
    {
      title: "Traditional Fishing",
      desc: "Experience local fishing techniques with expert fishermen guides",
      meta: "Hands-on local",
    },
    {
      title: "Cooking Classes",
      desc: "Learn authentic Kerala cuisine from expert local chefs onboard",
      meta: "Chef-led session",
    },
    {
      title: "Bird Watching",
      desc: "Spot rare birds in Vembanad Lake with experienced guides",
      meta: "Nature trail",
    },
    {
      title: "Village Tours",
      desc: "Visit local villages and experience authentic Kerala culture",
      meta: "Cultural walk",
    },
    {
      title: "Photography Tours",
      desc: "Capture stunning backwater landscapes and local life",
      meta: "Scenic route",
    },
    {
      title: "Sunset Cruise",
      desc: "Special evening cruise with dinner and cultural performances",
      meta: "Evening special",
    },
    {
      title: "Ayurvedic Spa",
      desc: "Traditional Kerala treatments and massages available onboard",
      meta: "Wellness add-on",
    },
  ];

  const experienceStats = [
    { value: "08", label: "Moments" },
    { value: "01", label: "Route" },
    { value: "04", label: "Styles" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex min-h-screen flex-col">
        <HeroSection />

        <ServiceCards categories={serviceCategories} />
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-[#fbf7ee] to-white py-20 text-foreground sm:py-24">
          <div
            className="absolute inset-0 opacity-70"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(215,166,79,0.14), transparent 32%), linear-gradient(225deg, rgba(111,146,136,0.12), transparent 36%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.82fr,1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <div className="inline-flex items-center rounded-full border border-gold/25 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sand shadow-sm shadow-black/5">
                  Cruise Options & Activities
                </div>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.96] text-foreground text-balance sm:text-5xl lg:text-6xl">
                  Curated
                  <span className="mt-2 block bg-gradient-to-r from-sand via-gold to-teal bg-clip-text text-transparent">
                    Backwater Experiences
                  </span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/70 sm:text-base">
                  From unhurried daytime cruises to village visits and wellness
                  rituals, each experience is shaped to reveal a distinct side of
                  Kerala&apos;s backwaters.
                </p>

                <dl className="mt-10 grid max-w-md grid-cols-3 overflow-hidden rounded-lg border border-black/10 bg-white/80 text-center shadow-sm shadow-black/5 backdrop-blur">
                  {experienceStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`px-4 py-5 ${
                        index > 0 ? "border-l border-black/10" : ""
                      }`}
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
                        {stat.label}
                      </dt>
                      <dd className="mt-2 font-[var(--font-display)] text-3xl font-semibold leading-none text-gold">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-14">
                {activities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="group relative min-h-48 overflow-hidden rounded-lg border border-black/10 bg-white p-5 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-lg hover:shadow-black/10 sm:p-6"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-[#f4dfad] to-teal opacity-80"
                      aria-hidden="true"
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-[#fbf7ee] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                          {activity.meta}
                        </div>
                        <div className="font-[var(--font-display)] text-4xl leading-none text-gold/20">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-sand">
                        {activity.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">
                        {activity.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
