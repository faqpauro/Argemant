import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },      // <--- Agregado
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'picsum.photos' },  // <--- Agregado
    ],
  },
};

export default nextConfig;