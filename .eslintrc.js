module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        //     ignoreWhenNoAttributes: true,
        //     ignoreWhenEmpty: true,
        // ignores: ['pre', 'textarea', ...INLINE_ELEMENTS]
        ignores: ['nuxt-link']
      }
    ]
  }
}
