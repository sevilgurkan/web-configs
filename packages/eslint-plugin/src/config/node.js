const globals = require('globals');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
