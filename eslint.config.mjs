import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["node_modules", "eslint.config.mjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
];
