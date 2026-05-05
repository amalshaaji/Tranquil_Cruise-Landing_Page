import Link from "next/link";
import { services } from "@/lib/services-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const contactLinks = [
  { href: "tel:+917994073491", label: "+91 79940 73491" },
  { href: "mailto:info@tranquilcruise.com", label: "info@tranquilcruise.com" },
  { href: "/contact", label: "Alappuzha, Kerala 688001" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto overflow-hidden border-t border-navy/10 bg-[linear-gradient(180deg,#edf5f8_0%,#f7fbfc_46%,#ffffff_100%)]">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-16">
        <section className="relative overflow-hidden rounded-[28px] border border-gold/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(241,247,250,0.98)_42%,rgba(231,241,246,1)_100%)] px-6 py-8 text-foreground shadow-[0_24px_80px_rgba(23,50,71,0.12)] sm:px-8 sm:py-10 lg:px-10">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(143,179,209,0.22), transparent 36%), radial-gradient(circle at right center, rgba(111,149,171,0.14), transparent 32%)",
            }}
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sand/85">
                Plan Your Escape
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Let the backwaters unfold at the perfect pace.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72 sm:text-base">
                From private houseboats to slow village canal journeys, we shape
                Kerala experiences that feel calm, warm, and beautifully
                considered.
              </p>
            </div>

            <div className="flex">
              <Link
                href="https://wa.me/917994073491"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/45 bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12.04 2C6.74 2 2.45 6.22 2.45 11.42c0 1.83.55 3.61 1.59 5.14L3 22l5.64-1.48a9.72 9.72 0 0 0 3.4.61c5.29 0 9.58-4.22 9.58-9.42C21.62 6.22 17.33 2 12.04 2Zm0 17.3c-1.05 0-2.08-.19-3.04-.57l-.22-.08-3.35.88.9-3.25-.15-.23a7.44 7.44 0 0 1-1.18-4.03c0-4.11 3.18-7.45 7.08-7.45 3.9 0 7.08 3.34 7.08 7.45s-3.18 7.28-7.12 7.28Zm3.88-5.57c-.21-.1-1.27-.62-1.47-.69-.2-.08-.34-.1-.49.1-.15.2-.57.69-.7.83-.13.15-.26.16-.47.05-.22-.1-.92-.33-1.75-1.07-.65-.57-1.08-1.28-1.2-1.49-.12-.2-.01-.31.09-.41.09-.08.2-.22.3-.33.1-.12.13-.2.2-.33.07-.12.03-.24-.02-.34-.05-.1-.48-1.16-.66-1.59-.17-.42-.34-.36-.47-.37h-.4c-.14 0-.35.05-.53.24-.18.2-.7.68-.7 1.65 0 .97.72 1.91.82 2.04.1.13 1.39 2.2 3.42 3 .48.21.86.33 1.15.42.48.15.92.13 1.26.08.38-.05 1.27-.5 1.45-.99.18-.5.18-.92.13-1.01-.05-.1-.19-.15-.4-.25Z"
                  />
                </svg>
                Start Your Enquiry
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-10 px-1 py-10 lg:grid-cols-[1.2fr,0.8fr,0.95fr,1fr]">
          <div className="max-w-sm">
            <div className="text-sm font-semibold tracking-[0.28em] text-sand">
              TRANQUIL CRUISE
            </div>
            <p className="mt-5 text-sm leading-7 text-foreground/72">
              Refined houseboats, Shikkara rides, kayaking trails, and stay
              experiences crafted for slower, more memorable days on the water.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-foreground/60">
              <span className="rounded-full border border-navy/10 bg-white/80 px-3 py-1.5">
                Luxury stays
              </span>
              <span className="rounded-full border border-navy/10 bg-white/80 px-3 py-1.5">
                Private cruises
              </span>
              <span className="rounded-full border border-navy/10 bg-white/80 px-3 py-1.5">
                Kerala hospitality
              </span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-sand">Quick Links</div>
            <nav className="mt-4 flex flex-col gap-3 text-sm" aria-label="Footer">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/72 transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-sm font-semibold text-sand">Experiences</div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="text-foreground/72 transition hover:text-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-sand">Contact</div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground/72 transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-foreground/65">
              Daily assistance available from 8:00 AM to 8:00 PM for bookings,
              custom plans, and local guidance.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-3 border-t border-navy/10 pt-6 text-xs text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Tranquil Cruise. Crafted for calm travel across Kerala.</div>
        </div>
      </div>
    </footer>
  );
}
