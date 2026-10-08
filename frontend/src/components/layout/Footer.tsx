import Image from "next/image";
import Link from "next/link";
import { footerLinks, nav, site } from "@/lib/site";
import { whatsappLink } from "@/lib/enquiry";
import { groupBySize, houseboatList, sizeName } from "@/lib/houseboats";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Kasavu } from "@/components/ui/Kasavu";
import { Stars } from "@/components/ui/Stars";

const heading = "mb-4 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold";
const link = "flex min-h-10 items-center text-sm transition-colors duration-300 ease-calm hover:text-paper";

export function Footer() {
  const tel = site.phone.replace(/[^\d+]/g, "");
  return (
    <footer className="bg-moss-deep text-paper/75">
      <Kasavu />

      <Container className="grid gap-12 pb-12 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3 font-serif text-3xl text-paper">
            <Image src="/logo-mark.png" alt="" width={140} height={77} className="h-9 w-auto" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed">{site.tagline}. Private houseboats, shikkara rides and kayaking from Alleppey.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="light" className="w-full sm:w-auto">
              Plan your journey
            </Button>
            <Button
              href={whatsappLink("Hello Tranquil Cruise, I'd like to enquire.")}
              target="_blank"
              rel="noopener"
              variant="outline"
              className="w-full border-paper/30 text-paper hover:border-paper hover:bg-paper/10 sm:w-auto"
            >
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-[1fr_1.1fr_1.5fr] lg:col-span-8 lg:gap-8">
          <div>
            <p className={heading}>Explore</p>
            <ul>
              {[...nav, ...footerLinks].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={link}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={heading}>Houseboats</p>
            <ul>
              {groupBySize(houseboatList).map(([b]) => (
                <li key={b.slug}>
                  <Link href={`/houseboats/${b.slug}`} className={link}>
                    {sizeName(b)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/houseboats#parties" className={link}>
                  Groups and parties
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 text-sm sm:col-span-1">
            <p className={heading}>Find us</p>
            <address className="not-italic leading-relaxed">
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </address>
            <a href={`tel:${tel}`} className={`${link} mt-3`}>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className={`${link}`}>
              {site.email}
            </a>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap rounded-full border border-paper/20 px-4 py-2 transition-colors duration-300 ease-calm hover:border-paper/50 hover:text-paper"
            >
              <Stars className="size-3.5" />
              <span>
                {site.googleRating} · {site.googleReviewCount} Google reviews
              </span>
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/50 max-lg:pb-[calc(6rem+env(safe-area-inset-bottom))] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.location}</p>
        </Container>
      </div>
    </footer>
  );
}
