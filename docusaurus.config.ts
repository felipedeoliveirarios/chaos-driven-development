import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkDropCap from './src/remark/drop-cap';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chaos-Driven Development',
  tagline: 'Um bestiário dos "monstros" que encontrei durante minha jornada como desenvolvedor (e como lidei com eles)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://chaos-driven-development.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'equipment',
        path: 'equipment',
        routeBasePath: 'equipment',
        sidebarPath: './sidebarsEquipment.ts',
        beforeDefaultRemarkPlugins: [remarkDropCap],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'bestiary',
          routeBasePath: 'bestiary',
          sidebarPath: './sidebarsBestiary.ts',
          beforeDefaultRemarkPlugins: [remarkDropCap],
        },
        blog: {
          showReadingTime: true,
          beforeDefaultRemarkPlugins: [remarkDropCap],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Chaos-Driven Development',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Bestiário',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'equipmentSidebar',
          docsPluginId: 'equipment',
          position: 'left',
          label: 'Equipamento',
        },
        {
          href: 'https://github.com/felipedeoliveirarios/chaos-driven-development',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Chaos-Driven Development. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
