/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  images: {
    unoptimized: true,
    domains: ['TSNB19.github.io'],
    path: '/Portfolio/',
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
}

module.exports = nextConfig