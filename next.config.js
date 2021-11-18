const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['website-api.noxksa.com'],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}


