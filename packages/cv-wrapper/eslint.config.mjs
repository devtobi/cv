/* eslint-env node */
import { modernModuleResolution } from '@rushstack/eslint-patch'
modernModuleResolution()
export default [
  {
    root: true,
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-typescript',
      '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    }
  }
]
