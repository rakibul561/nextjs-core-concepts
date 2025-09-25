import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // ✅ সব hostname allow করবে
      },
      {
        protocol: "http",
        hostname: "**",   // ✅ http লিঙ্কও allow করবে
      },
    ],
  },
};

export default nextConfig;
