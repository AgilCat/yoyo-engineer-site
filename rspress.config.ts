import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  base: '/yoyo-engineer-site/',
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'yoyo\u4f51\u4f51 \u2014 AI Engineer',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/yoyoyouyou',
      },
    ],
  },
});