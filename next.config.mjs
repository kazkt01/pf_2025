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
  // Disable SWC minification (use Terser or skip) to reduce memory usage
  swcMinify: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
    // Optimize analyzing heavy libraries to save memory
    optimizePackageImports: [
      '@react-three/drei', 
      '@heroui/react', 
      'framer-motion', 
      'three'
    ],
  },
};

export default nextConfig;
