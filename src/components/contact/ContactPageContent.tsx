"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";
import ContactHouseboatShowcase from "@/components/contact/ContactHouseboatShowcase";
import InnerPageHeader from "@/components/layout/InnerPageHeader";
import FaqSection from "@/components/seo/FaqSection";
import {
  BUSINESS_ADDRESS_CANONICAL,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_PHONE,
  GOOGLE_MAPS_URL,
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
    lines: [BUSINESS_ADDRESS_CANONICAL, "Serving the Kerala backwaters"],
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

const mapHref = GOOGLE_MAPS_URL;
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
        description="Share your dates, group details, and the kind of Kerala backwater experience you want. We will help you choose the right Alappuzha houseboat, ride, stay, or wellness plan."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        sideLabel="Planning support"
        sideValue="Reach us directly on WhatsApp, phone, or email for Alappuzha houseboats, scenic rides, backwater rooms, kayaking, and Ayurvedic wellness."
      />

      <section className="bg-[linear-gradient(180deg,#f8fbfd_0%,#eef5f7_100%)] px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
            <div className="space-y-5">
              <section className="relative overflow-hidden rounded-[2rem] border border-[#d5e4e8] bg-[linear-gradient(140deg,#183247_0%,#234760_45%,#2e6178_100%)] px-6 py-7 text-white shadow-[0_24px_70px_rgba(23,50,71,0.16)] sm:px-7 sm:py-8">
                <div className="absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-[-2rem] left-[-1rem] h-32 w-32 rounded-full bg-[#7ecdc0]/18 blur-2xl" />
                <div className="relative">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b9dbe4]">
                    Booking Contact
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-balance text-white">
                    Everything you need to start the conversation.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/76 sm:text-base">
                    Ask about routes, stays, timing, or custom plans and we will help shape a
                    more relaxed Kerala experience around you.
                  </p>

                  <div className="mt-6 grid gap-4 rounded-[1.7rem] border border-white/12 bg-white/10 p-5 backdrop-blur-sm sm:grid-cols-[1.2fr,0.8fr]">
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/58">
                        Location
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/84">
                        {BUSINESS_ADDRESS_CANONICAL}
                      </p>
                    </div>
                    <div>
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/58">
                        Hours
                      </div>
                      <p className="mt-2 text-sm font-semibold text-white">{BUSINESS_HOURS}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={WHATSAPP_URL}
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#173247] transition hover:bg-[#eef6f8]"
                    >
                      WhatsApp booking
                    </Link>
                    <Link
                      href={mapHref}
                      className="inline-flex items-center justify-center rounded-xl border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
                    >
                      Open map
                    </Link>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const content = (
                    <div className="h-full rounded-[1.8rem] border border-[#dbe7ec] bg-white p-5 shadow-[0_14px_34px_rgba(23,50,71,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(23,50,71,0.1)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-[#edf5f8]">
                        <ContactIcon name={card.icon} />
                      </div>
                      <div className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#6f95ab]">
                        {card.title}
                      </div>
                      <div className="mt-3 text-sm leading-7 text-foreground/74">
                        {card.lines.map((line, index) => (
                          <span
                            key={line}
                            className={`block ${index === 0 ? "font-semibold text-foreground" : ""}`}
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  );

                  if (card.href) {
                    return (
                      <Link key={card.title} href={card.href} className="block h-full">
                        {content}
                      </Link>
                    );
                  }

                  return <div key={card.title}>{content}</div>;
                })}
              </section>

              <section className="rounded-[2rem] border border-[#dbe7ec] bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                  Booking Process
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Share your plan",
                      text: "Tell us your dates, guest count, and whether you want a houseboat, Shikara ride, room, kayak, or spa plan.",
                    },
                    {
                      step: "02",
                      title: "Get the right option",
                      text: "We help you compare routes, boats, stays, and timings so the itinerary fits your group and pace.",
                    },
                    {
                      step: "03",
                      title: "Confirm your booking",
                      text: "Once you are happy with the plan, we confirm the experience details and next booking steps.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="grid gap-4 rounded-[1.5rem] border border-[#e4edf1] bg-[#f6fafb] p-4 sm:grid-cols-[auto,1fr]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-teal shadow-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-sand">{item.title}</div>
                        <p className="mt-2 text-sm leading-6 text-foreground/70">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#dbe7ec] bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                  Service Areas
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[#dbe7ec] bg-[#f4f9fb] px-4 py-2 text-sm font-medium text-foreground/70"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#dbe7ec] bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                  Canonical NAP
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-sand">
                  Use one consistent business reference across maps, reviews, and citations
                </h3>
                <div className="mt-5 rounded-[1.6rem] border border-[#dbe7ec] bg-[#f4f9fb] p-5">
                  <p className="text-sm font-semibold leading-7 text-foreground">Tranquil Cruise</p>
                  <p className="text-sm leading-7 text-foreground/72">{BUSINESS_ADDRESS_CANONICAL}</p>
                  <p className="text-sm leading-7 text-foreground/72">{BUSINESS_PHONE}</p>
                  <p className="text-sm leading-7 text-foreground/72">{BUSINESS_EMAIL}</p>
                </div>
              </section>
            </div>

            <div className="space-y-5">
              <section className="relative overflow-hidden rounded-[2rem] border border-[#dbe7ec] bg-white p-6 shadow-[0_18px_60px_rgba(21,37,35,0.08)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#173247_0%,#5cb7aa_100%)]" />
                <div className="relative">
                  <ContactForm />
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#dbe7ec] bg-[#f9fcfd] p-6 shadow-[0_16px_50px_rgba(21,37,35,0.04)] sm:p-7">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                  Location Reference
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-sand">
                  Use Google Maps to verify the Alappuzha base before booking
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/68">
                  If you want a quick location check before calling or messaging, open the map
                  directly and use it alongside the phone, WhatsApp, and email details above.
                </p>
                <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-[#dbe7ec]">
                  <iframe
                    title="Tranquil Cruise Alappuzha map"
                    src="https://www.google.com/maps?q=9.4981,76.3388&z=14&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-72 w-full border-0"
                  />
                </div>
                <Link
                  href={mapHref}
                  className="mt-5 inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                >
                  Open Google Maps
                </Link>
              </section>

              <section className="rounded-[2rem] border border-[#dbe7ec] bg-white p-6 shadow-[0_16px_50px_rgba(21,37,35,0.06)] sm:p-7">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal/75">
                  Local Booking Pages
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-sand">
                  Explore the local pages that support our Alappuzha houseboat booking coverage
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      href: "/alappuzha-houseboat",
                      title: "Alappuzha Houseboat Guide",
                      text: "Start here for the main local booking pillar with routes, room fit, and stay planning.",
                    },
                    {
                      href: "/alappuzha-houseboat-booking",
                      title: "Alappuzha Houseboat Booking",
                      text: "Use this page if your search is focused on booking steps, inclusions, and how to choose the right format.",
                    },
                    {
                      href: "/houseboat-in-alappuzha",
                      title: "Houseboat In Alappuzha",
                      text: "Open this if you want a destination-first page comparing who each local houseboat stay fits best.",
                    },
                    {
                      href: "/boarding-point-alappuzha-houseboat",
                      title: "Boarding Point Alappuzha Houseboat",
                      text: "Useful when the main question is where the trip begins and how to plan arrival smoothly.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[1.4rem] border border-[#dbe7ec] bg-[#f4f9fb] p-4 transition hover:bg-white"
                    >
                      <div className="text-sm font-semibold text-sand">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">{item.text}</p>
                    </Link>
                  ))}
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
