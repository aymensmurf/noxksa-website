const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const nextConfig = {
  images: {
    domains: ['localhost', '35.193.29.67']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)
/*module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
}
*/
