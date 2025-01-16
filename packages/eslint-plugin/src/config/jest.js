const globals = require('globals');
const pluginJest = require('eslint-plugin-jest');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    plugins: {
      jest: pluginJest,
    },
  },
];
