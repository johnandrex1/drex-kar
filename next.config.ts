import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Only use basePath when building for GitHub Pages (production)
  basePath: isProd ? "/main" : "",
  assetPrefix: isProd ? "/main/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
