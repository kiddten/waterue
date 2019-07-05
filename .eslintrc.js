
// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    '@wemake-services/vue',
    '@wemake-services/jsdoc',
    'plugin:compat/recommended',
  ],
  'plugins': [
    'compat',
    'json',
  ],
  'rules': {
    // typescript specifics
    '@typescript-eslint/no-var-requires': 'off',
  },

  'settings': {
    // providing polyfills for `eslint-plugin-compat` plugin, see:
    // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
    'polyfills': [],
  },

  'env': {
    'node': true,
    'browser': true,
  },
}
