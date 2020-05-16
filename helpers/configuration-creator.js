// Configuration fragments.
const { rules: rulesForJavaScript } = require('../fragments/javascript');
const { rules: rulesForTypeScript } = require('../fragments/typescript');

// Constants.
const extensions = [ '.mjs', '.js', '.ts', '.json' ];

/** @type {{ useTypeScript: boolean }} */
const defaultOptions = {
    useTypeScript: true
};

/** @type {import('eslint').Linter.Config} */
const baseConfiguration = {
    env: { es2020: true },
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' },

    extends: [
        'airbnb-base',
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:security/recommended',
        'plugin:eslint-comments/recommended'
    ],

    plugins: [ 'import', 'promise', 'security' ],
    rules: rulesForJavaScript,

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [ '.ts', '.tsx' ]
        },

        'import/extensions': extensions,
        'import/ignore': [ 'node_modules', '\\.(scss|css|svg|json)$' ],
        'import/core-modules': [],
        'import/resolver': { node: { extensions } }
    }
};

/** @type {import('eslint').Linter.Config} */
const configurationForTypeScript = {
    parser: '@typescript-eslint/parser',

    overrides: [ {
        files: [ '*.ts', '*.tsx' ],

        extends: [
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking'
        ],

        plugins: [ '@typescript-eslint', '@typescript-eslint/tslint' ],
        rules: rulesForTypeScript
    } ]
};

/**
 * @param {{ useTypeScript: boolean }} [options]
 * @returns {import('eslint').Linter.Config}
 */
function createConfiguration(options = defaultOptions) {
    return {
        ...baseConfiguration,
        ...(options.useTypeScript && configurationForTypeScript)
    };
}

// Exporting.
module.exports = createConfiguration;
