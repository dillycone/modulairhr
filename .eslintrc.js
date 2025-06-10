module.exports = {
  extends: ['next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
  },
};