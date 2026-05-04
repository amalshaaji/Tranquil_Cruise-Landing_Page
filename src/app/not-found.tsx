import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24">
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm shadow-black/5">
        <div className="text-xs font-semibold text-foreground/70">
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
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-gold/90"
        >
          Back to gallery
        </Link>
      </div>
    </main>
  );
}
