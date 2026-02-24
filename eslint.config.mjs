import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tseslint from 'typescript-eslint';
import eslintjs from '@eslint/js';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  tseslint.configs.recommended,
  eslintjs.configs.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'scripts/*',
    'global.ts',
    'app/api/generated/**',
  ]),
  {
    rules: {
      'import/no-cycle': 'error',
      'no-useless-return': 'error',
      'block-scoped-var': 'error',
      'no-var': 'error',
      'no-console': 'error',
      'no-whitespace-before-property': 'error',
      camelcase: 'error',
      'prefer-const': 'error',
      'no-dupe-else-if': 'error',
      'no-duplicate-imports': 'error',
      'lines-between-class-members': 'error',
      'no-trailing-spaces': 'error',
      'keyword-spacing': 'error',
      'jsx-quotes': 'error',
      'comma-style': 'error',
      'comma-spacing': 'error',
      'arrow-spacing': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'react/jsx-no-bind': [
        'error',
        { allowBind: true, allowArrowFunctions: true },
      ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: true,
          exceptions: { ImportDeclaration: true },
        },
      ],
      'no-use-before-define': [
        'error',
        { functions: false, classes: false, variables: false },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'test/**', // tape, common npm pattern
            'tests/**', // also common npm pattern
            'spec/**', // mocha, rspec-like pattern
            '**/__tests__/**', // jest pattern
            '**/__mocks__/**', // jest pattern
            '**/test.{ts,tsx}', // repos with a single test file
            '**/test-*.{ts,tsx}', // repos with multiple top-level test files
            '**/*{.,_}{test,spec}.{ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
            '**/jest.config.ts', // jest config
            '**/jest.setup.ts', // jest setup
            '**/.eslintrc.js', // eslint config
            '**/eslint.config.mjs', // eslint config
          ],
          optionalDependencies: false,
        },
      ],
    },
  },
]);

export default eslintConfig;
