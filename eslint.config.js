import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import css from "@eslint/css";
import pluginA11y from "eslint-plugin-vuejs-accessibility";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginVue.configs["flat/essential"],
  // vuejs-accessibilityの推奨設定を追加
  {
    files: ["**/*.vue"],
    plugins: { "vuejs-accessibility": pluginA11y },
    rules: {
      // 推奨ルール一覧（公式recommendedから抜粋）
      "vuejs-accessibility/alt-text": "error",
      "vuejs-accessibility/anchor-has-content": "error",
      "vuejs-accessibility/aria-role": "error",
      "vuejs-accessibility/aria-props": "error",
      "vuejs-accessibility/aria-unsupported-elements": "error",
      "vuejs-accessibility/heading-has-content": "error",
      "vuejs-accessibility/iframe-has-title": "error",
      "vuejs-accessibility/label-has-for": "error",
      "vuejs-accessibility/mouse-events-have-key-events": "error",
      "vuejs-accessibility/no-autofocus": "error",
      "vuejs-accessibility/no-distracting-elements": "error",
      "vuejs-accessibility/no-redundant-roles": "error",
      "vuejs-accessibility/tabindex-no-positive": "error",
      "vuejs-accessibility/click-events-have-key-events": "error",
      "vuejs-accessibility/no-static-element-interactions": "error",
    },
  },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
