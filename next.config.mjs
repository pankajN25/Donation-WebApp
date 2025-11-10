/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // For static site
  trailingSlash: true,
  // NEW: Allow cross-origin dev requests
  allowedDevOrigins: ['192.168.1.12'],  // Add your IP or 'localhost' if needed
};

export default nextConfig;
