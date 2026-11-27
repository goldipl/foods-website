const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    // Images are optimized at build time by next-image-export-optimizer
    // (see the "build" script), which writes resized WebP variants that the
    // <ExportedImage /> component loads via srcset.
    loader: 'custom',
    imageSizes: [64, 128, 256, 384],
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    // Folder with images referenced by path string (e.g. "/img/...").
    // Statically imported images are picked up from .next/static/media.
    nextImageExportOptimizer_imageFolderPath: 'public/img',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

export default nextConfig;
