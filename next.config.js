/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: true
  },
  webpack: (config, { isServer }) => {
    // Needed if your cache script is asynchronous
    config.experiments = {
      topLevelAwait: true,
    }

    if (isServer) {
      return {
        ...config,
        // This is what allows us to add a node script via NextJS's server
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              cache: './cache/cache.ts',
            })
          })
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
