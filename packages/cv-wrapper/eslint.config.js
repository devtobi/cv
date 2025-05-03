import jsEslintConfig from '@eslint/js';
import vueI18n from '@intlify/eslint-plugin-vue-i18n';
import vuePrettierEslintConfigSkipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import { ESLint } from 'eslint';
import vueEslintConfig from 'eslint-plugin-vue';
import vueA11y from 'eslint-plugin-vuejs-accessibility';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfigWithVueTs(
  ESLint.defaultConfig,
  jsEslintConfig.configs.recommended,
  vueEslintConfig.configs['flat/recommended'],
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  vueA11y.configs['flat/recommended'],
  vueI18n.configs.recommended,
  vuePrettierEslintConfigSkipFormatting,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    rules: {
      'no-console': ['error', { allow: ['debug', 'error'] }],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/valid-v-model': 'off', // disabled due to PrimeVue incompatibility
      'vue/valid-v-slot': 'off', // disabled due to PrimeVue incompatibility
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.js',
            'scripts/*.js',
            'scripts/helpers/*.js',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'vue-i18n': {
        localeDir: './src/locales/*.json',
        messageSyntaxVersion: '11.1.3',
      },
    },
  },
  globalIgnores([
    'dist',
    'dev-dist',
    'target',
    'src/generated',
    'node_modules',
    'env.d.ts',
    '**/**.json',
    'components.d.ts',
    'pwa-assets.config.ts',
  ]),
);
