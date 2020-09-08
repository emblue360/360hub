const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://embluemail.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.embluemail.com/images/emblue-logo.svg',
    title:
      "360",
    helpUrl: 'https://help.embluemail.com/',
    links: [
      {
        
      }
      // { text: 'Glosario', link: 'https://help.embluemail.com/glosario/' },
      // { text: 'Blog', link: 'http://blog.embluemail.com/' },
      // { text: 'Prueba emBlue', link: 'https://www.embluemail.com/planes.html' },
      // { text: 'Login', link: 'https://app.embluemail.com/' } 
      
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'emBlue', link: 'https://embluemail.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'emBlue | 360 Docs',
    description: 'Documentación del área de 360',
    ogImage: null,
    docsLocation: './content',
    favicon: 'https://www.embluemail.com/apple-touch-icon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#00568F',
      theme_color: '#00568F',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'https://www.embluemail.com/apple-touch-icon.png',
          sizes: `32x32`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
