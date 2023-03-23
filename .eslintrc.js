PROD
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': import.meta.env.PROD ? 'warn' : 'off',
    'no-debugger': import.meta.env.PROD ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    'vue/multi-word-component-names': 'off'
  }
}
