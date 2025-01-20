module.exports = {
  rules: {
    'binary-assignment-parens': require('./rules/binary-assignment-parens'),
    'images-no-direct-imports': require('./rules/images-no-direct-imports'),
    'jsx-no-complex-expressions': require('./rules/jsx-no-complex-expressions'),
    'no-fully-static-classes': require('./rules/no-fully-static-classes'),
    'no-namespace-imports': require('./rules/no-namespace-imports'),
    'no-useless-computed-properties': require('./rules/no-useless-computed-properties'),
    'prefer-early-return': require('./rules/prefer-early-return'),
    'prefer-module-scope-constants': require('./rules/prefer-module-scope-constants'),
    'react-hooks-strict-return': require('./rules/react-hooks-strict-return'),
    'react-require-autocomplete': require('./rules/react-require-autocomplete'),
    'restrict-full-import': require('./rules/restrict-full-import'),
  },
};
