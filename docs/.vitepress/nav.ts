import { DefaultTheme } from 'vitepress';
import { getVersionFromPackageJson } from '../../src/lib/plugins/injectVersion';

const pkgVersion = getVersionFromPackageJson();

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Quickstart', link: '/guide/quickstart' },
  { text: 'Guide', link: '/guide/' },
  { text: 'CLI', link: '/cli/' },
  {
    text: pkgVersion.replace(/\"/g, ''),
    items: [
      {
        text: 'Changelog',
        link: 'https://github.com/indaco/tempo/blob/main/CHANGELOG.md',
        target: '_blank',
      },
    ],
  },
];
