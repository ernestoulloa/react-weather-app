module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'jest': true,
        'node': true
    },
    extends: [
      'airbnb',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings'
    ],
    globals: {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
    },
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    plugins: [
      'react'
    ],
    rules: {
      'react/jsx-filename-extension': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'indent': [2, 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'import/no-unresolved': [0, {'commonjs': true, 'amd': true}],
      'import/named': 2,
      'import/namespace': 2,
      'import/default': 2,
      'import/export': 2
      //You can override any rules you want
    },
};
