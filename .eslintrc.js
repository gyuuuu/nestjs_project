module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    // tsconfigRootDir: __dirname,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  // tsconfigRootDir: __dirname,
  plugins: ['prettier', '@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        sigleQuote: true,
        semi: true,
        useTabs: false,
        tabWitdth: 2,
        printWidth: 80,
        brachetSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
