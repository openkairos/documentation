const versionSlug = process.env.DOCS_VERSION ?? 'next';
const siteUrl = process.env.SITE_URL ?? 'https://example.com';
const baseUrl = process.env.DOCS_BASE_URL ?? '/';

const versions = (process.env.DOCS_VERSIONS ?? versionSlug)
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const uniqueVersions = [...new Set(versions.concat(versionSlug))];

const versionItems = uniqueVersions.map((version) => ({
  label: version,
  to: version === versionSlug ? baseUrl : `/docs/${version}/`,
}));

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
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kairos Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
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
      copyright: `Copyright © ${new Date().getFullYear()} Kairos.`,
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
