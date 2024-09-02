import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import packageJson from '../../package.json';
import cvContentPackageJson from '../cv-content/package.json';
import cvWrapperPackageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['html-include'].includes(tag),
        },
      }
    }),
    Components({ resolvers: [PrimeVueResolver()] }),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**',
      ),
    }),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      strategies: 'generateSW',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,png}'],
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 3, // 3 MB cache
      },
      manifest: {
        name: 'Tobias Stadler - Curriculum Vitae',
        short_name: 'Tobias Stadler - CV',
        description: 'CV application of Tobias Stadler (@devtobi)',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      includeAssets: ['themes/**'],
      devOptions: {
        enabled: true,
      },
    }),
  ],
  optimizeDeps: {
    include: ['axe-core'],
  },
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
