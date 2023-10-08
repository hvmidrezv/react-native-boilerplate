module.exports = {
  root: true,
  extends: '@hamidfzm/eslint-config/native',
  overrides: [
    {
      files: ['src/data/**/*.ts', 'config-overrides.js'],
      rules: {
        'max-lines': 'off',
        'no-redeclare': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
