const eslintJs = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  eslintJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      ...require('../rules/best-practice').rules,
      ...require('../rules/import').rules,
    },
  },
];
