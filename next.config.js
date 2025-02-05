/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.shadcn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pro.shadcn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shadcn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig 