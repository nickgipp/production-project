module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        // 'prettier/prettier': [
        //     'error',
        //     { endOfLine: 'auto' },
        //     { printWidth: 2020 },
        // ],
        indent: [2, 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-var-requires': 0,
    },
};
