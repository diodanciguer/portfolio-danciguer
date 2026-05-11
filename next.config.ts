import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Configure the base path for GitHub Pages
  basePath: isProd ? '/portfolio-danciguer' : '',
  assetPrefix: isProd ? '/portfolio-danciguer/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;