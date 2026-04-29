/** @type {import("next").NextConfig} */
const nextConfig = {
  // Static export for SPA-like deployment on any static host (Vercel/static hosting).
  output: "export",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;

