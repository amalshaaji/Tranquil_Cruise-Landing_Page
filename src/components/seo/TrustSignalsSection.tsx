import Link from "next/link";
import {
  BUSINESS_HOURS,
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  BUSINESS_PHONE_LINK,
  SERVICE_AREAS,
  WHATSAPP_URL,
} from "@/lib/site";

const trustCards = [
  {
    eyebrow: "Direct booking support",
    title: "Talk to the operator directly",
    body: `Call ${BUSINESS_PHONE} or message on WhatsApp for route help, availability, and booking guidance without waiting on a generic form reply.`,
    primaryHref: WHATSAPP_URL,
    primaryLabel: "WhatsApp us",
    secondaryHref: BUSINESS_PHONE_LINK,
    secondaryLabel: "Call now",
  },
  {
    eyebrow: "Location and coverage",
    title: "Based in Alappuzha, planning across the backwaters",
    body: `${BUSINESS_LOCATION} with booking help for ${SERVICE_AREAS.slice(0, 4).join(", ")}, and nearby Kerala backwater routes.`,
    primaryHref: "/contact",
    primaryLabel: "View contact details",
    secondaryHref: "/about",
    secondaryLabel: "About Tranquil Cruise",
  },
  {
    eyebrow: "Real review proof",
    title: "Check public reviews before you commit",
    body: "Use the reviews page to see Google review highlights and verify the latest public feedback before you lock dates or route preferences.",
    primaryHref: "/reviews",
    primaryLabel: "See verified reviews",
    secondaryHref: "/about",
    secondaryLabel: "See operator story",
  },
] as const;

const trustPoints = [
  "Private planning support during 8:00 AM to 8:00 PM daily",
  "Safety basics such as life jackets and practical guidance are confirmed before trip day",
  "Refund and cancellation details are visible on-site before booking",
  "Public review verification is available through the live reviews hub",
] as const;

export default function TrustSignalsSection({
  title = "Trust signals that help guests book with more confidence",
  intro = "These details are here for guests who want clear operator identity, practical support details, and visible proof before making a booking decision.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-[#f4f8fa] px-4 py-12 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-navy/8 bg-white p-6 shadow-[0_18px_40px_rgba(23,50,71,0.06)] sm:rounded-[2.6rem] sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <div>
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-teal-600/80">
              Trust and Support
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/68 sm:text-base">
              {intro}
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-gold/20 bg-[#edf5f8] p-5">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
              Booking support window
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              {BUSINESS_HOURS}
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/68">
              Best for quick route questions, pricing checks, boarding details, and help choosing between houseboats, shikkara rides, country boats, stays, and wellness plans.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.8rem] border border-navy/8 bg-[#f8fbfd] p-5 shadow-[0_12px_28px_rgba(23,50,71,0.04)] sm:p-6"
            >
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                {card.eyebrow}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-sand">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/68">
                {card.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={card.primaryHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink"
                >
                  {card.primaryLabel}
                </Link>
                <Link
                  href={card.secondaryHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/12 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-teal/30 hover:bg-[#f5fafc]"
                >
                  {card.secondaryLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-navy/8 bg-[linear-gradient(180deg,#173247_0%,#234760_100%)] p-6 text-white shadow-[0_18px_40px_rgba(23,50,71,0.14)] sm:p-8">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#a8d8d7]">
            Before booking
          </div>
          <ul className="mt-5 grid gap-4 lg:grid-cols-2">
            {trustPoints.map((item) => (
              <li
                key={item}
                className="rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-white/84"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
