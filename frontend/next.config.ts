import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   experimental: {
    serverComponentsExternalPackages: ['hltv', 'got-scraping', 'header-generator'],
  },
};

export default nextConfig;
