/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable source maps for production to save memory
  productionBrowserSourceMaps: false,

  experimental: {
    // Limit concurrency to reduce memory usage on Vercel
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
