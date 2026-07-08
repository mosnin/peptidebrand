import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pub-d37eb4ecf71e4e748779d196910c184d.r2.dev' },
    ],
  },
};

export default nextConfig;
