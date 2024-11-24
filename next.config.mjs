// next.config.js

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Static export setting
  images: {
    unoptimized: true,  // Disable Image Optimization
  },
};

export default nextConfig;
