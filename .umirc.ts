import { Arch, Platform } from '@umijs/plugin-electron';
import { defineConfig } from 'umi';

export default defineConfig({
  npmClient: 'yarn',
  plugins: [
    '@umijs/plugin-electron',
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/antd',
  ],
  electron: {
    builder: {
      targets: Platform.MAC.createTarget(['dmg'], Arch.arm64),
    },
  },
  antd: {},
  tailwindcss: {},
});
