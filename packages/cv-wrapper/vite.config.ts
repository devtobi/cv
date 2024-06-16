import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import packageJson from '../../package.json';
import cvContentPackageJson from '../cv-content/package.json';
import cvWrapperPackageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({ resolvers: [PrimeVueResolver()] }),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**',
      ),
    }),
  ],
  define: {
    'import.meta.env.PACKAGE_REPOSITORY_URL': JSON.stringify(
      packageJson.repository.url,
    ),
    'import.meta.env.PACKAGE_DEV_DEPENDENCIES': JSON.stringify(
      packageJson.devDependencies,
    ),
    'import.meta.env.CV_CONTENT_PACKAGE_DEV_DEPENDENCIES': JSON.stringify(
      cvContentPackageJson.devDependencies,
    ),
    'import.meta.env.CV_WRAPPER_PACKAGE_DEPENDENCIES': JSON.stringify(
      cvWrapperPackageJson.dependencies,
    ),
    'import.meta.env.CV_WRAPPER_PACKAGE_DEV_DEPENDENCIES': JSON.stringify(
      cvWrapperPackageJson.devDependencies,
    ),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
