import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["packages/cv-content/**"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    ignores: ["node_modules", "eslint.config.mjs"],
  },
  {
    files: ["package/cv-wrapper/**"],
    ignores: ["node_modules", "eslint.config.mjs"],
  },
];
