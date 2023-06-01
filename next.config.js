/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const prodConfig = {
  output: "export",
//  assetPrefix: '/personnal-website', // Replace with the subdirectory path of your GitHub Pages site
//  basePath: '/personnal-website', // Replace with the subdirectory path of your GitHub Pages site
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    disableStaticImages: true,
  },
//  basePath: __dirname + '/out', // Replace with the subdirectory path of your GitHub Pages site
//  assetPrefix: __dirname + '/out', // Replace with the subdirectory path of your GitHub Pages site
  reactStrictMode: true,
}

if (isProd) {
  Object.assign(nextConfig, prodConfig);
}

module.exports = nextConfig
