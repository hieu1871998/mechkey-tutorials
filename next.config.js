/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: true
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    return paths;
  }
}

module.exports = nextConfig
