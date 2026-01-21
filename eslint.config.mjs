import eslintPluginAstro from 'eslint-plugin-astro';
import js from "@eslint/js";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
    rules: {
      
    }
  }
];