module.exports = {
  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./config/core'),
    esnext: require('./config/esnext'),
    typescript: require('./config/typescript'),

    // Augmenting configs - When extending, these go after the core config
    jest: require('./config/jest'),
    node: require('./config/node'),
    react: require('./config/react'),

    // Prettier config - When extending, this must go last
    prettier: require('./config/prettier'),
  },
};
