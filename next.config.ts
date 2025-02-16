import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "www.unspash.com",
      "www.gettyimages.com",
      "www.shutterstock.com",
      "www.dreamstime.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "gettyimages.com",
      },
      {
        protocol: "https",
        hostname: "shutterstock.com",
      },
      {
        protocol: "https",
        hostname: "dreamstime.com",
      },
    ],
  },
};

export default nextConfig;
