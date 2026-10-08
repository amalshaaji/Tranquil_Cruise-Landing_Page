import { cn } from "@/lib/cn";

/* Flat, hand-drawn style scenes of the backwaters. Swap for photography later. */

export type Mood = "dawn" | "noon" | "dusk" | "night";
export type Subject = "houseboat" | "shikara" | "kayak" | "none";

const palettes: Record<Mood, { sky: string; sun: string; far: string; palm: string; water: string; ripple: string }> = {
  dawn: { sky: "#f1dfc9", sun: "#d98a5f", far: "#8aa592", palm: "#5d7c69", water: "#cdd8ca", ripple: "#f7f3ec" },
  noon: { sky: "#e2eadf", sun: "#f7f3ec", far: "#6f957f", palm: "#3d5a4c", water: "#a3c2b1", ripple: "#e6efe8" },
  dusk: { sky: "#ebbd92", sun: "#c2573a", far: "#5b7260", palm: "#2c4337", water: "#cf936f", ripple: "#ebbd92" },
  night: { sky: "#243a30", sun: "#ece4d6", far: "#182a21", palm: "#101d17", water: "#1c3027", ripple: "#3d5a4c" },
};

function Palm({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" strokeLinecap="round">
      <path d="M0 0 C3 -28 -2 -58 5 -88" strokeWidth="3.2" />
      <g strokeWidth="2.4">
        <path d="M5 -88 q-28 -6 -44 16" />
        <path d="M5 -88 q-24 -22 -42 -16" />
        <path d="M5 -88 q-8 -26 -24 -30" />
        <path d="M5 -88 q28 -6 44 16" />
        <path d="M5 -88 q24 -22 42 -16" />
        <path d="M5 -88 q8 -26 24 -30" />
      </g>
    </g>
  );
}

/** Kettuvallam: dark hull, arched thatch roof. Origin at the waterline, centred. */
function Houseboat() {
  const weave = Array.from({ length: 15 }, (_, i) => -84 + i * 12);
  return (
    <g>
      <path d="M-118 -18 Q-108 12 -72 12 L72 12 Q108 12 118 -18 Z" fill="#2a2420" />
      <path d="M-118 -18 L118 -18" stroke="#b8914a" strokeWidth="2" />
      <path d="M-92 -18 L-92 -34 Q0 -96 92 -34 L92 -18 Z" fill="#c9a66b" />
      <g stroke="#a9884f" strokeWidth="1.4">
        {weave.map((x) => (
          <path key={x} d={`M${x} -18 L${x} ${-30 - (1 - Math.abs(x) / 90) * 28}`} />
        ))}
      </g>
      <path d="M-34 -18 L-34 -34 Q0 -50 34 -34 L34 -18 Z" fill="#2a2420" opacity=".88" />
      <path d="M-100 -18 L-100 -40 M100 -18 L100 -40" stroke="#2a2420" strokeWidth="2.5" />
      <path d="M0 -92 L0 -112" stroke="#2a2420" strokeWidth="2" />
      <path d="M0 -112 L14 -108 L0 -104 Z" fill="#b0734a" />
    </g>
  );
}

/** Shikara: slender hull with upturned ends and a fringed canopy. */
function Shikara() {
  return (
    <g>
      <path d="M-104 -22 Q-70 12 0 12 Q70 12 104 -22 Q64 -6 0 -6 Q-64 -6 -104 -22 Z" fill="#b0734a" />
      <path d="M-40 -8 L-40 -46 M40 -8 L40 -46" stroke="#2a2420" strokeWidth="2.5" />
      <path d="M-52 -46 L52 -46 L46 -58 L-46 -58 Z" fill="#3d5a4c" />
      <g fill="#b8914a">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M${-52 + i * 13} -46 l6.5 9 l6.5 -9 Z`} />
        ))}
      </g>
      <path d="M-30 -8 L-30 -16 L30 -16 L30 -8 Z" fill="#f7f3ec" opacity=".9" />
      <g stroke="#2a2420" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <circle cx="80" cy="-42" r="4.5" fill="#2a2420" />
        <path d="M80 -37 L78 -16 M78 -30 L94 -8" />
        <path d="M94 -8 L102 14" />
      </g>
    </g>
  );
}

/** Single kayak with a double-bladed paddle. */
function Kayak() {
  return (
    <g>
      <path d="M-70 -4 Q0 -22 70 -4 Q0 12 -70 -4 Z" fill="#c2573a" />
      <path d="M-70 -4 Q0 -14 70 -4" stroke="#f7f3ec" strokeWidth="1.5" fill="none" />
      <g stroke="#2a2420" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <circle cx="0" cy="-34" r="5" fill="#2a2420" />
        <path d="M0 -28 L0 -10" />
        <path d="M-34 -2 L34 -48" strokeWidth="2" />
      </g>
      <ellipse cx="-36" cy="0" rx="9" ry="3.5" fill="#2a2420" transform="rotate(-34 -36 0)" />
      <ellipse cx="36" cy="-50" rx="9" ry="3.5" fill="#2a2420" transform="rotate(-34 36 -50)" />
    </g>
  );
}

const subjects: Record<Subject, () => React.ReactElement | null> = {
  houseboat: Houseboat,
  shikara: Shikara,
  kayak: Kayak,
  none: () => null,
};

export function Scene({
  mood = "dawn",
  subject = "houseboat",
  label,
  className,
  viewBox = "0 0 400 300",
  sunX = 300,
  sunY = 92,
  scale = 1,
  subjectX = 200,
}: {
  mood?: Mood;
  subject?: Subject;
  label: string;
  className?: string;
  viewBox?: string;
  sunX?: number;
  sunY?: number;
  scale?: number;
  subjectX?: number;
}) {
  const c = palettes[mood];
  const Subject = subjects[subject];
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className={cn("block h-full w-full", className)}
    >
      <rect x="-50" y="-50" width="500" height="400" fill={c.sky} />
      {mood === "night" &&
        [[40, 40], [90, 90], [150, 30], [230, 60], [340, 40], [370, 110], [20, 130]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="1.4" fill={c.sun} />
        ))}
      <circle cx={sunX} cy={sunY} r={mood === "night" ? 16 : 34} fill={c.sun} />

      <path
        d="M-10 190 L-10 170 Q40 158 90 168 T180 166 T270 170 T360 164 T420 170 L420 190 Z"
        fill={c.far}
      />
      <g stroke={c.palm} fill="none">
        <Palm x={34} y={184} s={0.75} />
        <Palm x={62} y={184} s={0.55} />
        <Palm x={318} y={184} s={0.7} />
        <Palm x={352} y={184} s={0.9} />
      </g>

      <rect x="-10" y="190" width="420" height="120" fill={c.water} />
      <g stroke={c.ripple} strokeWidth="1.6" strokeLinecap="round" opacity=".8">
        <g className="drift">
          <path d="M20 206 h46 M250 204 h60 M120 240 h50 M310 262 h56" />
        </g>
        <g className="drift-slow">
          <path d="M70 224 h36 M210 252 h70 M340 230 h40 M14 266 h60" />
        </g>
      </g>

      <g transform={`translate(${subjectX} 218) scale(${scale})`}>
        <g className="bob">
          <Subject />
        </g>
        <path d="M-90 16 h180" stroke={c.ripple} strokeWidth="1.6" strokeLinecap="round" opacity=".8" />
      </g>
    </svg>
  );
}

export function PalmSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="-60 -110 130 120" className={className} aria-hidden="true" stroke="currentColor" fill="none">
      <Palm x={0} y={0} />
    </svg>
  );
}

/** Cabin interior: bed, lamp and a window onto the water. */
export function RoomScene({
  label,
  tone = "light",
  className,
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const wall = tone === "light" ? "#ece4d6" : "#d8cfbf";
  const blanket = tone === "light" ? "#3d5a4c" : "#b0734a";
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={cn("block h-full w-full", className)}
    >
      <rect width="400" height="300" fill={wall} />
      <rect y="230" width="400" height="70" fill="#c9a66b" />
      <g stroke="#a9884f" strokeWidth="1.2">
        <path d="M0 250 H400 M0 272 H400" />
      </g>
      {/* window */}
      <rect x="236" y="48" width="120" height="110" fill="#f1dfc9" />
      <rect x="236" y="112" width="120" height="46" fill="#a3c2b1" />
      <circle cx="320" cy="82" r="14" fill="#d98a5f" />
      <g stroke="#5d7c69" fill="none" strokeWidth="2" strokeLinecap="round">
        <path d="M262 112 C264 98 262 88 266 76 M266 76 q-12 -3 -18 6 M266 76 q10 -3 16 6" />
      </g>
      <rect x="236" y="48" width="120" height="110" fill="none" stroke="#2a2420" strokeWidth="4" />
      <path d="M296 48 V158" stroke="#2a2420" strokeWidth="3" />
      {/* bed */}
      <rect x="36" y="110" width="12" height="130" fill="#2a2420" />
      <rect x="36" y="150" width="190" height="14" fill="#2a2420" opacity="0" />
      <rect x="48" y="180" width="178" height="50" rx="4" fill="#f7f3ec" />
      <rect x="48" y="196" width="178" height="34" fill={blanket} />
      <path d="M48 196 H226" stroke="#b8914a" strokeWidth="2.5" />
      <rect x="56" y="162" width="56" height="22" rx="9" fill="#f7f3ec" stroke="#d8cfbf" />
      <rect x="120" y="162" width="56" height="22" rx="9" fill="#f7f3ec" stroke="#d8cfbf" />
      <path d="M52 230 v14 M222 230 v14" stroke="#2a2420" strokeWidth="5" />
      {/* lamp */}
      <rect x="250" y="206" width="52" height="36" fill="#2a2420" />
      <path d="M276 206 V176" stroke="#2a2420" strokeWidth="3" />
      <path d="M262 176 L290 176 L284 156 L268 156 Z" fill="#e0a43a" />
    </svg>
  );
}
