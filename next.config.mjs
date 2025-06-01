/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // During development you might want to set this to false
    ignoreDuringBuilds: true,
  },
  typescript: {
    // During development you might want to set this to false
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable react strict mode for better development
  reactStrictMode: true,
  // This is important for SEO
  poweredByHeader: false,
  // Disable source maps in production for better performance
  productionBrowserSourceMaps: false,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimize bundling for faster builds
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    }
    
    // Disable webpack persistent caching to fix file rename errors
    if (dev) {
      config.cache = false;
    }
    
    return config
  },
  // Add source directory configuration
  distDir: '.next',
}

export default nextConfig
