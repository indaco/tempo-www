import markdownItAnchor from 'markdown-it-anchor';
import { defineConfig } from 'vitepress';
import {
  getVersionFromPackageJson,
  injectNPMPackageVersion,
} from '../../src/lib/plugins/injectVersion';
import { nav } from './nav';
import { sidebar } from './sidebar';

export default defineConfig({
  title: 'tempo',
  description:
    'Streamline asset management and scaffold components — all in Go.',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://tempo.indaco.dev',
  },

  // Use .html on URLs
  cleanUrls: false,

  themeConfig: {
    // Nav bar
    nav: nav,

    // Sidebar
    sidebar: sidebar,

    // Social links
    socialLinks: [{ icon: 'github', link: 'https://github.com/indaco/tempo' }],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        "Copyright © 2025-present by <a href='https://github.com/indaco' target='_blank'>indaco</a>.",
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/indaco/tempo-www/edit/main/docs/:path',
    },

    // Search (using local search)
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    // Last updated
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },

    // Outline
    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    // External link icon
    externalLinkIcon: true,
  },
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  markdown: {
    config(md) {
      md.use(markdownItAnchor);
    },
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    plugins: [injectNPMPackageVersion(getVersionFromPackageJson())],
  },
});
