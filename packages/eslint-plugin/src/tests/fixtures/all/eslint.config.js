const fmssEslintPlugin = require('../../../index');

module.exports = [
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  ...fmssEslintPlugin.configs.core,
  ...fmssEslintPlugin.configs.esnext,
  ...fmssEslintPlugin.configs.typescript,

  // Augmenting configs - When extending, these go after the core config
  ...fmssEslintPlugin.configs.jest,
  ...fmssEslintPlugin.configs.node,
  ...fmssEslintPlugin.configs.react,

  // Prettier config - When extending, this must go last
  ...fmssEslintPlugin.configs.prettier,

  {
    settings: {
      react: {
        version: '16.0',
      },
    },
  },
];
