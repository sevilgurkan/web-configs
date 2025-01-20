const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const REPO_URL = 'https://github.com/sevilgurkan/web-configs';

function docsUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin/src/docs/rules/${ruleName}.md`;
}

module.exports = {
  docsUrl,
  OFF,
  WARNING,
  ERROR,
};
