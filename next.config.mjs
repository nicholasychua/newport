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
  // Configure turbo
  experimental: {
    // Enable turbo features
    turbo: {
      loaders: {
        // Provide specific options for mdx-loader
        '.mdx': {
          // Your Turbopack loader options if needed
        },
      },
      // Reduce logging
      logLevel: 'error',
    },
  },
}

export default nextConfig
