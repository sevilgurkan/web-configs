/** @type {import('jest').Config} */
const config = {
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  testPathIgnorePatterns: ['.*/tests/fixtures/'],
  testRegex: '.*\\.test\\.(tsx?|jsx?)$',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};

module.exports = config;
