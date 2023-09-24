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
    ],
    'space-before-function-paren': ['error', 'never'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always' // allow self-closing on HTML void elements with no attributes
          // normal: 'never', // disallow self-closing on non-void elements with no children
          // component: 'any' // don't enforce self-closing on custom components
        }
        // svg: 'always',
        // math: 'always'
      }
    ]
  }
}
