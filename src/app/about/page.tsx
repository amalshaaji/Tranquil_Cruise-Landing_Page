import Image from "next/image";
import Link from "next/link";
import InnerPageHeader from "@/components/layout/InnerPageHeader";

const values = [
  {
    title: "Slower journeys",
    desc: "We shape experiences around pace, quiet moments, and the kind of time that feels unhurried from the very beginning.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 12c2.2-2.8 4.6-4.2 7.2-4.2 2.5 0 4.8 1.4 6.8 4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 15.5c1.5 1.3 3.2 1.9 5 1.9 1.8 0 3.4-.6 5-1.9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Warm local care",
    desc: "From planning to arrival, every recommendation is guided by local knowledge, personal attention, and easy hospitality.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 20s-6-3.7-6-9a3.5 3.5 0 0 1 6-2.3A3.5 3.5 0 0 1 18 11c0 5.3-6 9-6 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Beautifully considered stays",
    desc: "Houseboats, rides, rooms, and wellness experiences are chosen for comfort, calm, and a softer way to discover Kerala.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 11.5 12 5l8 6.5v7.5H4v-7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 19v-4.5h5V19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Tell us your pace",
    desc: "Share whether you imagine a sunrise cruise, an overnight houseboat, a village canal ride, or a quieter stay by the water.",
  },
  {
    step: "02",
    title: "We shape the route",
    desc: "We help match you with the right houseboat, room, ride, or wellness stop based on timing, mood, and comfort.",
  },
  {
    step: "03",
    title: "Arrive into calm",
    desc: "Your Kerala experience unfolds with more ease, more privacy, and a more personal connection to the backwaters.",
  },
];

export default function AboutPage() {
  return (
    <main className="pb-16 sm:pb-24">
      <InnerPageHeader
        eyebrow="About Tranquil Cruise"
        title="A more personal way to experience Kerala's backwaters."
        description="Tranquil Cruise brings together private houseboats, scenic shikkara rides, village canal journeys, warm local stays, and restorative wellness experiences with a calmer, more considered approach."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        sideLabel="Our approach"
        sideValue="Thoughtful planning, slower routes, and quieter hospitality for guests who want Kerala to feel warm, personal, and beautifully paced."
        actions={
          <>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
            >
              Explore gallery
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition hover:bg-slate-50"
            >
              Start enquiry
            </Link>
          </>
        }
      />

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12">
        <section className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div className="space-y-6">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-teal/78">
              Our Story
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[0.98] text-sand sm:text-5xl">
              Crafted for guests who want the backwaters to feel calm, not crowded.
            </h2>
            <p className="max-w-2xl text-sm leading-8 text-foreground/72 sm:text-base">
              Tranquil Cruise was shaped around a simple idea: Kerala is best
              experienced at a gentler pace. Instead of rushing through fixed
              packages, we help guests settle into the rhythm of the
              backwaters through private journeys, slower routes, and stays
              that feel easy from the moment they begin.
            </p>
            <p className="max-w-2xl text-sm leading-8 text-foreground/72 sm:text-base">
              Whether you are planning an overnight houseboat, a scenic
              shikkara ride, a village canoe experience, or a quiet room by the
              water, our focus stays the same: thoughtful choices, local
              warmth, and a feeling of space throughout the journey.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-[0_24px_70px_rgba(23,50,71,0.1)]">
            <div className="relative min-h-[22rem] sm:min-h-[28rem]">
              <Image
                src="https://images.pexels.com/photos/11168844/pexels-photo-11168844.jpeg"
                alt="Kerala backwater scene on the About page"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,38,52,0.06)_0%,rgba(16,38,52,0.34)_100%)]" />
            </div>

            <div className="grid gap-px bg-navy/10 sm:grid-cols-3">
              <div className="bg-[#f6fafb] p-5">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                  Stay
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/72">
                  Houseboats and rooms chosen for comfort, privacy, and calm.
                </div>
              </div>
              <div className="bg-[#f6fafb] p-5">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                  Explore
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/72">
                  Scenic rides through open stretches and quieter village canals.
                </div>
              </div>
              <div className="bg-[#f6fafb] p-5">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                  Unwind
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/72">
                  Softer wellness moments that bring ease into the journey.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,50,71,0.08)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 border-b border-navy/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/78">
                What Matters Here
              </div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
                The feeling is just as important as the route.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-foreground/68 sm:text-base">
              Every detail is meant to make the backwaters feel more personal,
              more spacious, and more memorable in the quietest way.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-white/80 bg-white p-6 shadow-[0_14px_34px_rgba(23,50,71,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf5f8] text-sand shadow-[0_10px_20px_rgba(23,50,71,0.08)]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-sand">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/72">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/78">
              How It Feels
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
              A quieter kind of luxury.
            </h2>
            <p className="mt-5 text-sm leading-8 text-foreground/72 sm:text-base">
              Not loud, not rushed, and never overcomplicated. We prefer soft
              mornings, graceful boat rides, clear communication, and stays
              that leave room for you to simply be present with the landscape.
            </p>
            <p className="mt-4 text-sm leading-8 text-foreground/72 sm:text-base">
              That is what makes Tranquil Cruise feel different: a more relaxed
              way to discover Kerala without losing comfort, beauty, or care.
            </p>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_20px_60px_rgba(23,50,71,0.06)] sm:p-8">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-teal/78">
              Your Journey
            </div>
            <div className="mt-6 grid gap-4">
              {journeySteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-[1.4rem] border border-navy/10 bg-[#f5fafb] p-5"
                >
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/76">
                    {step.step}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-sand">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/72">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
