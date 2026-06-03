export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  location: string;
  mood: "calm" | "sunset" | "shared" | "night";
  layout: "hero" | "tall" | "wide" | "compact";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-refresh/01-canal-view.jpeg",
    alt: "A solo guest drifting through a narrow palm-lined canal in a country boat",
    title: "Quiet canal drift",
    caption:
      "A slower backwater lane where the palms lean in and the ride feels tucked away from the busier stretches.",
    location: "Palm-lined canal",
    mood: "calm",
    layout: "hero",
  },
  {
    src: "/images/gallery-refresh/02-canal-view-close.jpeg",
    alt: "Close view from a canoe moving through a reflective canal lined with coconut trees",
    title: "First light on the water",
    caption:
      "A close, immersive angle that shows how still the canals feel when the morning light is soft and low.",
    location: "Backwater bend",
    mood: "calm",
    layout: "tall",
  },
  {
    src: "/images/gallery-refresh/03-bridge-canal.jpeg",
    alt: "Group passengers riding under a low bridge on a village canal",
    title: "Bridge crossing, village side",
    caption:
      "This bridge frame adds a little movement and context, with the boat threading a tighter village channel.",
    location: "Narrow canal bridge",
    mood: "shared",
    layout: "wide",
  },
  {
    src: "/images/gallery-refresh/04-sunset-portrait.jpeg",
    alt: "Passenger taking a portrait photo while riding through a calm evening canal",
    title: "Sunset seat on the boat",
    caption:
      "A portrait-led moment that captures why sunset rides often feel more personal than the wider daytime routes.",
    location: "Golden hour cruise",
    mood: "sunset",
    layout: "compact",
  },
  {
    src: "/images/gallery-refresh/05-open-water-group.jpeg",
    alt: "A full boat of guests cruising under a wide blue sky on open water",
    title: "Open water with a bright sky",
    caption:
      "A brighter daytime scene for guests who want sky, breeze, and a more open feel on the wider routes.",
    location: "Day cruise stretch",
    mood: "shared",
    layout: "wide",
  },
  {
    src: "/images/gallery-refresh/06-bridge-group.jpeg",
    alt: "Guests leaning forward in a boat passing under a bridge on the backwaters",
    title: "Canal bridge, close and low",
    caption:
      "The lower bridge line and tighter framing make this feel more intimate, like a route you discover rather than plan around.",
    location: "Village crossing",
    mood: "calm",
    layout: "compact",
  },
  {
    src: "/images/gallery-refresh/07-sunset-couple.jpeg",
    alt: "A couple smiling and making a heart shape at sunset from a boat",
    title: "A little sunset theatre",
    caption:
      "A warm, playful sunset frame that gives the gallery a more human, celebratory note.",
    location: "Sunset route",
    mood: "sunset",
    layout: "tall",
  },
  {
    src: "/images/gallery-refresh/08-sunset-group.jpeg",
    alt: "Group of travellers riding toward the sunset through a backwater canal",
    title: "Group ride toward the light",
    caption:
      "A classic late-afternoon ride with the sun sitting low enough to turn the whole canal golden.",
    location: "Sunset route",
    mood: "sunset",
    layout: "wide",
  },
  {
    src: "/images/gallery-refresh/09-skyline-cruise.jpeg",
    alt: "A small group cruising a calm canal under a tall blue sky with palms overhead",
    title: "Palm corridor in daylight",
    caption:
      "A clean daylight route with open sky, long reflections, and a calmer village-side mood.",
    location: "Village canal",
    mood: "calm",
    layout: "tall",
  },
  {
    src: "/images/gallery-refresh/10-blue-sky-route.jpeg",
    alt: "A seated group riding under the roof of a covered boat on a bright canal route",
    title: "Covered deck, open route",
    caption:
      "This photo leans into the boat interior itself, which helps the gallery show comfort as well as scenery.",
    location: "Private cruise deck",
    mood: "shared",
    layout: "compact",
  },
  {
    src: "/images/gallery-refresh/11-night-boat.jpeg",
    alt: "A smiling couple in a boat during golden hour with orange reflections on the water",
    title: "Sunset heart on the lake",
    caption:
      "One of the most atmospheric images in the set, with warm water, low light, and a clear celebratory mood.",
    location: "Vembanad at dusk",
    mood: "sunset",
    layout: "hero",
  },
  {
    src: "/images/gallery-refresh/12-night-boat-side.jpeg",
    alt: "A small backwater boat lit up with colored lights at night near the shore",
    title: "Night arrival, glowing boat",
    caption:
      "The neon edge gives the gallery a night-time counterpoint so the page is not only about daytime or sunset light.",
    location: "Jetty at night",
    mood: "night",
    layout: "compact",
  },
  {
    src: "/images/gallery-refresh/13-bridge-daylight.jpeg",
    alt: "Guests riding along a calm daylight canal with a bridge and houses nearby",
    title: "Family ride under open sky",
    caption:
      "A softer daytime route that shows how the experiences feel when they are shared with a larger group.",
    location: "Daylight route",
    mood: "shared",
    layout: "wide",
  },
  {
    src: "/images/gallery-refresh/14-palms-daylight.jpeg",
    alt: "A boat moving through a lush canal lined with palms and birds in daylight",
    title: "Palm-framed cruise",
    caption:
      "A greener, more tropical stretch where the water is framed by palms and the route feels especially lush.",
    location: "Green canal",
    mood: "calm",
    layout: "tall",
  },
  {
    src: "/images/gallery-refresh/15-leafy-canal.jpeg",
    alt: "Two passengers drifting under leafy branches through a quiet canal",
    title: "Leafy tunnel calm",
    caption:
      "A final quieter note for the gallery, closing it with a canal tunnel that feels almost completely enclosed by greenery.",
    location: "Quiet backwater bend",
    mood: "calm",
    layout: "compact",
  },
] as const;
