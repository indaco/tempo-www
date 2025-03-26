import { defineConfig } from 'vitepress';
import markdownItAnchor from 'markdown-it-anchor';
import {
  getVersionFromPackageJson,
  injectNPMPackageVersion,
} from '../../src/lib/plugins/injectVersion';
import { sidebar } from './sidebar';
import { nav } from './nav';

export default defineConfig({
  title: 'tempo',
  description:
    'Streamline asset management and scaffold components — all in Go.',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://tempo.indaco.dev',
  },
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    outline: [2, 3],
    socialLinks: [{ icon: 'github', link: 'https://github.com/indaco/tempo' }],
    editLink: {
      pattern: 'https://github.com/indaco/tempo-www/edit/main/:path',
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/indaco/tempo#license">MIT License</a>.',
      copyright:
        'Copyright © 2025 <a href="https://github.com/indaco">Mirco Veltri</a>.',
    },
  },
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  markdown: {
    config(md) {
      md.use(markdownItAnchor);
    },
  },
  vite: {
    plugins: [injectNPMPackageVersion(getVersionFromPackageJson())],
  },
});
