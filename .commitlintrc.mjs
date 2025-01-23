import {createConfig} from '@fmss/commitlint-plugin';

export default createConfig({
  requireJira: false,
  additionalScopes: ['deps', 'eslint', 'prettier', 'typescript', 'plop', 'commitlint-plugin'],
  ignores: [(commit) => commit.includes('Version Packages')],
});
