module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'prefer-arrow-functions',
    'import',
    'react-refresh',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {prefer: 'type-imports', disallowTypeAnnotations: false},
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
        message: 'Default React import not allowed',
      },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'implicit',
        singleReturnOnly: false,
      },
    ],
    'max-lines': [
      'error',
      {max: 180, skipComments: true, skipBlankLines: true},
    ],
    'import/no-anonymous-default-export': ['error'],
    'import/newline-after-import': ['error'],
    'react/destructuring-assignment': [
      'error',
      'always',
      {ignoreClassFields: true, destructureInSignature: 'always'},
    ],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: 'detect',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
    {
      files: ['src/data/**/*.ts', 'config-overrides.js'],
      rules: {
        'no-redeclare': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages. `react` related packages come first.
              ['^react', '^@?\\w'],
              ['^next', '^@?\\w'],
              // Internal packages.
              ['^(@src)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};
