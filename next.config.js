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
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/cache.js')
    }

    return config
  },
  resolve: {
    extensions: [".svg"],
  },
  module: {
      rules: [
          {
              test: /\.svg$/,
              use: [
                  {
                      loader: "svg-inline-loader",
                      options: {
                          removeSVGTagAttrs: false,
                      },
                  },
              ],
          }
      ]
  }
}

module.exports = nextConfig
