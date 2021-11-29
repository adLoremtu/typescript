module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
		'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
		'prettier' // prettierのextendsは他のextendsより後に記述する
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
  },
  plugins: [
    '@typescript-eslint'
  ],
  root: true,
  rules: {
  }
}
