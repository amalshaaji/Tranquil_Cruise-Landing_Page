import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

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
    <main className="w-full">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f1e3] via-[#fbf8f1] to-transparent px-4 py-12 sm:px-6 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top center, rgba(215,166,79,0.14), transparent 30%), radial-gradient(circle at left bottom, rgba(111,146,136,0.08), transparent 34%)",
          }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-teal/80 sm:text-sm">
            Private Enquiries
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-sand sm:text-5xl md:text-6xl">
            Plan your Kerala escape with a more personal touch.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
            Share your preferred dates, group details, and the experience you have
            in mind. We will help shape a calm, well-planned backwater itinerary.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55">
            <span className="rounded-full border border-gold/20 bg-white/70 px-4 py-2">
              Houseboats
            </span>
            <span className="rounded-full border border-gold/20 bg-white/70 px-4 py-2">
              Shikkara Rides
            </span>
            <span className="rounded-full border border-gold/20 bg-white/70 px-4 py-2">
              Tailored Stays
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,1.12fr] lg:items-start">
          <div className="space-y-5">
            <section className="relative overflow-hidden rounded-[28px] border border-gold/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(250,245,235,0.98)_42%,rgba(244,239,227,1)_100%)] px-6 py-7 text-foreground shadow-[0_18px_60px_rgba(165,121,60,0.12)] sm:px-7 sm:py-8">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(215,166,79,0.18), transparent 30%), radial-gradient(circle at right center, rgba(111,146,136,0.12), transparent 24%)",
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
                  <span className="rounded-full border border-gold/20 bg-white/80 px-3 py-1.5">
                    5.0 Rating
                  </span>
                  <span className="rounded-full border border-gold/20 bg-white/80 px-3 py-1.5">
                    90 Reviews
                  </span>
                  <span className="rounded-full border border-gold/20 bg-white/80 px-3 py-1.5">
                    Boat Tour Agency
                  </span>
                </div>
                <div className="mt-6 grid gap-4 rounded-[24px] border border-black/8 bg-white/72 p-5 shadow-sm shadow-black/5 sm:grid-cols-[1.2fr,0.8fr]">
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
                    className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-sm shadow-gold/20 transition hover:bg-[#e0b45d]"
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
              <div className="border-b border-black/8 bg-[linear-gradient(180deg,rgba(251,247,238,0.95)_0%,rgba(255,255,255,1)_100%)] px-6 py-5 sm:px-7">
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
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(215,166,79,0.18),rgba(111,146,136,0.12))]">
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
                        className="block transition hover:bg-gold/5"
                      >
                        {row}
                      </Link>
                    );
                  }

                  return <div key={card.title}>{row}</div>;
                })}
              </div>
            </section>
          </div>

          <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(21,37,35,0.08)] transition hover:border-gold/20 sm:p-8">
            <ContactForm />
          </section>
        </div>
      </section>
    </main>
  );
}
