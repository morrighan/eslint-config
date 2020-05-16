// Node.js built-in APIs.
const { existsSync: exists, readFileSync: readFile, writeFileSync: writeFile } = require('fs');
const path = require('path');

/** @type {Record<string, import('eslint').Linter.RulesRecord>} */
const { rules: styleRules } = require('eslint-config-airbnb-base/rules/style');

// Local helpers.
const createAdvancedRules = require('../helpers/advanced-rules-creator');

// Dynamic generate TSLint configuration in runtime.
const rootPath = path.resolve(__dirname, '..');
const tslintConfigPath = path.resolve(rootPath, 'tslint.json');

/** @type {import('eslint').Linter.RulesRecord} */
const advancedRulesForTS = createAdvancedRules({
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],

    'comma-spacing': [ 'error', { before: false, after: true } ],

    'default-param-last': 'error',

    'func-call-spacing': [ 'error', 'never' ],

    indent: [ 'error', 4, { ...styleRules.indent[2], SwitchCase: 0 } ],

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
        '@typescript-eslint/tslint/config': [ 'error', { lintFile: tslintConfigPath } ],

        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow'
            }
        ],

        '@typescript-eslint/interface-name-prefix': 'error',

        '@typescript-eslint/member-delimiter-style': [ 'error', {
            multiline: { delimiter: 'semi', requireLast: true },
            singleline: { delimiter: 'semi', requireLast: false },

            overrides: {
                typeLiteral: {
                    singleline: { delimiter: 'comma', requireLast: false }
                }
            }
        } ],

        '@typescript-eslint/no-explicit-any': 'off',

        '@typescript-eslint/prefer-optional-chain': 'error',

        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        ...advancedRulesForTS
    }
};

if (!exists(tslintConfigPath)) {
    const preparedConfig = Object.assign(
        JSON.parse(readFile(path.resolve(rootPath, 'tslint.prepared.json'))),
        { rulesDirectory: path.dirname(require.resolve('tslint-microsoft-contrib/package.json')) }
    );

    writeFile(tslintConfigPath, JSON.stringify(preparedConfig, undefined, 4));
}

// Exporting.
module.exports = configurationFragmentForTS;
