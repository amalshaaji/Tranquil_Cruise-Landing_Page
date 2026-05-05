import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import InnerPageHeader from "@/components/layout/InnerPageHeader";

type ContactIconName = "location" | "phone" | "mail" | "clock" | "instagram";

const contactCards: {
  icon: ContactIconName;
  title: string;
  lines: string[];
  href?: string;
}[] = [
  {
    icon: "location",
    title: "Location",
    lines: [
      "8/308B, Chungam Road, Pallathuruthy,",
      "chungam, Alappuzha, Kerala 688011",
    ],
    href: "https://maps.app.goo.gl/9pHo2hY7kWP4MCW28",
  },
  {
    icon: "phone",
    title: "WhatsApp",
    lines: ["+91 79940 73491", "Direct planning support"],
    href: "https://wa.me/917994073491",
  },
  {
    icon: "mail",
    title: "Email",
    lines: ["info@tranquilcruise.com", "support@tranquilcruise.com"],
    href: "mailto:info@tranquilcruise.com",
  },
  {
    icon: "instagram",
    title: "Instagram",
    lines: ["@tra.nquil__cruise", "Follow our latest backwater moments"],
    href: "https://www.instagram.com/tra.nquil__cruise?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: "clock",
    title: "Hours",
    lines: ["Open 24 hours"],
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
    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
        </svg>
      );
  }
}

const mapHref = "https://maps.app.goo.gl/9pHo2hY7kWP4MCW28";

export default function ContactPage() {
  return (
    <main className="w-full pb-16 sm:pb-24">
      <InnerPageHeader
        eyebrow="Private Enquiries"
        title="Tell us how you want the backwaters to feel."
        description="Share your dates, group details, and the kind of Kerala experience you are hoping for. We will help shape a journey that feels calm, personal, and beautifully paced."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        sideLabel="Planning support"
        sideValue="Reach us directly on WhatsApp or email for houseboats, scenic rides, stays, and custom backwater plans shaped around your pace."
      />

      <section className="px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-navy/10 bg-[linear-gradient(180deg,rgba(248,251,252,0.94)_0%,rgba(237,245,248,0.94)_100%)] p-5 shadow-[0_24px_70px_rgba(23,50,71,0.08)] sm:p-6 lg:p-8">
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
            <section className="relative overflow-hidden rounded-[28px] border border-gold/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(242,248,251,0.98)_42%,rgba(231,241,246,1)_100%)] px-6 py-7 text-foreground shadow-[0_18px_60px_rgba(23,50,71,0.12)] sm:px-7 sm:py-8">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(143,179,209,0.24), transparent 30%), radial-gradient(circle at right center, rgba(111,149,171,0.12), transparent 24%)",
                }}
              />
              <div className="relative">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/75">
                  Visit Our Location
                </div>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-balance text-sand">
                  Tranquil Cruise, Alappuzha
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/68">
                  <span className="rounded-full border border-gold/20 bg-white/85 px-3 py-1.5">
                    5.0 Rating
                  </span>
                  <span className="rounded-full border border-gold/20 bg-white/85 px-3 py-1.5">
                    90 Reviews
                  </span>
                  <span className="rounded-full border border-gold/20 bg-white/85 px-3 py-1.5">
                    Personal travel planning
                  </span>
                </div>
                <div className="mt-6 grid gap-4 rounded-[24px] border border-navy/8 bg-white/80 p-5 shadow-sm shadow-black/5 sm:grid-cols-[1.2fr,0.8fr]">
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/42">
                      Address
                    </div>
                    <p className="mt-2 text-sm leading-7 text-foreground/76">
                      8/308B, Chungam Road, Pallathuruthy, chungam, Alappuzha,
                      Kerala 688011
                    </p>
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/42">
                      Hours
                    </div>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      Open 24 hours
                    </p>
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/66">
                  Use Google Maps for live directions, review highlights, and fast
                  access to our boat tour agency details before you call or send
                  your enquiry.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={mapHref}
                    className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-[#a5c1d8]"
                  >
                    Open in Google Maps
                  </Link>
                  <Link
                    href="https://wa.me/917994073491"
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_16px_50px_rgba(21,37,35,0.06)]">
              <div className="border-b border-navy/8 bg-[linear-gradient(180deg,rgba(241,247,250,0.95)_0%,rgba(255,255,255,1)_100%)] px-6 py-5 sm:px-7">
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
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(143,179,209,0.2),rgba(111,149,171,0.12))]">
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
                              index === 0 ? "font-semibold text-foreground" : ""
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
                Why Guests Reach Out
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                  <div className="text-sm font-semibold text-sand">Route help</div>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    Find the right backwater pace for your trip.
                  </p>
                </div>
                <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                  <div className="text-sm font-semibold text-sand">Stay advice</div>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    Choose between houseboats, rooms, or quieter combinations.
                  </p>
                </div>
                <div className="rounded-[1.4rem] bg-[#f4f9fb] p-4">
                  <div className="text-sm font-semibold text-sand">Custom plans</div>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    Shape timing, guest count, and experience style around you.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(21,37,35,0.08)] transition hover:border-gold/25 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(143,179,209,0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(111,149,171,0.09), transparent 30%)",
              }}
            />
            <div className="relative">
              <ContactForm />
            </div>
          </section>
        </div>
          </div>
        </div>
      </section>
    </main>
  );
}
