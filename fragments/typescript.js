// Local helpers.
const airbnbBaseRules = require('../helpers/airbnb-base-rules');
const createAdvancedRules = require('../helpers/advanced-rules-creator');

/** @type {import('eslint').Linter.RulesRecord} */
const advancedRulesForTS = createAdvancedRules({
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],

    'comma-spacing': [ 'error', { before: false, after: true } ],

    'default-param-last': 'error',

    'func-call-spacing': [ 'error', 'never' ],

    indent: [ 'error', 4, { ...airbnbBaseRules.indent[2], SwitchCase: 0 } ],

    'no-array-constructor': 'error',

    'no-dupe-class-members': 'error',

    'no-empty-function': [ 'error', { allow: [ 'arrowFunctions', 'functions', 'methods' ] } ],

    'no-extra-semi': 'error',

    'no-unused-expressions': [ 'error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
    } ],

    'no-unused-vars': [ 'error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
    } ],

    'no-use-before-define': [ 'error', {
        functions: true,
        classes: true,
        variables: true
    } ],

    'no-useless-constructor': 'error',

    quotes: [ 'error', 'single', { avoidEscape: true } ],

    semi: [ 'error', 'always' ],

    'space-before-function-paren': [ 'error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
    } ]
});

/**
 * ESLint rules for TypeScript files.
 *
 * @type {import('eslint').Linter.Config}
 */
const configurationFragmentForTS = {
    rules: {
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow'
            }
        ],

        '@typescript-eslint/member-delimiter-style': [ 'error', {
            multiline: { delimiter: 'semi', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false },

            overrides: {
                typeLiteral: {
                    singleline: { delimiter: 'comma', requireLast: false }
                }
            }
        } ],

        '@typescript-eslint/naming-convention': [
            'error', {
                selector: 'interface',
                format: [ 'PascalCase' ],
                custom: { regex: '^I[A-Z]', match: false }
            }
        ],

        '@typescript-eslint/no-explicit-any': 'off',

        '@typescript-eslint/no-unsafe-assignment': 'off',

        '@typescript-eslint/no-unsafe-call': 'off',

        '@typescript-eslint/no-unsafe-member-access': 'off',

        '@typescript-eslint/no-unsafe-return': 'off',

        '@typescript-eslint/prefer-optional-chain': 'error',

        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        ...advancedRulesForTS
    }
};

// Exporting.
module.exports = configurationFragmentForTS;
