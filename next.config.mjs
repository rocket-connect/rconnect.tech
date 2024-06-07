/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    METADATA_BASE_URL: process.env.METADATA_BASE_URL,
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
