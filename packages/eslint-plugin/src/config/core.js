const eslintJs = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');

const fmssPlugin = require('../plugin');
const {OFF, ERROR} = require('../utilities');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  // eslintJs.configs.recommended,
  // importPlugin.flatConfigs.recommended,
  {
    plugins: {
      '@fmss': fmssPlugin,
    },
    rules: {
      ...require('../rules/best-practice').rules,
      ...require('../rules/import').rules,
    },
  },
  {
    rules: {
      // FMSS

      // Require (or disallow) assignments of binary, boolean-producing expressions to be wrapped in parentheses.
      '@fmss/binary-assignment-parens': [ERROR, 'always'],
      // Prevent namespace import declarations
      '@fmss/no-namespace-imports': ERROR,
    },
  },
];
