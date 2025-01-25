const importPlugin = require('eslint-plugin-import');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/ignore': ['node_modules', '\\.s?css'],
    },
    rules: {
      /**
       * Disallow default exports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
       */
      'import/no-default-export': 'off',
      /**
       * Disallow the use of extraneous packages.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
       */
      'import/no-extraneous-dependencies': ['error', {includeTypes: true}],
      /**
       * Disallow mutable exports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
       */
      'import/no-mutable-exports': 'error',

      /**
       * Disallow a module from importing itself.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
       */
      'import/no-self-import': 'error',
      /**
       * Ensures that there are no useless path segments.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
       */
      'import/no-useless-path-segments': ['error'],
      /**
       * Enforce a module import order convention.
       *
       * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
       */
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // Packages
            'internal', // Aliased modules
            'parent', // Relative parent
            'sibling', // Relative sibling
            'index', // Relative index
          ],
          'newlines-between': 'always',
        },
      ],

      /* * * * * * * * * * * * *
       *                       *
       *    Static analysis    *
       *                       *
       * * * * * * * * * * * * */

      /**
       * Ensures imports point to a file/module that can be resolved.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
       */
      'import/no-unresolved': 'error',
      /**
       * Ensures named imports correspond to a named export in the remote file.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
       */
      'import/named': 'error',
      /**
       * Ensures a default export is present, given a default import.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
       */
      'import/default': 'error',
      /**
       * Ensures imported namespaces contain dereferenced properties as they are dereferenced.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
       */
      'import/namespace': 'error',
      /**
       * Forbids require() calls with expressions.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
       */
      'import/no-dynamic-require': 'off',
      /**
       * Prevents importing the submodules of other modules.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
       */
      'import/no-internal-modules': 'off',
      /**
       * Reports use of a default export as a locally named import.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
       */
      'import/no-named-default': 'error',
      /**
       * Restricts which files can be imported in a given folder.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
       */
      'import/no-restricted-paths': 'off',
      /**
       * Forbids import of modules using absolute paths.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
       */
      'import/no-absolute-path': 'error',
      /**
       * Forbids Webpack loader syntax in imports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
       */
      'import/no-webpack-loader-syntax': 'error',
      /**
       * Forbids a module from importing a module with a dependency path back to itself.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
       */
      'import/no-cycle': 'error',

      /**
       * Forbids importing modules from parent directories.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
       */
      'import/no-relative-parent-imports': 'off',
      /**
       * Ensures that modules contain exports and/or all modules are consumed within other modules.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
       */
      'import/no-unused-modules': 'error',

      /* * * * * * * * * * * * *
       *                       *
       *   Helpful warnings    *
       *                       *
       * * * * * * * * * * * * */

      /**
       * Reports any invalid exports, i.e. re-export of the same name.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
       */
      'import/export': 'error',
      /**
       * Forces exports to be declared at the bottom of the file.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
       */
      'import/exports-last': 'off',
      /**
       * Reports use of exported name as identifier of default export.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
       */
      'import/no-named-as-default': 'error',
      /**
       * Reports use of exported name as property of default export.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
       */
      'import/no-named-as-default-member': 'error',
      /**
       * Reports imported names marked with @deprecated documentation tag.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
       */
      'import/no-deprecated': 'error',

      /* * * * * * * * * * * * *
       *                       *
       *    Module systems     *
       *                       *
       * * * * * * * * * * * * */

      /**
       * Reports potentially ambiguous parse goal (script vs. module).
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
       */
      'import/unambiguous': 'off',
      /**
       * Reports CommonJS require calls and module.exports or exports.*.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
       */
      'import/no-commonjs': 'off',
      /**
       * Reports AMD require and define calls.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
       */
      'import/no-amd': 'off',
      /**
       * No Node.js builtin modules.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
       */
      'import/no-nodejs-modules': 'off',

      /* * * * * * * * * * * * *
       *                       *
       *      Style guide      *
       *                       *
       * * * * * * * * * * * * */

      /**
       * Enforces a leading comment with the webpackChunkName for dynamic imports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
       */
      'import/dynamic-import-chunkname': 'off',
      /**
       * Ensures all imports appear before other statements.
       *
       * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
       */
      'import/first': 'error',
      /**
       * Reports repeated import of the same module in multiple places.
       *
       * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
       */
      'import/no-duplicates': 'error',
      /**
       * Reports namespace imports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
       */
      'import/no-namespace': 'off',
      /**
       * Ensures consistent use of file extension within the import path.
       *
       * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
       */
      'import/extensions': [
        'error',
        {
          js: 'never',
          json: 'always',
          svg: 'always',
          png: 'always',
          jpg: 'always',
          ico: 'always',
          graphql: 'always',
          css: 'always',
          sass: 'always',
          scss: 'always',
          less: 'always',
          styl: 'always',
        },
      ],

      /**
       * Enforces a newline after import statements.
       *
       * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
       */
      'import/newline-after-import': 'error',
      /**
       * Prefers a default export if module exports a single name.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
       */
      'import/prefer-default-export': 'off',
      /**
       * Limits the maximum number of dependencies a module can have.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
       */
      'import/max-dependencies': 'off',
      /**
       * Forbids unassigned imports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
       */
      'import/no-unassigned-import': 'off',
      /**
       * Forbids anonymous values as default exports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
       */
      'import/no-anonymous-default-export': 'error',

      /**
       * Forbids named exports.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
       */
      'import/no-named-export': 'off',
      /**
       * Reports when named exports are not grouped together in a single export declaration
       * or when multiple assignments to CommonJS module.exports or exports object are present in a single file.
       *
       * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
       */
      'import/group-exports': 'off',
    },
  },
];
