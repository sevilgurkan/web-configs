const eslintJs = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');

const fmssPlugin = require('../plugin');
const {OFF, ERROR} = require('../utilities');

const commentsConfig = require('./comments');
const importConfig = require('./import');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  // eslintJs.configs.recommended,
  // importPlugin.flatConfigs.recommended,
  ...commentsConfig,
  ...importConfig,
  {
    plugins: {
      '@fmss': fmssPlugin,
    },
    rules: {
      ...require('./best-practice').rules,
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
