/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const prodConfig = {
  output: "export",
  images: {
    disableStaticImages: true,
  },
//  assetPrefix: '/personnal-website', // Replace with the subdirectory path of your GitHub Pages site
//  basePath: '/personnal-website', // Replace with the subdirectory path of your GitHub Pages site
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

if (isProd) {
  Object.assign(nextConfig, prodConfig);
}

module.exports = nextConfig
