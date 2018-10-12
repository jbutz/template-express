module.exports = {
    root: true,
    env: {
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:security/recommended',
        'plugin:node/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'jest',
        'security',
        'node',
    ],
    rules: {
        indent: [
            'error',
            4,
            { SwitchCase: 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'no-var': 'error',
    }
};