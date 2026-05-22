import Link from "next/link";

const options = [
  {
    title: "Houseboat",
    href: "/houseboats",
    description:
      "Best for couples, families, and private groups who want a slower overnight stay, more comfort, and time to dine and unwind on the water.",
  },
  {
    title: "Shikkara",
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
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:py-20">
      <div className="overflow-hidden rounded-[2rem] border border-[#c4d8e4] bg-[linear-gradient(135deg,#173247_0%,#244b63_48%,#dfeef5_48.2%,#eef7fb_100%)] shadow-[0_30px_80px_rgba(23,50,71,0.14)] sm:rounded-[2.4rem]">
        <div className="grid gap-0 lg:grid-cols-[0.84fr,1.16fr]">
          <div className="border-b border-white/10 px-5 py-6 text-white sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:border-r-white/10 lg:px-10">
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#9fd0e7]">
              Compare Experiences
            </span>
            <h2 className="mt-3 text-[1.9rem] font-semibold tracking-tight sm:mt-4 sm:text-5xl">
              Which Alleppey backwater experience suits your trip?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/72 sm:mt-5 sm:text-base sm:leading-7">
              Choose by pace, privacy, route style, and how close you want to feel
              to the Kerala backwaters once the trip actually begins.
            </p>
          </div>

          <div className="grid gap-px bg-[#c9dde8] md:grid-cols-2 xl:grid-cols-4">
        {options.map((option, index) => (
          <article
            key={option.title}
            className="group flex min-h-[15rem] flex-col justify-between bg-[linear-gradient(180deg,#f9fdff_0%,#eef7fb_100%)] p-5 transition duration-300 hover:bg-white sm:min-h-[18rem] sm:p-6"
          >
            <div>
              <span className="inline-flex rounded-full border border-[#c7dbe5] bg-[#e7f2f8] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#3b7391]">
                {index === 0
                  ? "Comfort Led"
                  : index === 1
                    ? "Scenic Ride"
                    : index === 2
                      ? "Village Route"
                      : "Active Trail"}
              </span>
              <h3 className="mt-4 text-[1.65rem] font-semibold tracking-tight text-sand sm:mt-5 sm:text-2xl">
                {option.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground/68 sm:mt-4 sm:leading-7">
                {option.description}
              </p>
            </div>
            <Link
              href={option.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#2d677f] transition group-hover:text-navy sm:mt-8"
            >
              Explore {option.title}
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
}
