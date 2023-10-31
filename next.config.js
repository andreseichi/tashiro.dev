/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "simpleicons.org",
      },
      {
        hostname: "media.discordapp.net",
      },
      {
        hostname: "**.github.com",
      },
    ],
  },
};

module.exports = nextConfig;
