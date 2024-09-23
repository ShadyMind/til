'use strict';

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules/*'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  {
    files: [
      'app.config.mjs',
      'babel.config.mjs',
      'webpack.config.mjs',
      'webpack.*.config.mjs',
      'stylelint.config.mjs',
      'utils/*.mjs',

    ],
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
