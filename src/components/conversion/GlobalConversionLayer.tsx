"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock3, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import {
  BUSINESS_HOURS,
  BUSINESS_PHONE,
  BUSINESS_PHONE_LINK,
} from "@/lib/site";

const trustBadges = [
  "Private booking help",
  "Verified guest reviews",
  "Multi-format backwater planning",
] as const;

function getInquiryContext(pathname: string) {
  if (pathname.includes("houseboat-for-couples") || pathname.includes("honeymoon")) {
    return "a private romantic backwater stay";
  }

  if (pathname.includes("family") || pathname.includes("2-bedroom")) {
    return "a family-friendly houseboat stay";
  }

  if (pathname.includes("luxury")) {
    return "a premium Kerala houseboat stay";
  }

  if (pathname.includes("day-cruise")) {
    return "a private day cruise in Alappuzha";
  }

  if (pathname.includes("overnight")) {
    return "an overnight houseboat stay in Alleppey";
  }

  if (pathname.includes("shikkara")) {
    return "a private shikkara ride";
  }

  if (pathname.includes("kayaking")) {
    return "a backwater kayaking session";
  }

  return "a Kerala backwater experience";
}

export default function GlobalConversionLayer() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  const whatsappHref = buildWhatsAppHref(
    `Hi Tranquil Cruise,\nI would like help choosing ${getInquiryContext(pathname)}.\nPlease share availability and the best options for my dates.`,
  );

  return (
    <>
      <div className="pointer-events-none fixed bottom-5 right-5 z-[70] hidden xl:block">
        <div className="pointer-events-auto w-[340px] overflow-hidden rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(240,247,250,0.98)_100%)] shadow-[0_30px_80px_rgba(23,50,71,0.2)] backdrop-blur-xl">
          <div className="border-b border-navy/8 px-6 py-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal/80">
              <Sparkles size={12} />
              Booking Support
            </div>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-sand">
              Book directly while your preferred dates are still easy to match.
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground/66">
              Sunset slots, overnight stays, and family-size boats usually fill before
              general sightseeing plans.
            </p>
          </div>

          <div className="px-6 py-5">
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#173247]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              <Link
                href={whatsappHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173247] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
              >
                <MessageCircle size={16} />
                WhatsApp Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-navy/12 bg-white px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:bg-[#edf4f7]"
              >
                Start Booking Request
              </Link>
            </div>

            <div className="mt-5 grid gap-3 rounded-[1.4rem] border border-navy/8 bg-[#f6fbfc] p-4 text-sm text-foreground/68">
              <div className="flex items-start gap-3">
                <Clock3 size={16} className="mt-0.5 shrink-0 text-teal" />
                <span>{BUSINESS_HOURS}</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-teal" />
                <span>Route and boat suggestions based on group size, pace, and comfort.</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-teal" />
                <Link href={BUSINESS_PHONE_LINK} className="transition hover:text-foreground">
                  {BUSINESS_PHONE}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-navy/10 bg-[rgba(255,255,255,0.94)] px-4 pb-[calc(env(safe-area-inset-bottom)+0.9rem)] pt-3 shadow-[0_-18px_40px_rgba(23,50,71,0.12)] backdrop-blur-xl xl:hidden">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal/80">
                Booking Window
              </p>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#173247]">
                Popular sunset and overnight slots fill first.
              </p>
              <p className="mt-1 text-xs leading-5 text-foreground/60">
                Live help available {BUSINESS_HOURS}
              </p>
            </div>

            <div className="hidden min-[540px]:flex min-[540px]:flex-wrap min-[540px]:justify-end min-[540px]:gap-2">
              {trustBadges.slice(0, 2).map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#173247]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#173247] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#234760]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-navy/12 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition hover:bg-[#edf4f7]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
