import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,249,251,1)_100%)] p-8 shadow-[0_18px_50px_rgba(23,50,71,0.08)]">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal/80">
          404
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-sand">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75">
          The experience you&apos;re looking for may have moved. Browse our categories
          and discover another premium backwater experience.
        </p>
        <Link
          href="/experience"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
        >
          Back to gallery
        </Link>
      </div>
    </main>
  );
}
