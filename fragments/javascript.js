// Third-party modules.
const lodash = require('lodash');

// Local helpers.
const airbnbBaseRules = require('../helpers/airbnb-base-rules');

/**
 * ESLint rules for JavaScript files.
 *
 * @type {import('eslint').Linter.Config}
 */
const configurationFragmentForJS = {
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],

        'arrow-parens': [ 'error', 'as-needed', { requireForBlockBody: false } ],

        camelcase: [ 'error', { properties: 'never' } ],

        'comma-dangle': [ 'error', 'never' ],

        'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],

        'import/extensions': [ 'error', 'ignorePackages', { mjs: 'never', js: 'never', jsx: 'never', ts: 'never', tsx: 'never' } ],

        'import/max-dependencies': 'off',

        'import/no-dynamic-require': 'off',

        'import/no-extraneous-dependencies': [
            'error',

            {
                devDependencies: [
                    ...airbnbBaseRules['import/no-extraneous-dependencies'][1].devDependencies,

                    'configs/**',
                    'scripts/**',
                    '**/babel.config.js'
                ],

                optionalDependencies: false
            }
        ],

        indent: [ 'error', 4, { ...airbnbBaseRules.indent[2], SwitchCase: 0 } ],

        'max-len': [
            'error',
            120,
            4,

            {
                ...airbnbBaseRules['max-len'][3],

                ignoreComments: true,
                ignoreTrailingComments: true
            }
        ],

        'max-statements': [ 'error', 100, { ignoreTopLevelFunctions: true } ],

        'no-continue': 'off',

        'no-param-reassign': [
            'error',
            {
                ignorePropertyModificationsFor: lodash.union([
                    ...airbnbBaseRules['no-param-reassign'][1].ignorePropertyModificationsFor,

                    // For non-abbreviated naming style.
                    'event',
                    'context',

                    // For Fastify.
                    'reply'
                ]),

                props: true
            }
        ],

        'no-restricted-properties': [
            'error',
            ...airbnbBaseRules['no-restricted-properties'].slice(1),

            {
                object: 'document',
                property: 'cookie',
                message: 'Do not use cookies.'
            },

            {
                property: 'forEach',
                message: 'Please use for..of loops instead.'
            }
        ],

        'no-restricted-syntax': [
            'error',

            ...airbnbBaseRules['no-restricted-syntax']
                .slice(1)
                .filter(({ selector }) => selector !== 'ForOfStatement'),

            {
                message: 'Do not use the execScript functions.',
                selector: 'CallExpression[name="execScript"]'
            }
        ],

        'no-self-assign': [ 'error', { props: false } ],

        'no-warning-comments': [
            'warn',

            {
                location: 'anywhere',
                terms: [ 'BUG', 'HACK', 'FIXME', 'LATER', 'LATER2', 'TODO' ]
            }
        ],

        'node/exports-style': [ 'error', 'module.exports' ],

        'node/no-missing-import': 'off',

        'node/no-unsupported-features/es-syntax': 'off',

        'node/prefer-global/buffer': [ 'error', 'never' ],

        'node/prefer-global/console': [ 'error', 'never' ],

        'node/prefer-global/process': [ 'error', 'never' ],

        'node/prefer-global/text-decoder': [ 'error', 'never' ],

        'node/prefer-global/text-encoder': [ 'error', 'never' ],

        'node/prefer-global/url': [ 'error', 'never' ],

        'node/prefer-global/url-search-params': [ 'error', 'never' ],

        'object-curly-newline': [
            'error',

            {
                ExportDeclaration: { consistent: true, minProperties: Infinity, multiline: true },
                ImportDeclaration: { consistent: true, minProperties: Infinity, multiline: true },
                ObjectExpression: { consistent: true, minProperties: Infinity, multiline: true },
                ObjectPattern: { consistent: true, minProperties: Infinity, multiline: true }
            }
        ],

        'prefer-destructuring': [
            'error',

            {
                AssignmentExpression: { array: true, object: true },
                VariableDeclarator: { array: false, object: true }
            },

            { enforceForRenamedProperties: false }
        ],

        'security/detect-non-literal-fs-filename': 'error',

        'security/detect-non-literal-require': 'error',

        'security/detect-object-injection': 'off',

        'security/detect-possible-timing-attacks': 'error',

        'spaced-comment': [
            'error',
            'always',

            {
                block: {
                    balanced: true,
                    exceptions: [ '-', '+' ],
                    markers: [ '=', '!' ]
                },

                line: {
                    exceptions: [ '-', '+' ],
                    markers: [ '/', '=', '!' ]
                }
            }
        ]
    }
};

// Exporting.
module.exports = configurationFragmentForJS;
