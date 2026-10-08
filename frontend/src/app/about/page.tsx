import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Intro } from "@/components/sections/Intro";
import { RowList } from "@/components/sections/RowList";
import { Timeline } from "@/components/sections/Timeline";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Tranquil Cruise",
  description: `Boat tours through the Alleppey backwaters from ${site.jetty}, Pallathuruthy, Alappuzha. Rated ${site.googleRating} from ${site.googleReviewCount} Google reviews.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Made by people from here."
        lead={`Boat tours through the Alleppey backwaters, leaving from ${site.jetty} in Pallathuruthy.`}
        visual={
          // The artwork is a transparent wordmark, so the banner supplies the colour; water lines drift behind it.
          <div className="relative h-full w-full overflow-hidden bg-moss-deep">
            <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-24 w-full text-paper">
              <path className="drift" d="M-40 40 Q 100 10 240 40 T 520 40 T 800 40 T 1080 40 T 1240 40" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
              <path className="drift-slow" d="M-40 70 Q 100 40 240 70 T 520 70 T 800 70 T 1080 70 T 1240 70" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2" />
              <path className="drift" d="M-40 100 Q 100 70 240 100 T 520 100 T 800 100 T 1080 100 T 1240 100" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="2" />
            </svg>
            <ul className="absolute inset-x-4 top-5 z-10 flex flex-wrap justify-center gap-2 text-xs font-medium text-paper sm:top-6">
              {[`★ ${site.googleRating} · ${site.googleReviewCount} Google reviews`, `Departs ${site.jetty}`, site.hours].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/10 px-3.5 py-1.5 backdrop-blur">
                  <span aria-hidden className="size-1.5 rotate-45 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <Image src="/images/logo-mark-cream.png" alt="" width={140} height={77} className="bob absolute left-1/2 top-[22%] h-14 w-auto -translate-x-1/2 sm:h-16" />
            <Image src="/images/about-wordmark.png" alt="Tranquil Cruise" fill priority sizes="480px" className="object-contain" />
          </div>
        }
      />
      <Intro
        eyebrow="Who we are"
        heading="The backwaters, at your pace."
        paragraphs={[
          "Our boat tours leave from Kannita jetty and take you along narrow canals and across the open Vembanad Lake, a unique way to see the backwaters.",
          "Join a guided village walk to learn how the community lives and what they grow. Every tour can be tailored to what you'd like to see.",
        ]}
        facts={[
          ["Based in", site.location],
          ["Departs from", site.jetty],
          ["Hours", site.hours],
          ["Rated", `${site.googleRating} · ${site.googleReviewCount} Google reviews`],
        ]}
        tone="sand"
      />
      <Timeline
        eyebrow="The tour"
        heading="How a tour unfolds."
        tone="paper"
        items={[
          { time: "Step one", title: "Kannita jetty", body: "Every tour leaves from our jetty in Pallathuruthy, where your guide welcomes you aboard." },
          { time: "Step two", title: "Narrow canals", body: "Glide along narrow canals, past village houses and paddy edges that bigger boats can't reach." },
          { time: "Step three", title: "Vembanad Lake", body: "Cross the expansive Vembanad Lake, with the open sky and the far shore all around you." },
          { time: "Step four", title: "A guided village walk", body: "Step ashore to learn how the community lives and what they cultivate." },
          { time: "Always", title: "Shaped around you", body: "Tours can be tailored to your preferences. Tell us what you'd like to see." },
        ]}
      />
      <RowList
        tone="sand"
        eyebrow="How we work"
        heading="Three promises."
        rows={[
          { title: "Unhurried", body: "No fixed itinerary. The captain follows the weather, and you set the pace." },
          { title: "Tailored to you", body: "Tell us what you'd like to see, and we shape the route and the day around it." },
          { title: "Close to village life", body: "Guided village walks, with stories of how the community lives and farms." },
        ]}
      />
    </>
  );
}
