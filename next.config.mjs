/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Keeps ignoring TS errors (remove if you want strict checking)
  },
  images: {
    unoptimized: true,  // Already set—required for static export
  },
  output: 'export',  // NEW: Enables static site generation and export
  trailingSlash: true,  // NEW: Adds trailing slashes to URLs (helps with static hosting)
};

export default nextConfig;