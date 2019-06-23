// Node.js built-in APIs.
const { existsSync: exists, readFileSync: readFile, writeFileSync: writeFile } = require('fs');
const path = require('path');

// Dynamic generate TSLint configuration in runtime.
const tslintConfigPath = path.resolve(__dirname, 'tslint.json');

if (!exists(tslintConfigPath)) {
    const preparedConfig = Object.assign(
        JSON.parse(readFile(path.resolve(__dirname, 'tslint.prepared.json'))),
        { rulesDirectory: path.dirname(require.resolve('tslint-microsoft-contrib/package.json')) },
    );

    writeFile(tslintConfigPath, JSON.stringify(preparedConfig, undefined, 4));
}

// Rules.
const typescriptRules = {
    '@typescript-eslint/tslint/config': [ 'error', { lintFile: tslintConfigPath } ]
};

const javascriptRules = {
    'array-bracket-spacing': [ 'error', 'always' ],

    'array-callback-return': [ 'error', { allowImplicit: true } ],

    'arrow-body-style': [ 'error', 'as-needed', { requireReturnForObjectLiteral: false } ],

    'arrow-parens': [ 'error', 'as-needed', { requireForBlockBody: false } ],

    'arrow-spacing': [ 'error', { before: true, after: true } ],

    'block-scoped-var': 'error',

    'block-spacing': [ 'error', 'always' ],

    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],

    camelcase: [ 'error', { properties: 'never' } ],

    'comma-dangle': [ 'error', 'never' ],

    'comma-spacing': [ 'error', { before: false, after: true } ],

    'comma-style': [
        'error',
        'last',
        {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false
            }
        }
    ],

    'computed-property-spacing': [ 'error', 'never' ],

    'consistent-return': 'error',

    'constructor-super': 'error',

    curly: [ 'error', 'multi-line' ],

    'default-case': [ 'error', { commentPattern: '^no default$' } ],

    'dot-location': [ 'error', 'property' ],

    'dot-notation': [ 'error', { allowKeywords: true } ],

    'eol-last': [ 'error', 'always' ],

    eqeqeq: [ 'error', 'always' ],

    'for-direction': 'error',

    'func-call-spacing': [ 'error', 'never' ],

    'func-names': 'warn',

    'function-paren-newline': [ 'error', 'consistent' ],

    'generator-star-spacing': [ 'error', { before: false, after: true } ],

    'getter-return': [ 'error', { allowImplicit: true } ],

    'global-require': 'error',

    'guard-for-in': 'error',

    'implicit-arrow-linebreak': [ 'error', 'beside' ],

    'import/default': 'off',

    'import/dynamic-import-chunkname': [
        'off',
        {
            importFunctions: [],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
        }
    ],

    'import/export': 'error',

    'import/exports-last': 'off',

    'import/extensions': [
        'error',
        'ignorePackages',
        {
            mjs: 'never',
            js: 'never',
            ts: 'never'
        }
    ],

    'import/first': 'error',

    'import/group-exports': 'off',

    'import/imports-first': 'off',

    'import/max-dependencies': 'off',

    'import/named': 'error',

    'import/namespace': 'off',

    'import/newline-after-import': 'error',

    'import/no-absolute-path': 'error',

    'import/no-amd': 'error',

    'import/no-anonymous-default-export': [
        'off',
        {
            allowArray: false,
            allowArrowFunction: false,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowLiteral: false,
            allowObject: false
        }
    ],

    'import/no-commonjs': 'off',

    'import/no-cycle': [ 'error', { maxDepth: Infinity } ],

    'import/no-default-export': 'off',

    'import/no-deprecated': 'off',

    'import/no-duplicates': 'error',

    // Replaced by "security/detect-non-literal-require".
    'import/no-dynamic-require': 'off',

    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                '**/scripts/**',
                '**/tests/**',
                '**/babel.config.js',
                '**/jest.config.js',
                '**/webpack.config.js',
                '**/webpack.config.*.js',
                '**/configs/**/*.{js,jsx,ts,tsx}'
            ],
            optionalDependencies: false
        }
    ],

    'import/no-internal-modules': [
        'off',
        {
            allow: []
        }
    ],

    'import/no-mutable-exports': 'error',

    'import/no-named-as-default': 'error',

    'import/no-named-as-default-member': 'error',

    'import/no-named-default': 'error',

    'import/no-namespace': 'off',

    'import/no-nodejs-modules': 'off',

    'import/no-relative-parent-imports': 'off',

    'import/no-restricted-paths': 'off',

    'import/no-self-import': 'error',

    'import/no-unassigned-import': 'off',

    'import/no-unresolved': [ 'error', { commonjs: true, caseSensitive: true } ],

    'import/no-useless-path-segments': 'error',

    'import/no-webpack-loader-syntax': 'error',

    'import/order': [
        'error',
        {
            groups: [
                [
                    'builtin',
                    'external',
                    'internal'
                ]
            ]
        }
    ],

    'import/prefer-default-export': 'error',

    'import/unambiguous': 'off',

    indent: [
        'error',
        4,
        {
            SwitchCase: 0,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild'
            ],
            ignoreComments: false
        }
    ],

    'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],

    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }
    ],

    'linebreak-style': [ 'error', 'unix' ],

    'lines-around-directive': [
        'error',
        {
            before: 'always',
            after: 'always'
        }
    ],

    'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: false }
    ],

    'max-len': [
        'error',
        120,
        4,
        {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true
        }
    ],

    'new-cap': [
        'error',
        {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ]
        }
    ],

    'new-parens': 'error',

    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 } ],

    'no-alert': 'warn',

    'no-array-constructor': 'error',

    'no-bitwise': 'error',

    'no-buffer-constructor': 'error',

    'no-caller': 'error',

    'no-case-declarations': 'error',

    'no-class-assign': 'error',

    'no-compare-neg-zero': 'error',

    'no-cond-assign': [ 'error', 'always' ],

    'no-confusing-arrow': [ 'error', { allowParens: true } ],

    'no-console': 'warn',

    'no-const-assign': 'error',

    'no-constant-condition': 'warn',

    'no-control-regex': 'error',

    'no-debugger': 'error',

    'no-delete-var': 'error',

    'no-dupe-args': 'error',

    'no-dupe-class-members': 'error',

    'no-dupe-keys': 'error',

    'no-duplicate-case': 'error',

    'no-else-return': [ 'error', { allowElseIf: false } ],

    'no-empty': 'error',

    'no-empty-character-class': 'error',

    'no-empty-function': [ 'error', { allow: [ 'arrowFunctions', 'functions', 'methods' ] } ],

    'no-empty-pattern': 'error',

    'no-eval': 'error',

    'no-ex-assign': 'error',

    'no-extend-native': 'error',

    'no-extra-bind': 'error',

    'no-extra-boolean-cast': 'error',

    'no-extra-label': 'error',

    'no-extra-semi': 'error',

    'no-fallthrough': 'error',

    'no-floating-decimal': 'error',

    'no-func-assign': 'error',

    'no-global-assign': [ 'error', { exceptions: [] } ],

    'no-implied-eval': 'error',

    'no-inner-declarations': 'error',

    'no-invalid-regexp': 'error',

    'no-irregular-whitespace': 'error',

    'no-iterator': 'error',

    'no-label-var': 'error',

    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],

    'no-lone-blocks': 'error',

    'no-lonely-if': 'error',

    'no-loop-func': 'error',

    'no-mixed-operators': [
        'error',
        {
            groups: [
                [ '%', '**' ],
                [ '%', '+' ],
                [ '%', '-' ],
                [ '%', '*' ],
                [ '%', '/' ],
                [ '**', '+' ],
                [ '**', '-' ],
                [ '**', '*' ],
                [ '**', '/' ],
                [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
                [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
                [ '&&', '||' ],
                [ 'in', 'instanceof' ]
            ],
            allowSamePrecedence: false
        }
    ],

    'no-mixed-spaces-and-tabs': 'error',

    'no-multi-assign': 'error',

    'no-multi-spaces': [ 'error', { ignoreEOLComments: false } ],

    'no-multi-str': 'error',

    'no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 0 } ],

    'no-nested-ternary': 'error',

    'no-new': 'error',

    'no-new-func': 'error',

    'no-new-object': 'error',

    'no-new-require': 'error',

    'no-new-symbol': 'error',

    'no-new-wrappers': 'error',

    'no-obj-calls': 'error',

    'no-octal': 'error',

    'no-octal-escape': 'error',

    'no-param-reassign': [
        'error',
        {
            props: true,
            ignorePropertyModificationsFor: [ 'e', 'event', 'ctx', 'context', 'req', 'request', 'res', 'response', 'reply' ]
        }
    ],

    'no-path-concat': 'error',

    'no-plusplus': 'error',

    'no-proto': 'error',

    'no-prototype-builtins': 'error',

    'no-redeclare': 'error',

    'no-regex-spaces': 'error',

    'no-restricted-globals': [
        'error',
        'isFinite',
        'isNaN',
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'event',
        'external',
        'defaultstatus',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top'
    ],

    'no-restricted-properties': [
        'error',
        {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated'
        },
        {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.'
        },
        {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.'
        },
        {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.'
        },
        {
            property: 'forEach',
            message: 'Please use for..of loops instead.'
        }
    ],

    'no-restricted-syntax': [
        'error',
        {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
        },
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
        }
    ],

    'no-return-assign': [ 'error', 'always' ],

    'no-return-await': 'error',

    'no-script-url': 'error',

    'no-self-assign': [ 'error', { props: false } ],

    'no-self-compare': 'error',

    'no-sequences': 'error',

    'no-shadow-restricted-names': 'error',

    'no-spaced-func': 'error',

    'no-sparse-arrays': 'error',

    'no-tabs': 'error',

    'no-template-curly-in-string': 'error',

    'no-this-before-super': 'error',

    'no-throw-literal': 'error',

    'no-trailing-spaces': [ 'error', { skipBlankLines: false, ignoreComments: false } ],

    'no-undef': 'error',

    'no-undef-init': 'error',

    'no-underscore-dangle': [ 'error', { allow: [], allowAfterThis: false, allowAfterSuper: false, enforceInMethodNames: false } ],

    'no-unexpected-multiline': 'error',

    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],

    'no-unreachable': 'error',

    'no-unsafe-finally': 'error',

    'no-unsafe-negation': 'error',

    'no-unused-expressions': [ 'error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false } ],

    'no-unused-labels': 'error',

    'no-use-before-define': [ 'error', { functions: true, classes: true, variables: true } ],

    'no-useless-computed-key': 'error',

    'no-useless-concat': 'error',

    'no-useless-constructor': 'error',

    'no-useless-escape': 'error',

    'no-useless-rename': [ 'error', { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false } ],

    'no-useless-return': 'error',

    'no-var': 'error',

    'no-void': 'error',

    'no-whitespace-before-property': 'error',

    'no-with': 'error',

    'node/exports-style': [ 'error', 'module.exports' ],

    'node/no-unsupported-features/es-syntax': 'off',

    'node/prefer-global/buffer': [ 'error', 'never' ],

    'node/prefer-global/console': [ 'error', 'never' ],

    'node/prefer-global/process': [ 'error', 'never' ],

    'node/prefer-global/text-decoder': [ 'error', 'never' ],

    'node/prefer-global/text-encoder': [ 'error', 'never' ],

    'node/prefer-global/url': [ 'error', 'never' ],

    'node/prefer-global/url-search-params': [ 'error', 'never' ],

    'nonblock-statement-body-position': [ 'error', 'beside', { overrides: {} } ],

    'object-curly-newline': [
        'error',
        {
            ObjectExpression: { minProperties: Infinity, multiline: true, consistent: true },
            ObjectPattern: { minProperties: Infinity, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: Infinity, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: Infinity, multiline: true, consistent: true }
        }
    ],

    'object-curly-spacing': [ 'error', 'always' ],

    'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],

    'object-shorthand': [ 'error', 'always', { ignoreConstructors: false, avoidQuotes: true } ],

    'one-var': [ 'error', 'never' ],

    'one-var-declaration-per-line': [ 'error', 'always' ],

    'operator-assignment': [ 'error', 'always' ],

    'operator-linebreak': [ 'error', 'before', { overrides: { '=': 'none' } } ],

    'padded-blocks': [ 'error', { blocks: 'never', classes: 'never', switches: 'never' } ],

    'prefer-arrow-callback': [ 'error', { allowNamedFunctions: false, allowUnboundThis: true } ],

    'prefer-const': [ 'error', { destructuring: 'any', ignoreReadBeforeAssign: true } ],

    'prefer-destructuring': [
        'error',
        { VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: true, object: true } },
        { enforceForRenamedProperties: false }
    ],

    'prefer-numeric-literals': 'error',

    'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true } ],

    'prefer-rest-params': 'error',

    'prefer-spread': 'error',

    'prefer-template': 'error',

    'promise/no-native': 'error',

    'quote-props': [ 'error', 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],

    quotes: [ 'error', 'single', { avoidEscape: true } ],

    radix: 'error',

    'require-yield': 'error',

    'rest-spread-spacing': [ 'error', 'never' ],

    'security/detect-object-injection': 'off',

    semi: [ 'error', 'always' ],

    'semi-spacing': [ 'error', { before: false, after: true } ],

    'semi-style': [ 'error', 'last' ],

    'space-before-blocks': 'error',

    'space-before-function-paren': [ 'error', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],

    'space-in-parens': [ 'error', 'never' ],

    'space-infix-ops': 'error',

    'space-unary-ops': [ 'error', { words: true, nonwords: false, overrides: {} } ],

    'spaced-comment': [
        'error',
        'always',
        {
            line: { exceptions: [ '-', '+' ], markers: [ '/', '=', '!' ] },
            block: { exceptions: [ '-', '+' ], markers: [ '=', '!' ], balanced: true }
        }
    ],

    strict: [ 'error', 'never' ],

    'switch-colon-spacing': [ 'error', { after: true, before: false } ],

    'symbol-description': 'error',

    'template-curly-spacing': 'error',

    'template-tag-spacing': [ 'error', 'never' ],

    'unicode-bom': [ 'error', 'never' ],

    'use-isnan': 'error',

    'valid-typeof': [ 'error', { requireStringLiterals: true } ],

    'vars-on-top': 'error',

    'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],

    'yield-star-spacing': [ 'error', 'after' ],

    yoda: 'error'
};

const createBaseConfiguration = () => ({
    env: { es6: true, node: true },

    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 2018, sourceType: 'module', warnOnUnsupportedTypeScriptVersion: false },

    extends: [
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:security/recommended',
        'plugin:eslint-comments/recommended'
    ],

    plugins: [ '@typescript-eslint/tslint', 'import', 'promise', 'security' ],
    rules: { ...typescriptRules, ...javascriptRules },

    overrides: [ {
        files: [ '*.ts', '*.tsx' ],

        rules: {
            // for TypeScript method overloading.
            'import/export': 'off',
            'no-dupe-class-members': 'off'
        }
    } ],

    settings: {
        'import/extensions': [ '.mjs', '.js', '.ts', '.json' ],
        'import/ignore': [ 'node_modules', '\\.(scss|css|svg|json)$' ],
        'import/core-modules': [],
        'import/resolver': { node: { extensions: [ '.mjs', '.js', '.ts', '.json' ] } }
    }
});

// Exporting.
module.exports = createBaseConfiguration;
