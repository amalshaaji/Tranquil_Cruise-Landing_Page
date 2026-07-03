"use client";

import Image from "next/image";
import { type FormEvent, type ReactNode, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import type { PlaceReview } from "@/lib/google-place-reviews";
import {
  buildInquiryMessage,
  buildTripNotesTemplate,
  buildWhatsAppHref,
} from "@/lib/whatsapp";

type HeroSectionProps = {
  rating: number | null;
  reviewCount: number | null;
  reviews: PlaceReview[];
};

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label
      className={`flex min-h-[4.25rem] flex-col justify-center px-4 py-3 text-[#2f4f68] ${className}`.trim()}
    >
      <span className="mb-1.5 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-[#6d8fa6]">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function HeroSection(props: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [destination, setDestination] = useState("Alappuzha");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("2");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = buildInquiryMessage({
      experience: "custom",
      guests,
      date: startDate || "",
      message: `Destination: ${destination}; Check-in date: ${startDate || "Flexible"}; Check-out date: ${endDate || "Flexible"}; Room(s): ${rooms}. ${buildTripNotesTemplate("custom")}`,
    });

    window.open(buildWhatsAppHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#8fb3d1] text-white sm:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rainbow-houseboat.webp"
          alt="Alappuzha houseboat view across the Kerala backwaters"
          fill
          preload
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="object-cover object-[55%_58%] sm:object-[center_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,31,0.68)_4%,rgba(7,20,31,0.34)_36%,rgba(7,20,31,0.18)_64%,rgba(7,20,31,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,31,0.1)_0%,rgba(7,20,31,0.08)_24%,rgba(7,20,31,0.16)_52%,rgba(7,20,31,0.5)_100%)] sm:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-[38svh] bg-[linear-gradient(180deg,rgba(7,20,31,0)_0%,rgba(7,20,31,0.14)_42%,rgba(7,20,31,0.52)_100%)] sm:h-[32svh]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-4 pb-5 pt-24 sm:min-h-screen sm:px-6 sm:pb-8 sm:pt-28 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-sm">
              <Search className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              Beautiful booking search
            </div>
            <h1 className="mt-4 max-w-2xl font-[var(--font-display)] text-[clamp(2.7rem,8vw,5.75rem)] leading-[0.92] tracking-[-0.06em] text-balance text-white">
              Search, choose, and book your Kerala backwater escape.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Pick your destination, travel dates, and guest count, then send the booking
              request in one clean step.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/12 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#6d8fa6]" aria-hidden="true" />
                {props.rating ? `${props.rating.toFixed(1)} rating` : "Trusted local guidance"}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/12 px-4 py-2 text-sm font-semibold text-white/92 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white/80" aria-hidden="true" />
                {props.reviewCount ? `${props.reviewCount} reviews` : "Verified guest feedback"}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <motion.form
            onSubmit={handleSearch}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-[1.2rem] border border-[#c7dbe4] bg-[rgba(245,250,253,0.96)] shadow-[0_18px_48px_rgba(47,79,104,0.16)] backdrop-blur-sm"
          >
            <div className="grid items-stretch lg:grid-cols-[1.45fr_0.95fr_0.95fr_0.8fr_0.8fr_auto]">
              <Field label="Destination" className="border-b border-[#d6e3eb] lg:border-b-0 lg:border-r">
                <input
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  aria-label="Destination"
                  placeholder="Alappuzha / Alleppey"
                  className="w-full bg-transparent text-[0.98rem] font-medium text-[#2f4f68] outline-none placeholder:text-[#8ca2b3]"
                />
              </Field>

              <Field label="Check-In" className="border-b border-[#d6e3eb] lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4.5 w-4.5 shrink-0 text-[#6d8fa6]" aria-hidden="true" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    aria-label="Start date"
                    className="w-full bg-transparent text-[0.98rem] font-medium text-[#2f4f68] outline-none [color-scheme:light]"
                  />
                </div>
              </Field>

              <Field label="Check-Out" className="border-b border-[#d6e3eb] lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4.5 w-4.5 shrink-0 text-[#6d8fa6]" aria-hidden="true" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    aria-label="End date"
                    className="w-full bg-transparent text-[0.98rem] font-medium text-[#2f4f68] outline-none [color-scheme:light]"
                  />
                </div>
              </Field>

              <Field label="Room" className="border-b border-[#d6e3eb] lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-3">
                  <select
                    value={rooms}
                    onChange={(event) => setRooms(event.target.value)}
                    aria-label="Room count"
                    className="w-full appearance-none bg-transparent text-[0.98rem] font-medium text-[#2f4f68] outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                  </select>
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#6d8fa6]" aria-hidden="true" />
                </div>
              </Field>

              <Field label="Guests" className="border-b border-[#d6e3eb] lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-3">
                  <select
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    aria-label="Guests"
                    className="w-full appearance-none bg-transparent text-[0.98rem] font-medium text-[#2f4f68] outline-none"
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </select>
                  <Users className="h-4 w-4 shrink-0 text-[#6d8fa6]" aria-hidden="true" />
                </div>
              </Field>

              <button
                type="submit"
                className="min-h-[4.25rem] bg-[#2f4f68] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#1f3444]"
              >
                Book
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
