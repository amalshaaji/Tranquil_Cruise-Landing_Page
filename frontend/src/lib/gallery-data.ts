import type { Mood, Subject } from "@/components/ui/Illustrations";

export type Category = "houseboats" | "shikkara" | "kayaking" | "rooms" | "backwaters";
export type Ratio = "portrait" | "landscape" | "square" | "wide";

export type Placeholder =
  | { kind: "scene"; mood: Mood; subject: Subject; sunX?: number; sunY?: number; scale?: number; subjectX?: number }
  | { kind: "room"; tone?: "light" | "dark" };

export type GalleryItem = {
  /** Also the file name looked up in public/gallery/ (e.g. backwaters-1.webp) when `src` isn't given. */
  id: string;
  category: Category;
  caption: string;
  alt: string;
  ratio: Ratio;
  /** Explicit image path, for photos that live elsewhere (e.g. /images/…). */
  src?: string;
  /** CSS object-position to keep the subject in frame when the photo is cropped. */
  position?: string;
  /** Illustration shown until a real photo exists. Optional once you have photos. */
  placeholder?: Placeholder;
};

/** Filter chips. Categories with no items are hidden automatically. */
export const categories: Array<{ value: Category | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "houseboats", label: "Houseboats" },
  { value: "shikkara", label: "Shikkara" },
  { value: "kayaking", label: "Kayaking" },
  { value: "rooms", label: "Rooms" },
  { value: "backwaters", label: "Backwaters" },
];

export const ratioClass: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

// To add a photo: put <id>.webp in public/gallery/ (npm run images does the resizing),
// then add an entry here. Order below is the order shown.
export const galleryItems: GalleryItem[] = [
  { id: "houseboats-sunset", category: "houseboats", ratio: "landscape", src: "/images/hero-sunset.webp", position: "45% 55%", caption: "Sunset cruise", alt: "A traditional houseboat silhouetted against a blazing orange sunset on the Alleppey backwaters, with birds in the sky" },
  { id: "backwaters-1", category: "backwaters", ratio: "portrait", caption: "Dusk on the canal", alt: "Pink and orange dusk sky over a quiet backwater canal framed by coconut palms" },
  { id: "kayaking-river", category: "kayaking", ratio: "portrait", src: "/images/kayaking-river.webp", position: "50% 70%", caption: "Paddling to the bridge", alt: "Two kayakers in red life jackets paddling an orange kayak on a calm river toward a bridge, with green forested hills under a cloudy sky" },
  { id: "backwaters-2", category: "backwaters", ratio: "portrait", caption: "Sunset ride home", alt: "Passengers silhouetted in a boat heading down a canal toward a pink and orange sunset, with a leaning coconut palm" },
  { id: "houseboats-lake", category: "houseboats", ratio: "wide", src: "/images/houseboats-lake.webp", position: "72% 50%", caption: "Houseboats on the misty lake", alt: "Two traditional kettuvallam houseboats gliding across a still, misty Alleppey lake dotted with water hyacinth" },
  { id: "backwaters-12", category: "backwaters", ratio: "portrait", caption: "Palms over the canal", alt: "Coconut palms leaning over a narrow canal under a deep blue sky, with the bow of a boat at the bottom of the frame" },
  { id: "shikkara-canal", category: "shikkara", ratio: "portrait", src: "/images/shikkara-canal.webp", position: "50% 62%", caption: "Shikkara and palms", alt: "A canopied shikkara boat gliding past coconut palms and a moored houseboat on a calm Alleppey backwater in warm evening light" },
  { id: "backwaters-13", category: "backwaters", ratio: "portrait", caption: "Down the canal", alt: "The bow of a blue boat gliding down a straight canal beneath a coconut frond, with palms and white-edged banks ahead" },
  { id: "houseboats-calm", category: "houseboats", ratio: "portrait", src: "/images/hero-calm-lake.webp", position: "50% 70%", caption: "A houseboat on glassy water", alt: "A houseboat cruising across a calm, glassy lake under a soft grey sky on the Alleppey backwaters" },
  { id: "backwaters-3", category: "backwaters", ratio: "portrait", caption: "Golden hour on the water", alt: "Low sun over a still backwater canal, with two passengers in the bow of a boat and palm-lined banks reflected in the water" },
  { id: "backwaters-14", category: "backwaters", ratio: "portrait", caption: "Paddy edge", alt: "A boat gliding along a canal beside bright green paddy fields, with leafy branches overhead and a clear blue sky" },
  { id: "backwaters-4", category: "backwaters", ratio: "portrait", caption: "Hazy morning sun", alt: "A small boat on a canal beneath a pale sun in a hazy orange sky, with a footbridge and palms beyond" },
  { id: "backwaters-15", category: "backwaters", ratio: "portrait", caption: "Coconut palms", alt: "Tall coconut palms against a clear blue sky above a green bank by the water" },
  { id: "backwaters-16", category: "backwaters", ratio: "portrait", caption: "Morning traffic", alt: "A canal bordered by dense green trees, with a loaded village boat ahead and its reflection in the water" },
  { id: "backwaters-5", category: "backwaters", ratio: "portrait", caption: "Into the green", alt: "Passengers gliding down a narrow canal lined with palms, banana leaves and a moss-covered stone wall" },
  { id: "backwaters-17", category: "backwaters", ratio: "portrait", caption: "Sun through the trees", alt: "Low sun glowing through trees over a canal, with a wooden boat moored on water hyacinth and passengers in a boat ahead" },
  { id: "backwaters-6", category: "backwaters", ratio: "portrait", caption: "Village canal", alt: "Passengers on a boat travelling down a narrow village canal under a canopy of palms and trees" },
  { id: "backwaters-18", category: "backwaters", ratio: "portrait", caption: "Setting sun, straight ahead", alt: "A canal leading toward a low orange sun beneath a clear sky, with silhouetted palms and passengers in the bow of a boat" },
  { id: "backwaters-7", category: "backwaters", ratio: "portrait", caption: "Last light", alt: "A boat with passengers heading up a tree-lined canal toward a soft peach evening sky" },
  { id: "backwaters-19", category: "backwaters", ratio: "portrait", caption: "Golden hour, village canal", alt: "Passengers in a boat on a narrow canal toward the setting sun, with a colourful moored boat and palms on the bank" },
  { id: "backwaters-8", category: "backwaters", ratio: "portrait", caption: "Hello from the canal", alt: "A guest waving and laughing from a boat on a backwater canal, with a leaning coconut palm behind" },
  { id: "backwaters-9", category: "backwaters", ratio: "portrait", caption: "Calm water, monsoon sky", alt: "Two guests seated in the bow of a blue boat on a wide, calm backwater beneath heavy monsoon clouds" },
  { id: "backwaters-10", category: "backwaters", ratio: "portrait", caption: "Christmas on the canal", alt: "Two guests in Santa hats smiling in the bow of a blue boat beside green paddy fields and palms" },
  { id: "backwaters-11", category: "backwaters", ratio: "portrait", caption: "Warm light, quiet water", alt: "A guest in sunglasses seated in a boat in warm evening light, with a canal bank and palms behind" },
];
