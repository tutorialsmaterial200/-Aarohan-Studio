import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    unoptimized: false,
    domains: [],
  },

  // Handle any potential routing issues
  trailingSlash: false,
};

export default nextConfig;
