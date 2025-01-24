module.exports = {
  rules: {
    /**
     * Require return statements in array methods callbacks.
     *
     * 🚫 Not fixable -https://eslint.org/docs/rules/array-callback-return
     */
    // 'array-callback-return': ['error', {allowImplicit: true}],
    'array-callback-return': 'error',
    /**
     * Treat `var` statements as if they were block scoped.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',
    /**
     * Specify curly brace conventions for all control statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/curly
     */
    curly: ['error', 'all'],
    /**
     * Require default clauses in switch statements to be last (if used).
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',
    /**
     * Require triple equals (`===` and `!==`).
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    /**
     * Require grouped accessor pairs in object literals and classes.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': 'error',
    /**
     * Disallow use of `alert()`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',
    /**
     * Disallow use of `caller`/`callee`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',
    /**
     * Disallow returning value in constructor.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',
    /**
     * Disallow using an `else` if the `if` block contains a return.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'warn',
    /**
     * Disallow `eval()`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',
    /**
     * Disallow extending native objects.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',
    /**
     * Disallow unnecessary function binding.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',
    /**
     * Disallow unnecessary labels.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',
    /**
     * Disallow floating decimals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',
    /**
     * Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`.
     *
     * 🔧 Partially Fixable - https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'error',
    /**
     * Disallow use of `eval()`-like methods.
     *
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',
    /**
     * Disallow usage of `__iterator__` property.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',
    /**
     * Disallow use of labels for anything other than loops and switches.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'error',
    /**
     * Disallow unnecessary nested blocks.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',
    /**
     * Disallow `new` for side effects.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',
    /**
     * Disallow function constructors.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',
    /**
     * Disallow primitive wrapper instances, such as `new String('foo')`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',
    /**
     * Disallow use of octal escape sequences in string literals.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',
    /**
     * Disallow reassignment of function parameters.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'error',
    /**
     * Disallow usage of the deprecated `__proto__` property.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',
    /**
     * Disallow assignment in `return` statement.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',
    /**
     * Disallow use of `javascript:` urls.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',
    /**
     * Disallow comparisons where both sides are exactly the same.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',
    /**
     * Disallow use of comma operator.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',
    /**
     * Disallow unnecessary `.call()` and `.apply()`.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'error',
    /**
     * Disallow unnecessary concatenation of strings.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',
    /**
     * Disallow redundant return statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',
    /**
     * Require using named capture groups in regular expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'off',
    /**
     * Require using Error objects as Promise rejection reasons.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
    /**
     * Disallow use of the RegExp constructor in favor of regular expression
     * literals.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'error',
    /**
     * Disallow "Yoda conditions", ensuring the comparison.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/yoda
     */
    yoda: ['error', 'never'],

    //  V
    // ***********
    //  S

    /**
     * Enforces getter/setter pairs in objects.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',
    /**
     * Enforces return statements in callbacks of array's methods.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'error',
    /**
     * Enforce that class methods utilize this.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',
    /**
     * Specify the maximum cyclomatic complexity allowed in a program.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/complexity
     */
    complexity: 'off',
    /**
     * Require return statements to either always or never specify values.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'error',

    /**
     * Require default case in switch statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/default-case
     */
    'default-case': 'off',
    /**
     * Encourages use of dot notation whenever possible.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': ['error', {allowKeywords: true}],
    /**
     * Enforces consistent newlines before or after dots.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/dot-location
     */
    'dot-location': ['error', 'property'],

    /**
     * Make sure for-in loops have an if statement.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'error',
    /**
     * Enforce a maximum number of classes per file.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': 'off',

    /**
     * Disallow lexical declarations in case clauses.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',
    /**
     * Disallow division operators explicitly at beginning of regular expression.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'error',

    /**
     * Disallow use of empty functions.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'error',
    /**
     * Disallow use of empty destructuring patterns.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',
    /**
     * Disallow comparisons to null without a type-checking operator.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * Disallow fallthrough of case statements.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow reassignments of native objects.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * Disallow var and named functions in global scope.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'error',

    /**
     * Disallow this keywords outside of classes or class-like objects.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * Disallow creation of functions within loops.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',
    /**
     * Disallow the use of magic numbers.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',
    /**
     * Disallow use of multiple spaces.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',
    /**
     * Disallow use of multiline strings.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'off',

    /**
     * Disallow use of octal literals.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',
    /**
     * Allow reassignment of function parameters.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'off',
    /**
     * Disallow use of process.env.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-process-env
     */
    'no-process-env': 'error',

    /**
     * Disallow declaring the same variable more than once.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',
    /**
     * Disallow certain object properties.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Disallow unnecessary return await.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /**
     * Disallow assignments where both sides are exactly the same.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': ['error', {props: true}],
    /**
     * Restrict what can be thrown as an exception.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',
    /**
     * Disallow unmodified conditions of loops.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * Disallow usage of expressions in statement position.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'error',
    /**
     * Disallow unused labels.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',
    /**
     * Disallow unnecessary catch clauses.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': 'error',
    /**
     * Disallow unnecessary usage of escape character.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',
    /**
     * Disallow use of void operator.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-void
     */
    'no-void': 'error',
    /**
     * Disallow usage of configurable warning terms in comments.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'error',
    /**
     * Disallow use of the with statement.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /**
     * Require use of the second argument for parseInt().
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/radix
     */
    radix: 'error',
    /**
     * Disallow async functions which have no await expression.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/require-await
     */
    'require-await': 'error',
    /**
     * Enforce the use of u flag on RegExp.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',
    /**
     * Requires to declare all vars on top of their containing scope.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'off',
    /**
     * Require immediate function invocation to be wrapped in parentheses.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': ['error', 'inside'],
  },
};
