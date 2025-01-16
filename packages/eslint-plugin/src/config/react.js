const globals = require('globals');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },

    rules: {
      /* * * * * * * * * * * * *
       *                       *
       *        React          *
       *                       *
       * * * * * * * * * * * * */

      // Enforces consistent naming for boolean props
      'react/boolean-prop-naming': 'off',
      // Prevent usage of button elements without an explicit type attribute
      'react/button-has-type': 'error',
      // Prevent missing displayName in a React component definition
      'react/display-name': ['error', {ignoreTranspilerName: false}],
      // Prevent extraneous defaultProps on components
      'react/default-props-match-prop-types': 'error',
      // Enforce consistent usage of destructuring assignment of props, state, and context
      'react/destructuring-assignment': 'off',
      // Forbid certain props on Components
      'react/forbid-component-props': 'off',
      // Forbid certain props on DOM Nodes
      'react/forbid-dom-props': 'off',
      // Forbid certain elements e.g. forbid all <div /> and use <Box /> instead
      'react/forbid-elements': 'off',
      // Forbid foreign propTypes; forbids using another component's prop types unless they are explicitly imported/exported
      'react/forbid-foreign-prop-types': 'error',
      // Forbid certain propTypes
      'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],
      // Enforce using <> instead of <React.Fragment> for fragments
      'react/jsx-fragments': ['error', 'syntax'],
      // Prevent using this.state within a this.setState
      'react/no-access-state-in-setstate': 'error',
      // Prevent using Array index in key prop
      'react/no-array-index-key': 'error',
      // Prevent passing children as props
      'react/no-children-prop': 'error',
      // Prevent usage of dangerous JSX properties
      'react/no-danger': 'off',
      // Prevent problem with children and props.dangerouslySetInnerHTML
      'react/no-danger-with-children': 'error',
      // Prevent usage of deprecated methods
      'react/no-deprecated': 'error',
      // Prevent usage of setState in componentDidMount
      'react/no-did-mount-set-state': 'off',
      // Prevent usage of setState in componentDidUpdate
      'react/no-did-update-set-state': 'error',
      // Prevent direct mutation of this.state
      'react/no-direct-mutation-state': 'error',
      // Prevent usage of findDOMNode
      'react/no-find-dom-node': 'off',
      // Prevent usage of isMounted
      'react/no-is-mounted': 'error',
      // Prevent multiple component definition per file
      'react/no-multi-comp': 'off',
      // Prevent usage of shouldComponentUpdate when extending React.PureComponent
      'react/no-redundant-should-component-update': 'error',
      // Prevent usage of the return value of React.render
      'react/no-render-return-value': 'error',
      // Prevent usage of setState
      'react/no-set-state': 'off',
      // Prevent this from being used in stateless functional components
      'react/no-this-in-sfc': 'error',
      // Prevent common casing typos
      'react/no-typos': 'error',
      // Prevent using string references in ref attribute.
      'react/no-string-refs': 'error',
      // Prevent invalid characters from appearing in markup
      'react/no-unescaped-entities': 'error',
      // Prevent usage of unknown DOM property
      'react/no-unknown-property': 'off',
      // Prevent usage of UNSAFE_ methods
      'react/no-unsafe': ['error', {checkAliases: true}],
      // Prevent definitions of unused prop types
      'react/no-unused-prop-types': 'error',
      // Attempts to discover all state fields in a React component and warn if any of them are never read.
      'react/no-unused-state': 'error',
      // Prevent usage of setState in componentWillUpdate
      'react/no-will-update-set-state': 'error',
      // Enforce that props are read-only when defined in flow
      'react/prefer-read-only-props': 'off',
      // Enforce ES5 or ES6 class for React Components
      'react/prefer-es6-class': 'error',
      // Enforce stateless React Components to be written as a pure function
      'react/prefer-stateless-function': [
        'error',
        {ignorePureComponents: true},
      ],
      // Prevent missing props validation in a React component definition
      'react/prop-types': 'error',
      // Prevent missing React when using JSX
      'react/react-in-jsx-scope': 'error',
      // Enforce a defaultProps definition for every prop that is not a required prop
      'react/require-default-props': 'off',
      // Enforce React components to have a shouldComponentUpdate method
      'react/require-optimization': 'off',
      // Enforce ES5 or ES6 class for returning value in render function
      'react/require-render-return': 'error',
      // Prevent extra closing tags for components without children
      'react/self-closing-comp': 'error',
      // Enforce component methods order
      'react/sort-comp': 'off',
      // Enforce propTypes declarations alphabetical sorting
      'react/sort-prop-types': 'off',
      // Enforce state initialization style
      'react/state-in-constructor': ['error', 'never'],
      // Enforce style prop value being an object
      'react/style-prop-object': 'error',
      // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
      'react/void-dom-elements-no-children': 'error',

      /* * * * * * * * * * * * *
       *                       *
       *          JSX          *
       *                       *
       * * * * * * * * * * * * */
    },
  },
];
