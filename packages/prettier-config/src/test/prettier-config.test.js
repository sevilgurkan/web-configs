const prettierConfig = require('../index');

describe('prettier-config', () => {
  describe('overridable defaults', () => {
    it('should have correct endOfLine setting', () => {
      expect(prettierConfig.endOfLine).toBe('lf');
    });

    it('should have correct tabWidth setting', () => {
      expect(prettierConfig.tabWidth).toBe(2);
    });

    it('should have correct printWidth setting', () => {
      expect(prettierConfig.printWidth).toBe(80);
    });

    it('should have correct useTabs setting', () => {
      expect(prettierConfig.useTabs).toBe(false);
    });
  });

  describe('main configuration', () => {
    it('should have correct singleQuote setting', () => {
      expect(prettierConfig.singleQuote).toBe(true);
    });

    it('should have correct arrowParens setting', () => {
      expect(prettierConfig.arrowParens).toBe('always');
    });

    it('should have correct trailingComma setting', () => {
      expect(prettierConfig.trailingComma).toBe('all');
    });

    it('should have correct bracketSpacing setting', () => {
      expect(prettierConfig.bracketSpacing).toBe(false);
    });

    it('should have correct bracketSameLine setting', () => {
      expect(prettierConfig.bracketSameLine).toBe(true);
    });

    it('should have correct semi setting', () => {
      expect(prettierConfig.semi).toBe(true);
    });
  });

  describe('plugins', () => {
    it('should include prettier-plugin-packagejson', () => {
      expect(prettierConfig.plugins).toContain('prettier-plugin-packagejson');
    });

    it('should have exactly one plugin configured', () => {
      expect(prettierConfig.plugins).toHaveLength(1);
    });
  });
});
