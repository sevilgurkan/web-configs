const globals = require('globals');
const promisePlugin = require('eslint-plugin-promise');
const importPlugin = require('eslint-plugin-import');
const sortClassMembersPlugin = require('eslint-plugin-sort-class-members');

const kanvilCoreConfig = require('./core');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...kanvilCoreConfig,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.es2021,
      },
    },

    plugins: {
      promise: promisePlugin,
      'sort-class-members': sortClassMembersPlugin,
    },

    rules: {
      // Require braces in arrow function body
      'arrow-body-style': 'off',
      // Require parens in arrow function arguments
      'arrow-parens': ['error', 'always'],
      // Require space before/after arrow function's arrow
      'arrow-spacing': ['error', {before: true, after: true}],
      // Verify super() callings in constructors
      'constructor-super': 'error',
      // Enforce the spacing around the * in generator functions
      'generator-star-spacing': ['error', 'after'],
      // Disallow modifying variables of class declarations
      'no-class-assign': 'error',
      // Disallow arrow functions where they could be confused with comparisons
      'no-confusing-arrow': ['error', {allowParens: true}],
      // Disallow modifying variables that are declared using const
      'no-const-assign': 'error',
      // Disallow duplicate name in class members
      'no-dupe-class-members': 'error',
      // Disallow duplicate module imports (disabled, as import/no-duplicates does the same job but better)
      'no-duplicate-imports': 'off',
      // Disallow use of the new operator with the Symbol object
      'no-new-symbol': 'error',
      // Disallow to use this/super before super() calling in constructors.
      'no-this-before-super': 'error',
      // Disallow unnecessary computed property keys in object literals
      'no-useless-computed-key': 'off',
      // Disallow unnecessary constructor
      'no-useless-constructor': 'error',
      // Disallow renaming import, export, and destructured assignments to the same name
      'no-useless-rename': 'error',
      // Require let or const instead of var
      'no-var': 'error',
      // Require method and property shorthand syntax for object literals
      'object-shorthand': ['error', 'always', {avoidQuotes: true}],
      // Suggest using arrow functions as callbacks
      'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
      // Suggest using of const declaration for variables that are never modified after declared
      'prefer-const': 'error',
      // Require destructuring from arrays and/or objects
      'prefer-destructuring': 'off',
      // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
      'prefer-numeric-literals': 'error',
      // Suggest using the rest parameters instead of arguments
      'prefer-rest-params': 'error',
      // Suggest using the spread operator instead of .apply()
      'prefer-spread': 'error',
      // Suggest using Reflect methods where applicable
      'prefer-reflect': 'off',
      // Suggest using template literals instead of strings concatenation
      'prefer-template': 'error',
      // Enforce spacing between rest and spread operators and their expressions
      'rest-spread-spacing': ['error', 'never'],
      // Disallow generator functions that do not have yield
      'require-yield': 'error',
      // Sort import declarations within module
      'sort-imports': 'off',
      // Require symbol descriptions
      'symbol-description': 'error',
      // Enforce spacing around embedded expressions of template strings
      'template-curly-spacing': ['error', 'never'],
      // Enforce spacing around the * in yield* expressions
      'yield-star-spacing': ['error', {before: false, after: true}],

      /* * * * * * * * * * * * *
       *                       *
       *      Promise          *
       *                       *
       * * * * * * * * * * * * */

      'promise/always-catch': 'off',
      // Ensure that each time a then() is applied to a promise, a catch() is applied as well. Exceptions are made if you are returning that promise.
      'promise/catch-or-return': 'error',
      // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
      'promise/no-return-wrap': 'error',
      // Ensure that inside a then() you make sure to return a new promise or value.
      'promise/always-return': 'off',
      // Enforce standard parameter names for Promise constructors.
      'promise/param-names': 'error',
      // Ensure that Promise is included fresh in each file instead of relying on the existence of a native promise implementation.
      'promise/no-native': 'off',
      // Avoid nested .then() or .catch() statements
      'promise/no-nesting': 'error',
      // Avoid using promises inside of callbacks
      'promise/no-promise-in-callback': 'off',
      // Avoid calling cb() inside of a then() (use nodeify instead)
      'promise/no-callback-in-promise': 'off',
      // Avoid creating new promises outside of utility libs (use pify instead)
      'promise/avoid-new': 'off',
      // Ensures the proper number of arguments are passed to Promise functions
      'promise/valid-params': 'error',
      // Avoid calling new on a Promise static method
      'promise/no-new-statics': 'off',
      // Disallow return statements in finally()
      'promise/no-return-in-finally': 'error',

      /* * * * * * * * * * * * *
       *                       *
       *      Async/Await      *
       *                       *
       * * * * * * * * * * * * */

      // Prefer await to then() for reading Promise values
      'promise/prefer-await-to-then': 'off',
      // Prefer async/await to the callback pattern
      'promise/prefer-await-to-callbacks': 'off',

      /* * * * * * * * * * * * *
       *                       *
       *   sort-class-members  *
       *                       *
       * * * * * * * * * * * * */

      'sort-class-members/sort-class-members': [
        'error',
        {
          order: [
            '[static-members]',
            '[properties]',
            '[conventional-private-properties]',
            'constructor',
            '[methods]',
            '[conventional-private-methods]',
            '[everything-else]',
          ],
          groups: {
            'static-members': [{static: true}],
          },
          accessorPairPositioning: 'getThenSet',
        },
      ],

      /* * * * * * * * * * * * *
       *                       *
       *      Remainders       *
       *                       *
       * * * * * * * * * * * * */

      // default params
      'no-param-reassign': 'error',
    },
  },
];
