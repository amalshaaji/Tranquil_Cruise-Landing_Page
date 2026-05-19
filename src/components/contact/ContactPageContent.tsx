"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";
import ContactHouseboatShowcase from "@/components/contact/ContactHouseboatShowcase";
import InnerPageHeader from "@/components/layout/InnerPageHeader";
import FaqSection from "@/components/seo/FaqSection";
import {
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  SERVICE_AREAS,
  WHATSAPP_URL,
} from "@/lib/site";

type ContactIconName = "location" | "phone" | "mail" | "clock";

const contactCards: {
  icon: ContactIconName;
  title: string;
  lines: string[];
  href?: string;
}[] = [
  {
    icon: "location",
    title: "Location",
    lines: [BUSINESS_LOCATION, "Serving the Kerala backwaters"],
  },
  {
    icon: "phone",
    title: "Phone / WhatsApp",
    lines: [BUSINESS_PHONE, "Direct booking support"],
    href: WHATSAPP_URL,
  },
  {
    icon: "mail",
    title: "Email",
    lines: [BUSINESS_EMAIL, "Share dates, guest count, and trip plans"],
    href: `mailto:${BUSINESS_EMAIL}`,
  },
  {
    icon: "clock",
    title: "Hours",
    lines: [BUSINESS_HOURS],
  },
];

function ContactIcon({ name }: { name: ContactIconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    className: "text-teal",
  } as const;

  switch (name) {
    case "location":
      return (
        <svg {...common}>
          <path
            d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M7.5 4.5 10 9l-2 1.7c.9 1.9 2.4 3.4 4.3 4.3L14 13l4.5 2.5-.7 3.2c-.2.8-.9 1.3-1.7 1.2C9.6 19.3 4.7 14.4 4.1 7.9c-.1-.8.4-1.5 1.2-1.7l2.2-.7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m4 8 8 5 8-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

const mapHref = "https://maps.app.goo.gl/qiCGqqA2R2u7nVYK7";
const contactFaqs = [
  {
    question: "How do I book a houseboat or backwater ride?",
    answer:
      "Send us your travel dates, guest count, and preferred experience through WhatsApp, phone, or the enquiry form and we will help you choose the right plan.",
  },
  {
    question: "Can I combine multiple experiences in one booking?",
    answer:
      "Yes. We can help combine houseboats, Shikara rides, country boats, kayaking, rooms, or spa and wellness based on your timing and group.",
  },
  {
    question: "Which areas does Tranquil Cruise serve?",
    answer:
      "We help guests plan experiences across Alleppey, Alappuzha, Kuttanad, Vembanad Lake, and the wider Kerala backwaters.",
  },
] as const;

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const selectedExperience = searchParams.get("experience");
  const selectedOption = searchParams.get("option");
  const isThreeBedroomHouseboat =
    selectedExperience === "houseboat" && selectedOption === "3-bedroom";

  if (isThreeBedroomHouseboat) {
    return (
      <main className="w-full pb-16 pt-8 sm:pb-24 sm:pt-12">
        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <ContactHouseboatShowcase />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="w-full pb-16 sm:pb-24">
      <InnerPageHeader
        eyebrow="Private Enquiries"
        title="Contact Tranquil Cruise for Alleppey bookings."
        description="Share your dates, group details, and the kind of Kerala backwater experience you want. We will help you choose the right houseboat, ride, stay, or wellness plan."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        sideLabel="Planning support"
        sideValue="Reach us directly on WhatsApp, phone, or email for houseboats, scenic rides, backwater rooms, kayaking, and Ayurvedic wellness in Alappuzha."
      />

      <section className="px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-5 shadow-[0_24px_70px_rgba(23,50,71,0.08)] sm:p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-4 border-b border-navy/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/78">
                  Reach Out
                </div>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-sand sm:text-4xl">
                  Everything you need to start the conversation.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-foreground/68 sm:text-base">
                Ask about routes, stays, timing, or custom plans and we will
                help shape a more relaxed Kerala experience around you.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr,1.12fr] lg:items-start">
              <div className="space-y-5">
                <section className="relative overflow-hidden rounded-[28px] border border-gold/25 bg-white px-6 py-7 text-foreground shadow-[0_18px_60px_rgba(23,50,71,0.12)] sm:px-7 sm:py-8">
                  <div className="relative">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                      Booking Contact
                    </div>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight text-balance text-sand">
                      Plan your backwater stay from Alappuzha, Kerala
                    </h2>
                    <div className="mt-6 grid gap-4 rounded-[24px] border border-navy/8 bg-white/80 p-5 shadow-sm shadow-black/5 sm:grid-cols-[1.2fr,0.8fr]">
                      <div>
                        <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/42">
                          Location
                        </div>
                        <p className="mt-2 text-sm leading-7 text-foreground/76">
                          {BUSINESS_LOCATION}
                        </p>
                      </div>
                      <div>
                        <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/42">
                          Hours
                        </div>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {BUSINESS_HOURS}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/66">
                      Use WhatsApp for the fastest booking help, or open Google
                      Maps for a quick location reference while planning your
                      Alleppey visit.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={WHATSAPP_URL}
                        className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
                      >
                        WhatsApp booking
                      </Link>
                      <Link
                        href={mapHref}
                        className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                      >
                        Open map placeholder
                      </Link>
                    </div>
                  </div>
                </section>

                <section className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_16px_50px_rgba(21,37,35,0.06)]">
                  <div className="border-b border-navy/8 bg-[#f3f8fa] px-6 py-5 sm:px-7">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                      Contact Details
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-sand">
                      Reach Tranquil Cruise
                    </h3>
                  </div>

                  <div className="divide-y divide-black/8">
                    {contactCards.map((card) => {
                      const row = (
                        <div className="grid gap-4 px-6 py-5 sm:grid-cols-[auto,9rem,1fr] sm:items-start sm:px-7">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5f8]">
                            <ContactIcon name={card.icon} />
                          </div>
                          <div className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground/42">
                            {card.title}
                          </div>
                          <div className="text-sm leading-7 text-foreground/74">
                            {card.lines.map((line, index) => (
                              <span
                                key={line}
                                className={`block ${
                                  index === 0
                                    ? "font-semibold text-foreground"
                                    : ""
                                }`}
                              >
                                {line}
                              </span>
                            ))}
                          </div>
                        </div>
                      );

                      if (card.href) {
                        return (
                          <Link
                            key={card.title}
                            href={card.href}
                            className="block transition hover:bg-gold/8"
                          >
                            {row}
                          </Link>
                        );
                      }

                      return <div key={card.title}>{row}</div>;
                    })}
                  </div>
                </section>

                <section className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                    Booking Process
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                      <div className="text-sm font-semibold text-sand">
                        1. Share your plan
                      </div>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">
                        Tell us your dates, guest count, and whether you want a
                        houseboat, Shikara ride, room, kayak, or spa plan.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                      <div className="text-sm font-semibold text-sand">
                        2. Get the right option
                      </div>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">
                        We help you compare routes, boats, stays, and timings
                        so the itinerary fits your group and pace.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                      <div className="text-sm font-semibold text-sand">
                        3. Confirm your booking
                      </div>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">
                        Once you are happy with the plan, we confirm the
                        experience details and next booking steps.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="rounded-[28px] border border-navy/10 bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                    Service Areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {SERVICE_AREAS.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-navy/10 bg-[#f4f9fb] px-4 py-2 text-sm font-medium text-foreground/70"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-[28px] border border-dashed border-navy/15 bg-[#f9fcfd] p-6 shadow-[0_16px_50px_rgba(21,37,35,0.04)] sm:p-7">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                    Map Placeholder
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold text-sand">
                    Google Maps embed placeholder
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/68">
                    Use this area for a production Google Maps embed if you want
                    a live map on the contact page. For now, guests can open the
                    map link directly.
                  </p>
                  <Link
                    href={mapHref}
                    className="mt-5 inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                  >
                    Open Google Maps
                  </Link>
                </section>
              </div>

              <section className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(21,37,35,0.08)] transition hover:border-gold/25 sm:p-8">
                <div className="relative">
                  <ContactForm />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Booking FAQs"
        intro="Clear answers before you contact us."
        faqs={[...contactFaqs]}
      />
    </main>
  );
}
