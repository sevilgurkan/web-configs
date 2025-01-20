const {resolve} = require('path');

const {RuleTester} = require('eslint');

function configFile(name) {
  return resolve(__dirname, '..', 'config', `${name}.js`);
}

function fixtureFile(fixture) {
  return resolve(__dirname, 'fixtures', fixture);
}

module.exports = {
  RuleTester,
  configFile,
  fixtureFile,
};
