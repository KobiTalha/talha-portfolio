import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lint runs in CI as its own step; production builds stay focused on types + bundling.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
