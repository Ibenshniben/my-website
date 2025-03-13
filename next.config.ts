import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },
  scripts: {
    domains: ['www.chatbase.co'],
  },
}

export default nextConfig;
