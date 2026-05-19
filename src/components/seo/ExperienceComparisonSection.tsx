import Link from "next/link";

const options = [
  {
    title: "Houseboat",
    href: "/houseboats",
    description:
      "Best for couples, families, and private groups who want a slower overnight stay, more comfort, and time to dine and unwind on the water.",
  },
  {
    title: "Shikara",
    href: "/shikkara",
    description:
      "Best for guests who want a relaxed scenic ride through narrower canals, especially for sunrise, sunset, or a shorter private backwater trip.",
  },
  {
    title: "Country boat",
    href: "/canoe-boats",
    description:
      "Best for village canal exploration, birdwatching, and travellers who want a more local, open-air view of everyday backwater life.",
  },
  {
    title: "Kayaking",
    href: "/kayaking",
    description:
      "Best for active travellers and beginners who want to paddle at water level through quieter Kerala backwater trails with a guide.",
  },
] as const;

export default function ExperienceComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <span className="mb-3 block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
          Compare Experiences
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-sand sm:text-5xl">
          Which Alleppey backwater experience suits your trip?
        </h2>
        <p className="mt-4 text-base leading-7 text-foreground/65 sm:text-lg">
          Choose based on pace, privacy, route style, and how close you want to
          feel to the Kerala backwaters.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {options.map((option) => (
          <article
            key={option.title}
            className="rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)]"
          >
            <h3 className="text-xl font-semibold tracking-tight text-sand">
              {option.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-foreground/65">
              {option.description}
            </p>
            <Link
              href={option.href}
              className="mt-5 inline-flex text-sm font-semibold text-teal hover:text-navy"
            >
              Explore {option.title}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
