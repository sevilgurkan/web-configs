module.exports = function sharedPreset(
  api,
  {
    corejs = 3,
    debug = false,
    modules = 'auto',
    useBuiltIns = 'entry',
    assumptions = {},
    transformRuntimeOptions = {},
    typescript = false,
    typescriptOptions = {},
    react = false,
    reactOptions = {
      // Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.
      useBuiltIns: true,
    },
  } = {},
) {
  const env = api.env();
  const isDevelopment = env === 'development' || env === 'test';

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        debug,
        bugfixes: true,
      },
    ],
    typescript && [
      require.resolve('@babel/preset-typescript'),
      {...typescriptOptions},
    ],
    react && [
      require.resolve('@babel/preset-react'),
      {
        development: isDevelopment,
        ...reactOptions,
      },
    ],
  ].filter(Boolean);

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        version: require('@babel/runtime/package.json').version,
        regenerator: true,
        ...transformRuntimeOptions,
      },
    ],
  ].filter(Boolean);

  const baseAssumptions = {
    /**
     * Assumes that Document.all is not used in the codebase.
     * This assumption reduces bundle size by removing Document.all checks.
     * It's a legacy feature that is not used in modern web applications.
     *
     * https://babeljs.io/docs/assumptions#nodocumentall
     */
    noDocumentAll: true,

    /**
     * Assumes that classes are only called with the 'new' keyword.
     * This assumption removes checks for calling classes as functions
     * and produces more optimized code.
     *
     * https://babeljs.io/docs/assumptions#noclasscalls
     */
    noClassCalls: true,

    /**
     * Assumes that arrow functions are never used as constructors.
     * Arrow functions cannot be called with 'new' anyway, removing these checks
     * optimizes the bundle size.
     *
     * https://babeljs.io/docs/assumptions#onewarrows
     */
    noNewArrows: true,

    /**
     * Assumes that object spread operator always creates a new object.
     * This assumption allows spread operations to be faster and
     * produces code that adheres to immutability principles.
     *
     * https://babeljs.io/docs/assumptions#setspreadproperties
     */
    setSpreadProperties: true,

    /**
     * Assumes that Function.length property is not used.
     * This property returns the number of parameters and is rarely used.
     * This assumption improves performance by removing related checks.
     *
     * https://babeljs.io/docs/assumptions#ignorefunctionlength
     */
    ignoreFunctionLength: true,

    /**
     * Assumes that template literals don't need to be frozen (Object.freeze).
     * This assumption enables more efficient processing of template strings
     * and prevents unnecessary Object.freeze calls.
     *
     * https://babeljs.io/docs/assumptions#mutabletemplateobject
     */
    mutableTemplateObject: true,
  };

  Object.assign(baseAssumptions, assumptions);

  return {presets, plugins, assumptions: baseAssumptions};
};
