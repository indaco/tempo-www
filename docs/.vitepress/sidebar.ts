import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Guide',
    link: '/guide',
    items: [
      { text: 'Introduction', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Quickstart Demo', link: '/guide/quickstart' },
      { text: 'Usage', link: '/guide/usage' },
      { text: 'Standalone Sync', link: '/guide/standalone-sync' },
    ],
  },
  {
    text: 'CLI Reference',
    link: '/cli',
    items: [
      { text: 'Overview', link: '/cli/' },
      { text: 'init', link: '/cli/init' },
      { text: 'component', link: '/cli/component' },
      { text: 'variant', link: '/cli/variant' },
      { text: 'register', link: '/cli/register' },
      { text: 'sync', link: '/cli/sync' },
    ],
  },
  {
    text: 'Configuration',
    link: '/config',
    items: [
      { text: 'Overview', link: '/config/' },
      { text: 'Options', link: '/config/options' },
      { text: 'Guard Markers', link: '/config/guard-markers' },
      { text: 'User Data', link: '/config/user-data' },
      { text: 'Function Providers', link: '/config/function-providers' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'Overview', link: '/advanced/' },
      { text: 'Templates', link: '/advanced/templates' },
      { text: 'Actions', link: '/advanced/actions' },
      { text: 'Extending Tempo', link: '/advanced/extending' },
    ],
  },
  {
    text: 'Community',
    link: '/contributing',
    items: [{ text: 'Contributing', link: '/contributing' }],
  },
];
