/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["samplesongs.netlify.app"],
  },
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000", // Ensure this is set correctly
  },
};

export default nextConfig;
