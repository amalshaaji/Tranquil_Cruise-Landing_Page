import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for SPA-like deployment on any static host (Vercel/static hosting).
  output: "export",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
  // Normalize public URLs to the non-trailing-slash form used in canonicals.
  trailingSlash: false,
};

export default nextConfig;
