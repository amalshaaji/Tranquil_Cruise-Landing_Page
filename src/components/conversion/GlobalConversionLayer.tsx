"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock3, MessageCircle, Phone, ShieldCheck, Sparkles, X } from "lucide-react";
import { trackConversionStep, trackEvent } from "@/lib/analytics";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (pathname === "/contact") {
    return null;
  }

  const whatsappHref = buildWhatsAppHref(
    `Hi Tranquil Cruise,\nI would like help choosing ${getInquiryContext(pathname)}.\nPlease share availability and the best options for my dates.`,
  );

  function handleWhatsAppClick(surface: "floating_popup") {
    trackEvent("whatsapp_cta_click", {
      surface,
      page_path: pathname,
      enquiry_context: getInquiryContext(pathname),
    });
    trackConversionStep("whatsapp_click", {
      surface,
      page_path: pathname,
    });
  }

  function handleContactClick(surface: "floating_popup") {
    trackEvent("booking_cta_click", {
      surface,
      page_path: pathname,
      destination: "/contact",
    });
    trackConversionStep("contact_form_start", {
      surface,
      page_path: pathname,
    });
  }

  return (
    <>
      <div className="pointer-events-none fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5">
        {isOpen ? (
          <button
            type="button"
            aria-label="Close booking support"
            className="pointer-events-auto absolute -top-3 right-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#173247] text-white shadow-[0_18px_40px_rgba(23,50,71,0.24)] transition hover:bg-[#234760]"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        ) : null}

        {isOpen ? (
          <div className="pointer-events-auto mb-4 w-[min(24rem,calc(100vw-2rem))] max-h-[calc(100svh-6.5rem)] overflow-y-auto overscroll-contain rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(240,247,250,0.98)_100%)] shadow-[0_30px_80px_rgba(23,50,71,0.2)] backdrop-blur-xl">
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
                  onClick={() => handleWhatsAppClick("floating_popup")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#173247] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#234760]"
                >
                  <MessageCircle size={16} />
                  WhatsApp Now
                </Link>
                <Link
                  href="/contact"
                  onClick={() => handleContactClick("floating_popup")}
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
        ) : null}

        <button
          type="button"
          aria-label={isOpen ? "Hide booking support" : "Open booking support"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="pointer-events-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#173247] text-white shadow-[0_24px_60px_rgba(23,50,71,0.26)] transition hover:scale-[1.03] hover:bg-[#234760] active:scale-[0.98]"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {isOpen ? (
        <button
          type="button"
          aria-label="Close booking support popup"
          className="fixed inset-0 z-[69] bg-[rgba(11,24,33,0.16)] backdrop-blur-[1px]"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
