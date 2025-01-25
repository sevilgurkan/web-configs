import {createConfig} from '@fmss/commitlint-plugin';

export default createConfig({
  requireJira: false,
  additionalScopes: [
    'deps',
    'eslint-plugin',
    'prettier-config',
    'typescript-config',
    'plop',
    'commitlint-plugin',
    'babel-preset',
  ],
  ignores: [(commit) => commit.includes('Version Packages')],
});
