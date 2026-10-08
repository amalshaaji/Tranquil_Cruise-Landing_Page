import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/logo.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f7f3ec", color: "#1f2a26" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", padding: "0 80px" }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#b0734a", textTransform: "uppercase" }}>
            Alleppey · Kerala
          </div>
          <img src={logo} alt={site.name} width={300} height={191} style={{ marginTop: 16 }} />
          <div style={{ fontSize: 36, marginTop: 20, color: "#5f6e67" }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", height: 190, background: "#a3c2b1", alignItems: "flex-end", justifyContent: "center" }}>
          <svg width="520" height="190" viewBox="0 0 520 190">
            <path d="M40 120 L40 100 Q260 -10 480 100 L480 120 Z" fill="#c9a66b" />
            <path d="M190 120 L190 100 Q260 70 330 100 L330 120 Z" fill="#2a2420" />
            <path d="M10 120 Q40 160 110 160 L410 160 Q480 160 510 120 Z" fill="#2a2420" />
            <path d="M10 120 L510 120" stroke="#b8914a" strokeWidth="4" />
          </svg>
        </div>
        <div style={{ display: "flex", height: 14, background: "#b8914a" }} />
      </div>
    ),
    size,
  );
}
