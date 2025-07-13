import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable server-side rendering for all pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
