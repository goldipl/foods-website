const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/sniadania/',
        destination: '/breakfasts-page/',
      },
    ];
  },
};

export default nextConfig;
