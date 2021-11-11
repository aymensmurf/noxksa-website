/*const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const nextConfig = {
  images: {
    domains: ['localhost', '35.193.29.67']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)
*/
/*module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
}
*/
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '35.193.29.67'],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },

}


