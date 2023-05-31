/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: "export",
//  basePath: __dirname + '/out',
//  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
