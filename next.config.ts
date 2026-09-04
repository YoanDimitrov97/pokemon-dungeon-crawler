import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.pokemonshowdown.com",
      },
    ],
  },
};

export default nextConfig;
