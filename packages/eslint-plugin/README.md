# `@fmss/eslint-plugin`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40fmss%2Feslint-plugin.svg)](https://badge.fury.io/js/%40fmss%2Feslint-plugin.svg)

FMSS's ESLint rules and configs

## Installation

You'll first need to install [ESLint](http://eslint.org):

**_With npm_**

```bash
$ npm install --save-dev @fmss/eslint-plugin
```

**_With yarn_**

```bash
$ yarn add --dev @fmss/eslint-plugin
```

**_With pnpm_**

```bash
$ pnpm add --save-dev @fmss/eslint-plugin
```

## Usage

From version 46.0.0, this package uses ESLint's "Flat Config" format. To upgrade, follow the, follow the [Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

---

FMSS’s ESLint configs are included in this package. Add the relevant configurations to your project's `eslint.config.js`. For example, to use the ESNext (ES2015 and later) config:

```js
import fmssEslintPlugin from '@fmss/eslint-plugin';

export default [...fmssEslintPlugin.configs.esnext];
```

You can augment the "core" config with additional ones. For example, to extend the ESNext config with React:

```js
import fmssEslintPlugin from '@fmss/eslint-plugin';

export default [
  ...fmssEslintPlugin.configs.esnext,
  ...fmssEslintPlugin.configs.react,
];
```

If using TypeScript and React, combine the TypeScript base config with React and Prettier:

```js
import fmssEslintPlugin from '@fmss/eslint-plugin';

export default [
  ...fmssEslintPlugin.configs.typescript,
  ...fmssEslintPlugin.configs.react,
  ...fmssEslintPlugin.configs.prettier,
];
```
