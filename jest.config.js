/** @type {import('jest').Config} */
const config = {
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'mjs', 'ts', 'jsx', 'tsx', 'json'],
  testPathIgnorePatterns: ['.*/tests/fixtures/'],
  testRegex: '.*\\.test\\.(mjs?|tsx?|jsx?)$',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  setupFilesAfterEnv: ['jest-expect-message'],
};

module.exports = config;
