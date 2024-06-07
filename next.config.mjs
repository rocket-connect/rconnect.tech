/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    METADATA_BASE_URL: process.env.METADATA_BASE_URL,
    GA_KEY: process.env.GA_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
