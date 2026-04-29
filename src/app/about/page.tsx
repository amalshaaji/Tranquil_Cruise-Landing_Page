import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
        <div className="text-xs font-semibold text-foreground/70">
          About Tranquil Cruise
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-sand sm:text-4xl">
          A premium Kerala backwater booking experience
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
          This is a static-exportable Next.js demo built to feel like a SPA.
          All booking options are rendered from dummy JSON under `/data`,
          and filtering happens entirely on the client.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/experience"
            className="inline-flex items-center justify-center rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-teal/20 transition hover:bg-teal/90"
          >
            Explore experience
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-sand/90 transition hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Luxury-first design",
            desc: "Airbnb-inspired spacing, premium gradients, and mobile-first UX.",
          },
          {
            title: "Fast static performance",
            desc: "Pages are pre-generated for easy deployment on Vercel/static hosts.",
          },
          {
            title: "SPA-like navigation",
            desc: "Client-side routing with smooth transitions between pages.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm font-semibold text-sand">{c.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-white/10 bg-navy/30 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-sand">How it works</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            {
              step: "01",
              title: "Browse categories",
              desc: "Tap Houseboats, Shikkara, Kayaking, or Rooms to pre-filter.",
            },
            {
              step: "02",
              title: "Use client-side filters",
              desc: "Adjust guests, max price, and keyword - all instantly.",
            },
            {
              step: "03",
              title: "View details",
              desc: "Image gallery + amenities, fully static and fast.",
            },
            {
              step: "04",
              title: "Contact for bookings",
              desc: "Contact form is demo-only - no backend required.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-xs font-semibold text-sand">{s.step}</div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-foreground/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

