import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Checklist } from "@/components/sections/Checklist";
import { Faq } from "@/components/sections/Faq";
import { HomestayVilla } from "@/components/rooms/HomestayVilla";
import { homestays } from "@/lib/homestays";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Homestays & Rooms in Alleppey",
  description:
    "Stay on land beside the backwaters: a private pool villa and a heritage Kerala homestay in Alleppey, with air-conditioned rooms and home-cooked meals.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms"
        title="Sleep to the sound of water."
        lead="Two homestays beside the backwaters: a private pool villa and a heritage Kerala home. Quiet rooms, soft linen and a kitchen that cooks for you."
        links={homestays.map((h) => ({ label: h.name, href: `#${h.id}` }))}
      />
      {homestays.map((stay, i) => (
        <HomestayVilla
          key={stay.id}
          stay={stay}
          tone={i % 2 === 0 ? "paper" : "sand"}
          flip={i % 2 === 1}
        />
      ))}
      <Checklist
        heading="At both stays."
        eyebrow="Standard"
        tone="paper"
        items={[
          "Cotton linen and towels",
          "Mosquito netting on request",
          "Private bathroom, hot water",
          "Air-conditioning",
          "Reading lamps and sockets",
          "Welcome water and fruit",
        ]}
      />
      <Faq
        tone="sand"
        items={[
          {
            q: "Are the rooms air-conditioned?",
            a: "Yes. Every bedroom at both homestays is air-conditioned, with a ceiling fan as well.",
          },
          {
            q: "Does every room have a private bathroom?",
            a: "Yes, each with hot water.",
          },
          {
            q: "Can we choose a twin or a double bed?",
            a: "Most rooms have a double bed. Tell us when you enquire and we'll arrange twin beds where we can.",
          },
          {
            q: "Which stay should we choose?",
            a: "The Kayal Pool Villa suits a couple who want privacy and a pool. The Tharavadu Heritage Homestay suits families and small groups who like a traditional Kerala home. Tell us your party and we'll suggest the best fit.",
          },
        ]}
      />
    </>
  );
}
