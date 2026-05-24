import Link from "next/link";
import type { InternalLinkGraph } from "@/lib/seo-content";

export default function InternalLinksSection({
  graph,
}: {
  graph: InternalLinkGraph;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="rounded-[2rem] border border-navy/8 bg-[#f7fbfc] p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:p-10">
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
          {graph.eyebrow ?? "Internal Links"}
        </span>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
          {graph.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/66 sm:text-base">
          {graph.intro}
        </p>

        {graph.hub ? (
          <div className="mt-8 rounded-[1.6rem] border border-navy/10 bg-white p-6">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
              Hub Page
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-sand">
              {graph.hub.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/65">
              {graph.hub.description}
            </p>
            <Link
              href={graph.hub.href}
              className="mt-5 inline-flex text-sm font-semibold text-teal transition hover:text-navy"
            >
              Open the hub
            </Link>
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <nav
            aria-label="Related internal links"
            className="rounded-[1.6rem] border border-navy/10 bg-white p-6"
          >
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
              Related Paths
            </div>
            <ul className="mt-5 space-y-4">
              {graph.contextualLinks.map((item) => (
                <li
                  key={item.href}
                  className="rounded-[1.25rem] border border-navy/8 bg-[#f7fbfc] p-4"
                >
                  <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-teal transition hover:text-navy"
                  >
                    Visit this page
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {graph.spokeLinks?.length ? (
            <nav
              aria-label="Specific related booking pages"
              className="rounded-[1.6rem] border border-navy/10 bg-white p-6"
            >
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                Specific Options
              </div>
              <ul className="mt-5 space-y-4">
                {graph.spokeLinks.map((item) => (
                  <li
                    key={item.href}
                    className="rounded-[1.25rem] border border-navy/8 bg-[#f7fbfc] p-4"
                  >
                    <h3 className="text-lg font-semibold text-sand">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex text-sm font-semibold text-teal transition hover:text-navy"
                    >
                      Open this option
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}
