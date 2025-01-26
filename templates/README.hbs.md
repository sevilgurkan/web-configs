[comment]: # 'NOTE: This file is generated and should not be modify directly. Update `templates/README.hbs.md` instead'

# FMSS Web Configurations

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

This repository serves as a centralized hub for FMSS's web development standards and configurations, providing a comprehensive set of tools, best practices, and shared configurations to ensure consistency and efficiency across all web applications within the FMSS ecosystem.

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Packages

| Package | Version | Size |
| :------ | :-----: | :--: |

{{#each jsPackageNames}}
| [**{{this}}**](packages/{{this}}) | [![npm version](https://badge.fury.io/js/%40fmss%2F{{this}}.svg)](https://badge.fury.io/js/%40fmss%2F{{this}}) | [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@fmss/{{this}}.svg)](https://img.shields.io/bundlephobia/minzip/@fmss/{{this}}.svg) |
{{/each}}

### Contributing

- Filing [bug reports](https://github.com/sevilgurkan/web-configs/issues/new?template=BUG_REPORT.md)
- Requesting new features or packages via [an issue](https://github.com/sevilgurkan/web-configs/issues/new/choose)
- Improving the existing codebase by picking up an issue, improving tests, or furthering documentation

#### Documentation

If your change affects the public API of any packages within this repository (i.e. changing function parameters or adding new features, etc), please ensure the documentation is updated, and a changelog is added to reflect this. Documentation is in the `README.md` files of each package.

### Releasing

The release process involves the following steps:

1. Submit all your changes via a Pull Request to the main branch
2. Once your PR is approved and merged, a new release can be created
3. Version numbers are managed automatically - do not manually modify versions in `package.json` files

**Note:** Version numbers are updated automatically through scripts as part of the release process.

## License

see [LICENSE.md](LICENSE.md) for details.
