const kanvilEslintPlugin = require('@fmss/eslint-plugin');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    ignores: ['eslint.config.js', 'node_modules', '/coverage'],
  },
  ...kanvilEslintPlugin.configs.typescript,
  ...kanvilEslintPlugin.configs.react,
  ...kanvilEslintPlugin.configs.prettier,
  ...kanvilEslintPlugin.configs.node,
  ...kanvilEslintPlugin.configs.jest,
  {
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'always',
          cjs: 'always',
          ts: 'never',
          cts: 'always',
          mts: 'always',
        },
      ],
    },
  },
];
