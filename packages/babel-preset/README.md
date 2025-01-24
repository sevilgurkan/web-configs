# `@fmss/babel-preset`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40fmss%2Fbabel-preset.svg)](https://badge.fury.io/js/%40fmss%2Fbabel-preset.svg)

FMSS's Babel preset configuration

## Installation

```bash
npm install --save-dev @fmss/babel-preset
```

## Usage

In your `babel.config.js` or `.babelrc` file:

```js
module.exports = {
  presets: ['@fmss/babel-preset', { typescript: true, react: false }]
};
```

### Features

- Supports modern JavaScript features (ES2015+)
- TypeScript support (with `typescript: true` option)
- React support (with `react: true` option)

### Configuration Options

```js
module.exports = {
  presets: [
    [
      '@fmss/babel-preset',
      {
        // TypeScript support
        typescript: false,
        
        // React support
        react: false,
        
        // CoreJS version
        corejs: 3,
        
        // Module format ('auto', 'commonjs', false, etc.)
        modules: 'auto',
        
        // Polyfill strategy ('entry', 'usage', false)
        useBuiltIns: 'entry'
      }
    ]
  ]
};
```

### Options

#### `corejs`, `debug`, `modules`, `useBuiltIns`

These options come from the `@babel/preset-env` preset and match the default values.

Read the [options](https://babeljs.io/docs/en/babel-preset-env#options) for more information on the possible values.

#### `typescript`

Enables `@babel/preset-typescript` to transfrom TypeScript into Javascript.

#### `typescriptOptions`

See all available [options](https://babeljs.io/docs/en/babel-preset-typescript).

#### `transformRuntime`

`boolean`, defaults to `false`

This option when `true` will enable the `@babel/plugin-transform-runtime` plugin.

#### `transformRuntimeOptions`

This option configures the `@babel/plugin-transform-runtime` plugin when the `transformRuntime` option has been enabled.

See available [options](https://babeljs.io/docs/en/babel-plugin-transform-runtime).

#### `react`

`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/preset-react` preset.

#### `reactOptions`

See all available [options here](https://babeljs.io/docs/en/babel-preset-react).

##### `reactOptions.useBuiltIns`

`boolean`, defaults to `true`

Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.

---

For more detailed information, please refer to the [Babel documentation](https://babeljs.io/docs/en/presets).
