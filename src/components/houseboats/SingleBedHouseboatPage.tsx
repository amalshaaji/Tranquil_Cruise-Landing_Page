"use client";

import Link from "next/link";
import FaqSection from "@/components/seo/FaqSection";
import ImageGallery from "@/components/listings/ImageGallery";
import { singleBedFaqs as faqs } from "@/components/houseboats/houseboatFaqs";
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppHref(
  buildInquiryMessage({
    experience: "houseboat",
    option: "single-bed",
    message: "Please share availability, pricing, and route options for this stay.",
  }),
);

const galleryImages = [
  "/images/single-bed-gallery/exterior-view.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_29__1_.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_28__1_.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_29__2_.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30__1_.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_28.jpeg",
  "/images/single-bed-gallery-v2/WhatsApp_Image_2026-05-04_at_19_44_30__2_.jpeg",
];

const featureList = [
  "Private air-conditioned bedroom",
  "Attached washroom",
  "Shared lounge and upper-deck access",
  "Best suited to one or two guests",
];

const materialMood = [
  "Warm wood interiors with a more intimate houseboat scale",
  "Soft room-focused layout designed for quieter overnight stays",
  "Classic Kerala backwater setting with scenic open-deck moments",
];

const suitabilityNotes = [
  {
    label: "Best for",
    value: "Couples, solo travellers, and shorter private stays",
  },
  {
    label: "Stay style",
    value: "Compact, calm, and easy to settle into",
  },
  {
    label: "Route feel",
    value: "Slow cruising, quieter scenery, and softer evenings on the water",
  },
];

const detailSections = [
  {
    title: "What sets it apart",
    body:
      "This single-bedroom houseboat is the quieter, more intimate option in the collection. It works well for guests who want the experience of a private Alleppey houseboat without moving into a larger family or group layout.",
  },
  {
    title: "Features",
    items: featureList,
  },
  {
    title: "Stay mood",
    items: materialMood,
  },
  {
    title: "Sizing",
    items: [
      "Single bedroom layout",
      "Comfortable for 1 to 2 guests",
      "A strong fit for overnight cruising and shorter romantic stays",
    ],
  },
] as const;

export default function SingleBedHouseboatPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#eff4f7_0%,#dce6ee_100%)] pb-20 text-foreground">
      <section className="mx-auto max-w-[1440px] px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:gap-16">
          <div className="min-w-0">
            <ImageGallery images={galleryImages} title="Single Bed Houseboat" />
          </div>

          <div className="min-w-0 xl:pt-6">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
              Single Bed Houseboat
            </div>
            <h1 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[clamp(2.7rem,7vw,5rem)] leading-[0.9] tracking-[-0.05em] text-navy">
              A private backwater stay
              <span className="mt-2 block text-sand/70">for slower, quieter moments.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-foreground/70 sm:text-[1.05rem]">
              Designed for one or two guests, this compact houseboat format keeps the experience
              close, calm, and personal. It is the kind of stay that works best when you want easy
              comfort, scenic cruising, and a more intimate rhythm on the Alleppey backwaters.
            </p>

            <div className="mt-8 text-sm text-sand/65">
              <p>( Private houseboat stay in Alappuzha )</p>
              <p className="mt-2">( Made for compact overnight routes and couple-friendly escapes )</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(47,79,104,0.18)] transition hover:bg-sand"
              >
                Ask availability
              </Link>
              <Link
                href="/houseboats"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-teal/20 bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#e8f0f5]"
              >
                View all houseboats
              </Link>
            </div>

            <div className="mt-10 rounded-[2rem] border border-navy/8 bg-white/90 p-6 shadow-[0_18px_40px_rgba(47,79,104,0.08)] backdrop-blur-sm">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-teal/80">
                Booking guidance
              </div>
              <div className="mt-4 space-y-4">
                {suitabilityNotes.map((note) => (
                  <div key={note.label} className="border-b border-navy/8 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal/80">
                      {note.label}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{note.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-4">
          {detailSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-navy/8 bg-white/92 p-6 shadow-[0_18px_40px_rgba(47,79,104,0.07)] backdrop-blur-sm"
            >
              <h2 className="text-[1.35rem] font-semibold tracking-tight text-navy">
                {section.title}
              </h2>
              {"body" in section ? (
                <p className="mt-4 text-sm leading-7 text-foreground/70">{section.body}</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] bg-[linear-gradient(180deg,#f6f9fb_0%,#e6eef4_100%)] px-4 py-3 text-sm leading-6 text-foreground/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-teal/80">
              The feeling
            </div>
            <h2 className="mt-4 max-w-md font-[var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em] text-navy sm:text-5xl">
              Small in scale, calm in character.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-navy/8 bg-white/92 p-7 shadow-[0_18px_40px_rgba(47,79,104,0.07)] backdrop-blur-sm sm:p-9">
            <p className="text-base leading-8 text-foreground/70 sm:text-lg">
              The appeal of this boat is not excess. It is simplicity done well. You have your own
              room, your own pace, and enough deck space to enjoy the changing light without the
              stay ever feeling too large or too busy. For couples and solo guests, that often ends
              up being exactly the point.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#dbe5ec_0%,#d1dee8_100%)]">
        <FaqSection
          eyebrow="Guest Inquiries"
          title="Questions guests often ask before booking"
          intro="A few practical answers for guests comparing this compact houseboat stay with larger options."
          faqs={faqs}
        />
      </section>
    </main>
  );
}
