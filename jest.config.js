/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.mjs'],
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '.*\\.test\\.(tsx?|jsx?)$',
  verbose: true,
};

export default config;
