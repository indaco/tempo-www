// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import VersionBadge from '../../../src/lib/components/VersionBadge.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('VersionBadge', VersionBadge);
  },
} satisfies Theme;
