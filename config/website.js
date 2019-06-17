const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Jalal Azimi', // Navigation and Site Title
  siteTitleAlt: 'Jalal Azimi', // Alternative Site title for SEO
  siteTitleShort: 'Jalal Azimi', // short_name for manifest
  siteHeadline: 'a designer and developer', // Headline for schema.org JSONLD
  siteUrl: 'https://jalalazimi.github.io/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: "I'm a software engineer ,user interface Developer.",
  author: 'Jalal azimi', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jalalazimi', // Twitter Username
  ogSiteName: 'jalalazimi', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
