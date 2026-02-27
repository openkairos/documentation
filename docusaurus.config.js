const versionSlug = process.env.DOCS_VERSION ?? 'next';
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const baseUrl = process.env.DOCS_BASE_URL ?? '/';
const docsSiteBase = process.env.DOCS_SITE_BASE ?? '/';

const normalizeBasePath = (value) => {
  const trimmed = value.trim();
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  const withTrailingSlash = withLeadingSlash.endsWith('/')
      ? withLeadingSlash
      : `${withLeadingSlash}/`;
  return withTrailingSlash.replace(/\/{2,}/g, '/');
};

const versions = (process.env.DOCS_VERSIONS ?? versionSlug).split(',').
    map((value) => value.trim()).
    filter(Boolean);

const uniqueVersions = [...new Set(versions.concat(versionSlug))];
const normalizedSiteUrl = siteUrl.replace(/\/+$/, '');
const normalizedDocsSiteBase = normalizeBasePath(docsSiteBase);
const createVersionTo = (version) => {
  if (version === versionSlug) {
    return `${normalizedSiteUrl}${baseUrl}`;
  }

  return `${normalizedSiteUrl}${normalizedDocsSiteBase}docs/${version}/`;
};

const versionItems = uniqueVersions.map((version) => ({
  label: version,
  to: createVersionTo(version),
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
