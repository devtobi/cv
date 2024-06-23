/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: ['vuejs-accessibility'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.json',
      messageSyntaxVersion: '9.13.1',
    },
  },
};
