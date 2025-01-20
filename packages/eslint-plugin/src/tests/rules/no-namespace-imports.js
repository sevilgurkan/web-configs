const {RuleTester} = require('../utilities');
const rule = require('../../rules/no-namespace-imports');

const ruleTester = new RuleTester();

require('@typescript-eslint/parser');

const languageOptions = {ecmaVersion: 6, sourceType: 'module'};

ruleTester.run('no-namespace-imports', rule, {
  valid: [
    {
      code: `import React from 'react';`,
      languageOptions,
    },
    {
      code: `import {useEffect} from 'react';`,
      languageOptions,
    },
    {
      code: `import React, {useEffect, useState} from 'react';`,
      languageOptions,
    },
    {
      code: `import {Location} from 'history';`,
      languageOptions,
    },
    {
      code: `import * as Foo from 'foo';`,
      languageOptions,
      options: [{allow: ['foo']}],
    },
    {
      code: `import * as testing from '@testing-library/react';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['foo', 'testing-library/*']}],
    },
    {
      code: `
        import * as Foo from 'foo';
        import * as testing from '@testing-library/react';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['foo', 'testing-library/*']}],
    },
  ],
  invalid: [
    {
      code: `import * as React from 'react';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import React from 'react';`,
    },
    {
      code: `import * as H from 'history';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import H from 'history';`,
    },
    {
      code: `import * as faker from 'faker';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      output: `import faker from 'faker';`,
    },
    {
      code: `import * as React from 'react';`,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['bar']}],
      output: `import React from 'react';`,
    },
    {
      code: `
        import * as Foo from 'foo';
        import * as testing from '@testing-library/react';
      `,
      languageOptions,
      errors: [
        {
          messageId: 'namespaceImport',
        },
      ],
      options: [{allow: ['testing-library/*']}],
    },
  ],
});
