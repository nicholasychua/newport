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
}

export default nextConfig
