import type { Service } from "@/lib/enquiry";
import type { PhotoSpec } from "@/components/ui/Photo";
import type { Mood, Subject } from "@/components/ui/Illustrations";
import type { FaqItem } from "@/components/sections/Faq";
import type { Row } from "@/components/sections/RowList";
import type { TimelineItem } from "@/components/sections/Timeline";

// Placeholder copy and details — replace with real operating information.
export type Experience = {
  /** Real photo for the page hero; falls back to the illustrated scene when absent. */
  photo?: PhotoSpec;
  /** Label for a booking button in the hero; it opens the enquiry form for this service. */
  heroCta?: string;
  /** Photos that slide in the hero, in place of the single photo. */
  slides?: PhotoSpec[];
  /** Hero image height: "half" is half the slideshow height; "card" is a small picture. */
  heroSize?: "tall" | "half" | "card";
  /** Small line beside the hero booking button. */
  heroCtaNote?: string;
  seo: { title: string; description: string; path: string; name: string };
  service: Service;
  eyebrow: string;
  title: string;
  lead: string;
  scene: { mood: Mood; subject: Subject; label: string; scale?: number };
  intro: { eyebrow: string; heading: string; paragraphs: string[]; facts: Array<readonly [string, string]> };
  options?: { eyebrow: string; heading: string; lead?: string; rows: Array<Omit<Row, "visual"> & { subject?: Subject; mood?: Mood }> };
  timeline?: { heading: string; items: TimelineItem[] };
  includes: { heading: string; items: string[] };
  faqs: FaqItem[];
  cta: { heading: string; label: string };
};

export const houseboats: Experience = {
  photo: { src: "/images/houseboats-lake.webp", alt: "Two traditional kettuvallam houseboats gliding across a still, misty Alleppey lake dotted with water hyacinth", position: "72% 50%" },
  seo: { title: "Alleppey Houseboat Stays", description: "Private kettuvallam houseboat stays on the Alleppey backwaters. One to seven air-conditioned bedrooms, a local crew and fresh Kerala meals.", path: "/houseboats", name: "Houseboat stay" },
  service: "houseboat",
  eyebrow: "Houseboats",
  title: "A kettuvallam of your own.",
  lead: "Overnight and multi-night journeys on a private houseboat, with a crew who cook, steer and quietly take care of everything.",
  scene: { mood: "dawn", subject: "houseboat", label: "Houseboat at dawn", scale: 1.25 },
  intro: {
    eyebrow: "The boat",
    heading: "Built the old way, fitted for rest.",
    paragraphs: [
      "Our boats are woven from bamboo and coir over a jackwood hull, the way kettuvallams have been made for centuries. Inside, air-conditioned cabins and an open front deck.",
      "There is no fixed route. The captain reads the weather and the water, and you decide when to stop.",
    ],
    facts: [
      ["Bedrooms", "1 to 8"],
      ["Crew", "Captain, cook, host"],
      ["Cruising hours", "12 pm – 9 am"],
    ],
  },
  options: {
    eyebrow: "Choose your boat",
    heading: "Sized to your party.",
    rows: [
      { title: "One bedroom", body: "An intimate boat for two, with a front deck and a dining table by the water.", meta: "2 guests" },
      { title: "Two bedrooms", body: "Our most-loved size: two cabins, a shared lounge and a sun deck above.", meta: "4 guests" },
      { title: "Three to five bedrooms", body: "For families and friends travelling together, with a wide upper deck.", meta: "6 – 10 guests" },
    ],
  },
  includes: {
    heading: "Everything on board.",
    items: [
      "Private boat, crew of three",
      "Three Kerala meals, fresh-cooked",
      "Welcome drink on arrival",
      "Air-conditioning at night",
      "Evening tea and snacks",
      "Fishing-village stop on request",
      "Drinking water and linen",
      "Parking at the jetty",
    ],
  },
  faqs: [
    { q: "Is the boat really private?", a: "Yes. Your party has the whole boat and crew for the length of your stay." },
    { q: "Can we eat vegetarian or vegan?", a: "Of course. Tell us when you enquire and the cook will plan around it." },
    { q: "Is it suitable for children and elders?", a: "Yes. Decks are railed and the water is calm; boarding is by a wide, gentle ramp." },
    { q: "What if it rains?", a: "Monsoon cruising is beautiful and the boats are fully covered. We simply adjust timings." },
  ],
  cta: { heading: "Reserve your houseboat.", label: "Check dates" },
};

export const dayCruise: Experience = {
  seo: { title: "Alleppey Day Cruise by Houseboat", description: "A private day cruise on the Alleppey backwaters, 11 am to 4 pm, with a traditional Kerala lunch cooked on board and tea on deck.", path: "/day-cruise", name: "Day cruise" },
  service: "day-cruise",
  eyebrow: "Day cruise",
  title: "One unhurried day.",
  lead: "A single day afloat, with lunch cooked on board and the canals to yourselves.",
  heroSize: "card",
  slides: [
    { src: "/images/day-cruise-dusk.webp", alt: "A two-deck houseboat gliding across still blue water at dusk, its windows glowing amber and reflected in the lake", position: "50% 62%" },
    { src: "/images/premium-7br-exterior.webp", alt: "A long two-deck houseboat on the water at sunset, with a lit upper-deck lounge", position: "50% 50%" },
    { src: "/images/premium-2br-exterior.webp", alt: "A houseboat cruising across open water at dusk, with palms along the far bank", position: "50% 62%" },
    { src: "/images/premium-4br-exterior.webp", alt: "A houseboat gliding along a tree-lined bank, with an open upper deck and thatched roofs", position: "30% 55%" },
    { src: "/images/day-cruise-jetty.webp", alt: "A houseboat at the jetty on the Alleppey backwaters, its bow hung with marigold garlands and the upper deck trimmed with flowers", position: "50% 24%" },
  ],
  heroCta: "Book your day cruise",
  heroCtaNote: "11 am – 4 pm · Lunch cooked on board · No payment online",
  scene: { mood: "noon", subject: "houseboat", label: "Houseboat at midday", scale: 1.25 },
  intro: {
    eyebrow: "The day",
    heading: "Short on time, not on calm.",
    paragraphs: [
      "A private houseboat takes you out from our jetty into the open lake and then the quiet canals beyond.",
      "Lunch is cooked fresh on board while you drift. There is nothing to plan and nowhere to be.",
    ],
    facts: [
      ["Duration", "11 am – 4 pm"],
      ["Meals", "Lunch, tea and snacks"],
      ["Best for", "A day trip or a first visit"],
    ],
  },
  timeline: {
    heading: "How the day unfolds.",
    items: [
      { time: "11:00", title: "Welcome", body: "Board at the jetty with tender coconut and a quick word with your captain." },
      { time: "11:45", title: "Into the canals", body: "Leave the lake behind for narrow waterways, village jetties and paddy edges." },
      { time: "13:00", title: "Lunch on deck", body: "Fish curry, thoran, pappadam and red rice, served as the boat moves." },
      { time: "15:00", title: "Tea and fritters", body: "Banana fritters and strong tea while the afternoon light softens." },
      { time: "16:00", title: "Back ashore", body: "Return to the jetty as the day cools." },
    ],
  },
  includes: {
    heading: "Included in your day.",
    items: ["Private houseboat and crew", "Traditional Kerala lunch", "Welcome coconut", "Afternoon tea and snacks", "Drinking water", "Shaded seating and sun deck"],
  },
  faqs: [
    { q: "Can we start earlier or later?", a: "Yes, within reason. Tell us what suits you and we'll adjust the boat's schedule." },
    { q: "Is alcohol allowed?", a: "Please ask when you enquire — we'll explain what is permitted on board." },
    { q: "Do we need to book ahead?", a: "In season, yes. Off-season we can often arrange a day cruise at short notice." },
  ],
  cta: { heading: "Spend a day on the water.", label: "Plan a day cruise" },
};

export const shikkara: Experience = {
  photo: { src: "/images/shikkara-side.webp", alt: "A hand-painted shikkara boat in swirling orange, blue and yellow, moored on a quiet backwater canal under tall coconut palms", position: "50% 88%" },
  seo: { title: "Shikkara Boat Rides in Alleppey", description: "Glide through narrow Alleppey canals on a cushioned, canopied shikkara at sunrise or golden hour, steered by a local boatman.", path: "/shikkara", name: "Shikkara ride" },
  service: "shikkara",
  heroCta: "Book your shikkara ride",
  heroCtaNote: "About 2 hours · Sunrise or golden hour · No payment online",
  eyebrow: "Shikkara",
  title: "Narrow canals, softly.",
  lead: "A slender shikkara slips into waterways no houseboat can reach.",
  scene: { mood: "dusk", subject: "shikara", label: "Shikkara at sunset", scale: 1.25 },
  intro: {
    eyebrow: "The ride",
    heading: "Close to the water, close to the village.",
    paragraphs: [
      "A hand-poled shikkara moves almost without sound. Past toddy tappers, duck herds and houses with their steps in the water.",
      "Cushioned seats, a fringed canopy, and a boatman who has known these canals since childhood.",
    ],
    facts: [
      ["Duration", "2 hours, longer on request"],
      ["Best at", "Early morning or golden hour"],
      ["Includes", "Tea and snacks"],
    ],
  },
  options: {
    eyebrow: "Choose your light",
    heading: "Two kinds of quiet.",
    rows: [
      { title: "Sunrise", body: "Mist on the water, kingfishers, and the first fishing boats going out.", meta: "6:00 am", subject: "shikara", mood: "dawn" },
      { title: "Golden hour", body: "Long amber light across the lake, ending as the village lamps come on.", meta: "4:30 pm", subject: "shikara", mood: "dusk" },
    ],
  },
  includes: {
    heading: "On your shikkara.",
    items: ["Private boat and boatman", "Cushioned seating and canopy", "Tea and local snacks", "Drinking water", "Stops at village jetties"],
  },
  heroSize: "card",
  slides: [
    { src: "/images/shikkara-side.webp", alt: "A hand-painted shikkara boat in swirling orange, blue and yellow, moored on a quiet backwater canal under tall coconut palms", position: "50% 88%" },
    { src: "/images/shikkara-bow.webp", alt: "The brightly painted bow of a shikkara boat beside a leaning coconut palm on an open Alleppey lake", position: "40% 72%" },
    { src: "/images/shikkara-seats.webp", alt: "Under the canopy of a shikkara, with cushioned blue loungers and a patterned runner along the aisle", position: "50% 62%" },
    { src: "/images/shikkara-chairs.webp", alt: "Rows of teak armchairs with navy cushions on green grass matting beneath a woven palm-leaf canopy", position: "50% 80%" },
    { src: "/images/shikkara-palms.webp", alt: "A colourful shikkara moored below a tall coconut palm and a spreading mango tree", position: "50% 94%" }
  ],
  faqs: [
    { q: "How is it different from a houseboat?", a: "It is smaller, quieter and goes where houseboats cannot — a shorter, closer look at village life." },
    { q: "Can we add it to a houseboat stay?", a: "Yes, and many guests do. Mention it when you enquire." },
  ],
  cta: { heading: "Glide into the canals.", label: "Book a shikkara" },
};

export const kayaking: Experience = {
  photo: { src: "/images/kayaking-river.webp", alt: "Two kayakers in red life jackets paddling an orange kayak on a calm river toward a bridge, with green forested hills under a cloudy sky", position: "50% 82%" },
  heroCta: "Book your kayaking trip",
  heroCtaNote: "6:30 am · About 3 hours · No experience needed · No payment online",
  heroSize: "card",
  slides: [
    { src: "/images/kayaking-river.webp", alt: "Two kayakers in red life jackets paddling an orange kayak on a calm river toward a bridge, with green forested hills under a cloudy sky", position: "50% 82%" },
    { src: "/images/kayaking-canal.webp", alt: "Two kayakers paddling a narrow, palm-lined Alleppey canal under a blue sky, with a village house on the bank", position: "50% 60%" },
    { src: "/images/kayaking-group.webp", alt: "A smiling kayaker in a red kayak with a group of friends and more kayaks gathered at the lake's edge under a stormy evening sky", position: "50% 45%" },
    { src: "/images/kayaking-paddler.webp", alt: "A kayaker in a red shirt paddling a red kayak on open backwater at dusk, with a calm blue sky behind", position: "50% 78%" },
  ],
  seo: { title: "Backwater Kayaking in Alleppey", description: "Guided early-morning kayak paddles through calm Alleppey canals, finishing with a Kerala breakfast. Easy, no experience needed.", path: "/kayaking", name: "Backwater kayaking" },
  service: "kayaking",
  eyebrow: "Kayaking",
  title: "Your own pace, your own paddle.",
  lead: "Guided morning paddles through the narrowest canals, before the heat and long before the crowds.",
  scene: { mood: "dawn", subject: "kayak", label: "Kayaker at dawn", scale: 1.5 },
  intro: {
    eyebrow: "The paddle",
    heading: "Easy water, early hours.",
    paragraphs: [
      "The backwaters are flat and sheltered, ideal for a first paddle. A local guide stays alongside and shares the stories behind every bend.",
      "You'll finish with a Kerala breakfast at a family home on the bank.",
    ],
    facts: [
      ["Start", "6:30 am from our jetty"],
      ["Duration", "About three hours"],
      ["Level", "Easy — no experience needed"],
    ],
  },
  timeline: {
    heading: "A morning on the canals.",
    items: [
      { time: "06:30", title: "Brief and boarding", body: "Fit your life jacket, meet your guide and choose a single or double kayak." },
      { time: "07:00", title: "Into the narrows", body: "Paddle quiet canals as the village wakes — washing steps, tea stalls, ducks." },
      { time: "08:30", title: "Breakfast ashore", body: "Appam and egg curry in a family kitchen on the water's edge." },
      { time: "09:30", title: "Return", body: "A gentle paddle back to the jetty." },
    ],
  },
  includes: {
    heading: "Included.",
    items: ["Kayak, paddle and life jacket", "Local guide", "Kerala breakfast", "Drinking water", "Dry bag for phones"],
  },
  faqs: [
    { q: "I've never kayaked. Is that fine?", a: "Yes. The route is calm and your guide stays close the whole way." },
    { q: "What should I bring?", a: "A hat, sunscreen and clothes you don't mind getting a little wet." },
  ],
  cta: { heading: "Join a morning paddle.", label: "Reserve a spot" },
};
