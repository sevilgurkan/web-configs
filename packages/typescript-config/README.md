# `@fmss/typescript-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40fmss%2Ftypescript-config.svg)](https://badge.fury.io/js/%40fmss%2Ftypescript-config.svg)

FMSS TypeScript configuration files for extending

## Installation

```bash
$ npm install @fmss/typescript-config
```

## Usage

The package includes several TypeScript configurations for different types of projects:

### Base (`base.json`)
Basic TypeScript configuration that other configs extend from. Use this as a starting point for custom configurations.

```json
{
  "extends": "@fmss/typescript-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

### React Application (`application.json`)

```json
{
  "extends": "@fmss/typescript-config/application.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  },
  "include": ["./app/**/*", "./tests/**/*"]
}
```

### React Library (`library.json`)

```json
{
  "extends": "@fmss/typescript-config/library.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "rootDir": "."
  },
  "include": ["./src/**/*"]  
}
```

### Node Library (`node-library.json`)
Similar to library config but for Node.

```json
{
  "extends": "@fmss/typescript-config/node-library.json"
}
```

### Node Base (`node-base.json`)
Base configuration for Node.js applications.

```json
{
  "extends": "@fmss/typescript-config/node-base.json"
}
```

### Project that run in the browser (`dom.json`)
A configuration file is provided that included styles setup and a more conservative build target.

```json
{
  "extends": "@fmss/typescript-config/dom.json"
}
```
