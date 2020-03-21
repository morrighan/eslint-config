// Local rules.
const rulesForJavaScript = require('./rules/javascript');
const rulesForTypeScript = require('./rules/typescript');

// Local helpers.
const { merge } = require('./helpers/merger');

// Constants.
const extensions = [ '.mjs', '.js', '.ts', '.json' ];

/** @typedef {import('eslint').Linter.Config} ESLintConfiguration */
/** @type {ESLintConfiguration} */
const baseConfiguration = {
    env: { es2020: true },

    parser: '@typescript-eslint/parser',
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

    overrides: [ {
        files: [ '*.ts', '*.tsx' ],

        extends: [
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking'
        ],

        plugins: [ '@typescript-eslint', '@typescript-eslint/tslint' ],
        rules: rulesForTypeScript
    } ],

    settings: {
        'import/extensions': extensions,
        'import/ignore': [ 'node_modules', '\\.(scss|css|svg|json)$' ],
        'import/core-modules': [],
        'import/resolver': { node: { extensions } }
    }
};

/**
 * @param  {ESLintConfiguration[]} partialConfigurations
 * @returns {ESLintConfiguration}
 */
function createConfiguration(...partialConfigurations) {
    return merge({}, baseConfiguration, ...partialConfigurations);
}

// Exporting.
module.exports = createConfiguration;
