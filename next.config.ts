import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      // SEO: many crawlers request exactly /favicon.ico – serve from /favicon/
      { source: "/favicon.ico", destination: "/favicon/favicon.ico" },
    ];
  },
};

export default nextConfig;
