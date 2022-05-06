module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
