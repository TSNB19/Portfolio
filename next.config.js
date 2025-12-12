const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
}