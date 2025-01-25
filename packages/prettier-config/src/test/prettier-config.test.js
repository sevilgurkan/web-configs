const prettierConfig = require('../index');

describe('prettier-config', () => {
  describe('overridable defaults', () => {
    it('have endOfLine setting', () => {
      expect(prettierConfig.endOfLine).toBe('lf');
    });

    it('have tabWidth setting', () => {
      expect(prettierConfig.tabWidth).toBe(2);
    });

    it('have printWidth setting', () => {
      expect(prettierConfig.printWidth).toBe(80);
    });

    it('have useTabs setting', () => {
      expect(prettierConfig.useTabs).toBe(false);
    });
  });

  describe('main configuration', () => {
    it('have singleQuote setting', () => {
      expect(prettierConfig.singleQuote).toBe(true);
    });

    it('have arrowParens setting', () => {
      expect(prettierConfig.arrowParens).toBe('always');
    });

    it('have trailingComma setting', () => {
      expect(prettierConfig.trailingComma).toBe('all');
    });

    it('have bracketSpacing setting', () => {
      expect(prettierConfig.bracketSpacing).toBe(false);
    });

    it('have bracketSameLine setting', () => {
      expect(prettierConfig.bracketSameLine).toBe(true);
    });

    it('have semi setting', () => {
      expect(prettierConfig.semi).toBe(true);
    });
  });

  describe('plugins', () => {
    it('include prettier-plugin-packagejson', () => {
      expect(prettierConfig.plugins).toContain('prettier-plugin-packagejson');
    });

    it('have exactly one plugin configured', () => {
      expect(prettierConfig.plugins).toHaveLength(1);
    });
  });
});
