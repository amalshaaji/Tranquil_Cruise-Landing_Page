import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-semibold text-sand">Tranquil Cruise</div>
            <p className="text-sm text-foreground/75">
              Premium Kerala experiences across houseboats, Shikkara rides, kayaking,
              and cozy stays.
            </p>
            <div className="text-xs text-foreground/60">
              Static demo site (no backend). Data is stored under `/data`.
            </div>
          </div>

          <div className="space-y-3 md:justify-self-center">
            <div className="text-sm font-semibold text-sand">Explore</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="text-foreground/75 hover:text-foreground" href="/">
                Home
              </Link>
              <Link className="text-foreground/75 hover:text-foreground" href="/experience">
                Experience
              </Link>
              <Link className="text-foreground/75 hover:text-foreground" href="/about">
                About
              </Link>
              <Link className="text-foreground/75 hover:text-foreground" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-3 md:justify-self-end">
            <div className="text-sm font-semibold text-sand">Backwaters Ready</div>
            <p className="text-sm text-foreground/75">
              Smooth booking flows with SPA-like transitions and fast static performance.
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-ink shadow-sm shadow-teal/20 transition hover:bg-teal/90"
            >
              Browse availability
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-foreground/60">
            (c) {new Date().getFullYear()} Tranquil Cruise. All rights reserved.
          </div>
          <div className="text-xs text-foreground/60">Built for static export.</div>
        </div>
      </div>
    </footer>
  );
}

