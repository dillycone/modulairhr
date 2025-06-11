module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 💅 keeps ESLint & Prettier in sync
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // Formatting rules removed – Prettier handles these
  rules: {
    // Add any *non-formatting* ESLint rules here
  },
};