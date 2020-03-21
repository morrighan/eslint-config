// Node.js built-in APIs.
const { existsSync: exists, readFileSync: readFile, writeFileSync: writeFile } = require('fs');
const path = require('path');

/** @type {Record<string, import('eslint').Linter.RulesRecord>} */
const { rules: styleRules } = require('eslint-config-airbnb-base/rules/style');

// Dynamic generate TSLint configuration in runtime.
const rootPath = path.resolve(__dirname, '..');
const tslintConfigPath = path.resolve(rootPath, 'tslint.json');

/**
 * ESLint rules for TypeScript files.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
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

        /**
     * Advanced ESLint built-in rules for TypeScript.
     */
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': [ 'error', { before: false, after: true } ],

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],

        indent: 'off',
        '@typescript-eslint/indent': [ 'error', 4, { ...styleRules.indent[2], SwitchCase: 0 } ],

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [ 'error', { allow: [ 'arrowFunctions', 'functions', 'methods' ] } ],

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [ 'error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false
        } ],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [ 'error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true
        } ],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [ 'error', {
            functions: true,
            classes: true,
            variables: true
        } ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        quotes: 'off',
        '@typescript-eslint/quotes': [ 'error', 'single', { avoidEscape: true } ],

        semi: 'off',
        '@typescript-eslint/semi': [ 'error', 'always' ],

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [ 'error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        } ]
    }
};

if (!exists(tslintConfigPath)) {
    const preparedConfig = Object.assign(
        JSON.parse(readFile(path.resolve(rootPath, 'tslint.prepared.json'))),
        { rulesDirectory: path.dirname(require.resolve('tslint-microsoft-contrib/package.json')) }
    );

    writeFile(tslintConfigPath, JSON.stringify(preparedConfig, undefined, 4));
}
