import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normalize public URLs to the non-trailing-slash form used in canonicals.
  trailingSlash: false,
};

export default nextConfig;
