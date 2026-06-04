import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  outputFileTracingRoot: process.cwd(),
  eslint: {
    // Prevent lint config issues (e.g. flat config compatibility) from blocking production builds.
    ignoreDuringBuilds: true,
  },
  allowedDevOrigins: [
    "192.168.137.1",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
