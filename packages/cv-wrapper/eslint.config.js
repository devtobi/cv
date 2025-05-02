import js from '@eslint/js';
import vueI18n from '@intlify/eslint-plugin-vue-i18n';
import vuePrettierEslintConfig from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import vue from 'eslint-plugin-vue';
import vueA11y from 'eslint-plugin-vuejs-accessibility';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  ...vueA11y.configs['flat/recommended'],
  ...vueI18n.configs['flat/recommended'],
  ...vueTsEslintConfig({
    extends: ['strict', 'stylistic'],
  }),
  vuePrettierEslintConfig,
  {
    ignores: [
      'dist',
      'dev-dist',
      'node_modules',
      'src/generated',
      'components.d.ts',
      '**/**.json',
    ],
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
    languageOptions: {
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
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
];
