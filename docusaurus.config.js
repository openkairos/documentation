const {
  buildVersionNavbarItems,
} = require('./scripts/build-version-navbar-items');
const {resolveDocsRuntime} = require('./scripts/resolve-docs-runtime');

const {
  versionSlug,
  siteUrl,
  baseUrl,
  docsSiteBase,
  versions,
} = resolveDocsRuntime();

const versionItems = buildVersionNavbarItems({
  versions,
  versionSlug,
  siteUrl,
  baseUrl,
  docsSiteBase,
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kairos Docs',
  tagline: 'End-user documentation',
  favicon: 'img/favicon.svg',
  url: siteUrl,
  baseUrl,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Kairos Docs',
      logo: {
        alt: 'Kairos Docs',
        src: 'img/favicon.svg',
        href: baseUrl,
      },
      items: [
        {
          to: '/docs/intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: `Version: ${versionSlug}`,
          position: 'right',
          items: versionItems,
        },
        {
          href: 'https://github.com/openkairos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © 2026 Kairos.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
      },
    ],
  ],
};

module.exports = config;
