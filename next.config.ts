import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable client-side rendering
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
