/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: true
  },
  images: {
    domains: [
      'scontent.fhan2-4.fna.fbcdn.net',
      'scontent.fhan2-2.fna.fbcdn.net',
      's3-us-west-2.amazonaws.com',
      'matrixzj.github.io'
    ]
  }
}

module.exports = nextConfig
