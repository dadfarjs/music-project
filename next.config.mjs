/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', 'localhost:3000'],
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'samplesongs.netlify.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000', // Ensure this is set correctly
  },
};

export default nextConfig;
