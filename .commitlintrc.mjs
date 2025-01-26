import {createConfig} from '@fmss/commitlint-config';

export default createConfig({
  requireJira: false,
  additionalScopes: [
    'deps',
    'eslint-plugin',
    'prettier-config',
    'typescript-config',
    'plop',
    'babel-preset',
  ],
  ignores: [(commit) => commit.includes('Version Packages')],
});
