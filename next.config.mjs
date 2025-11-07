// next.config.js

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
