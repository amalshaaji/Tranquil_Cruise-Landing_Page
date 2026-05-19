import Link from "next/link";
import { services } from "@/lib/services-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const contactLinks = [
  { href: "tel:+917994073491", label: "+91 79940 73491" },
  { href: "mailto:info@tranquilcruise.com", label: "info@tranquilcruise.com" },
  { href: "/contact", label: "Alappuzha, Kerala 688001" },
] as const;

const experienceLinks = [
  ...services.map((service) => ({
    href: `/${service.slug}`,
    label: service.title,
  })),
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-[#eef4f7]">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-10 sm:py-16">

        {/* Top row: Brand (left) + Nav columns (right) */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand Block */}
          <div className="flex flex-col items-start lg:max-w-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-[#f4f8fa] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-foreground/56">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>Tranquil Cruise</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-foreground/65">
              Calm travel across Kerala&apos;s backwaters — houseboats, shikara rides,
              kayaking, and stays shaped for slower, more memorable days.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/917994073491"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173247] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#234760]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.74 2 2.45 6.22 2.45 11.42c0 1.83.55 3.61 1.59 5.14L3 22l5.64-1.48a9.72 9.72 0 0 0 3.4.61c5.29 0 9.58-4.22 9.58-9.42C21.62 6.22 17.33 2 12.04 2Zm0 17.3c-1.05 0-2.08-.19-3.04-.57l-.22-.08-3.35.88.9-3.25-.15-.23a7.44 7.44 0 0 1-1.18-4.03c0-4.11 3.18-7.45 7.08-7.45 3.9 0 7.08 3.34 7.08 7.45s-3.18 7.28-7.12 7.28Zm3.88-5.57c-.21-.1-1.27-.62-1.47-.69-.2-.08-.34-.1-.49.1-.15.2-.57.69-.7.83-.13.15-.26.16-.47.05-.22-.1-.92-.33-1.75-1.07-.65-.57-1.08-1.28-1.2-1.49-.12-.2-.01-.31.09-.41.09-.08.2-.22.3-.33.1-.12.13-.2.2-.33.07-.12.03-.24-.02-.34-.05-.1-.48-1.16-.66-1.59-.17-.42-.34-.36-.47-.37h-.4c-.14 0-.35.05-.53.24-.18.2-.7.68-.7 1.65 0 .97.72 1.91.82 2.04.1.13 1.39 2.2 3.42 3 .48.21.86.33 1.15.42.48.15.92.13 1.26.08.38-.05 1.27-.5 1.45-.99.18-.5.18-.92.13-1.01-.05-.1-.19-.15-.4-.25Z" />
                </svg>
                WhatsApp Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-navy/12 bg-[#f7fbfc] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[#edf4f7]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 lg:gap-x-20">

            {/* Quick Links */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sand">
                Quick Links
              </p>
              <nav className="mt-4 flex flex-col gap-2.5 text-sm" aria-label="Footer quick links">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/70 transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Experiences */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sand">
                Experiences
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                {experienceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/70 transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sand">
                Contact
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm">
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-foreground/70 transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-foreground/55">
                Available 8:00 AM – 8:00 PM daily for bookings,
                custom plans, and local guidance.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-navy/10 pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center">
          <span>© 2026 Tranquil Cruise. All rights reserved.</span>
          <span>Crafted for calm travel across Kerala.</span>
        </div>

      </div>
    </footer>
  );
}
