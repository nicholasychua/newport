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
  // Simple turbopack config without invalid properties
  turbopack: {
    // Add valid turbopack options here if needed
  },
  experimental: {
    // Other experimental features can go here if needed
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    }
    return config
  },
  // Add source directory configuration
  distDir: '.next',
}

export default nextConfig
