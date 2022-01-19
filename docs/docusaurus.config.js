// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARCHEthic',
  tagline: 'Welcome to the Internet of Trust' ,
  url: 'localhost',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archethic-foundation', // Usually your GitHub org/user name.
  projectName: 'archethic-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ARCHEthic',
        logo: {
          alt: 'ARCHEthic Logo',
          src: 'img/archethic-white2.png',
        },
        items: [
          {
            label: "Learn",
            to: "learn/about-archethic/archethic-intro",
            activeBaseRegex: '^/learn/.*'
          },
          {
            href: 'https://github.com/archethic-foundation/archethic-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'ARCHEthic Node',
                href: 'https://github.com/archethic-foundation/archethic-node',
              },
              {
                label: 'ARCHEthic Javascript SDK',
                href: 'https://github.com/archethic-foundation/libjs',
              },
              {
                label: 'ARCHEthic Wallet',
                href: 'https://github.com/archethic-foundation/archethic-wallet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARCHEthic Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      'content-docs',
      {
        id: 'learn',
        path: 'docs/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./docs/learn/sidebars.js'),

        // General config
        editUrl: 'https://github.com/archethic-foundation/archethic-docs/edit/master/',
        showLastUpdateTime: true,
      }
    ]
  ]
};

module.exports = config;
