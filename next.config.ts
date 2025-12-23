import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },

  // Disable source maps for production to save memory
  productionBrowserSourceMaps: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
