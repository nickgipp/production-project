module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'prettier', 'react-hooks'],
    rules: {
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         endOfLine: 'auto',
        //     },
        // ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/display-name': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-var-requires': 0,
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'max-len': [
            'error',
            {
                code: 100,
                tabWidth: 4,
                ignoreComments: true,
                //"comments": 80
                ignoreUrls: true,
            },
        ],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
