import type { NextConfig } from "next";

// A fully static site: `next build` writes plain HTML, CSS and JS to out/.
// Security headers live in vercel.json, since static export can't set them here.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  poweredByHeader: false,
  // The image optimiser needs a server, so photos are served as the WebP files in public/.
  images: { unoptimized: true },
};

export default nextConfig;
