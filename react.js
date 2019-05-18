// Base configuration.
const createBaseConfiguration = require('./base');

// Rules.
const javascriptRules = {
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            mjs: 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }
    ]
};

const reactSpecificRules = {
    'jsx-quotes': [ 'error', 'prefer-double' ],

    'react/forbid-prop-types': [ 'error', {
        forbid: [ 'any', 'array', 'object' ],
        checkContextTypes: true,
        checkChildContextTypes: true
    } ],

    'react/jsx-boolean-value': [ 'error', 'never', { always: [] } ],

    'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],

    'react/jsx-closing-tag-location': 'error',

    'react/jsx-curly-spacing': [ 'error', 'never', { allowMultiline: true } ],

    'react/jsx-indent-props': [ 'error', 4 ],

    'react/jsx-max-props-per-line': [ 'error', { maximum: 1, when: 'multiline' } ],

    'react/jsx-no-bind': [
        'error',
        {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: false,
            ignoreDOMComponents: true
        }
    ],

    'react/jsx-no-duplicate-props': [ 'error', { ignoreCase: true } ],

    'react/jsx-no-undef': 'error',

    'react/jsx-pascal-case': [ 'error', { allowAllCaps: true, ignore: [] } ],

    'react/jsx-sort-default-props': [ 'off', { ignoreCase: true } ],

    'react/jsx-uses-react': [ 'error' ],

    'react/jsx-uses-vars': 'error',

    'react/no-danger': 'warn',

    'react/no-deprecated': [ 'error' ],

    'react/no-did-update-set-state': 'error',

    'react/no-will-update-set-state': 'error',

    'react/no-is-mounted': 'error',

    'react/no-multi-comp': [ 'error', { ignoreStateless: true } ],

    'react/no-string-refs': 'error',

    'react/no-unknown-property': 'error',

    'react/prefer-es6-class': [ 'error', 'always' ],

    'react/prefer-stateless-function': [ 'error', { ignorePureComponents: true } ],

    'react/prop-types': [ 'error', { ignore: [], customValidators: [], skipUndeclared: false } ],

    'react/react-in-jsx-scope': 'error',

    'react/require-render-return': 'error',

    'react/self-closing-comp': 'error',

    'react/sort-comp': [
        'error',
        {
            order: [
                'static-methods',
                'instance-variables',
                'lifecycle',
                '/^on.+$/',
                'getters',
                'setters',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'instance-methods',
                'everything-else',
                'rendering'
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ],
                rendering: [
                    '/^render.+$/',
                    'render'
                ]
            }
        }
    ],

    'react/jsx-wrap-multilines': [
        'error',
        {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line'
        }
    ],

    'react/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],

    'react/jsx-equals-spacing': [ 'error', 'never' ],

    'react/jsx-indent': [ 'error', 4 ],

    'react/jsx-no-target-blank': [ 'error', { enforceDynamicLinks: 'always' } ],

    'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.tsx' ] } ],

    'react/jsx-no-comment-textnodes': 'error',

    'react/no-render-return-value': 'error',

    'react/no-find-dom-node': 'error',

    'react/forbid-component-props': [ 'off', { forbid: [] } ],

    'react/no-danger-with-children': 'error',

    'react/no-unused-prop-types': [ 'error', { customValidators: [], skipShapeProps: true } ],

    'react/style-prop-object': 'error',

    'react/no-unescaped-entities': 'error',

    'react/no-children-prop': 'error',

    'react/jsx-tag-spacing': [
        'error',
        {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }
    ],

    'react/no-array-index-key': 'error',

    'react/require-default-props': [ 'error', { forbidDefaultForRequired: true } ],

    'react/forbid-foreign-prop-types': [ 'warn', { allowInPropTypes: true } ],

    'react/void-dom-elements-no-children': 'error',

    'react/default-props-match-prop-types': [ 'error', { allowRequiredDefaults: false } ],

    'react/no-redundant-should-component-update': 'error',

    'react/no-unused-state': 'error',

    'react/no-typos': 'error',

    'react/jsx-curly-brace-presence': [ 'error', { props: 'never', children: 'never' } ],

    'react/jsx-one-expression-per-line': [ 'error', { allow: 'single-child' } ],

    'react/destructuring-assignment': [ 'error', 'always' ],

    'react/no-access-state-in-setstate': 'error',

    'react/button-has-type': [ 'error', { button: true, submit: true, reset: false } ],

    'react/no-this-in-sfc': 'error',

    'react/jsx-props-no-multi-spaces': 'error',

    'react-hooks/rules-of-hooks': 'error',

    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/anchor-has-content': [ 'error', { components: [] } ],

    'jsx-a11y/aria-role': [ 'error', { ignoreNonDom: false } ],

    'jsx-a11y/aria-props': 'error',

    'jsx-a11y/aria-proptypes': 'error',

    'jsx-a11y/aria-unsupported-elements': 'error',

    'jsx-a11y/alt-text': [
        'error',
        {
            elements: [ 'img', 'object', 'area', 'input[type="image"]' ],
            img: [],
            object: [],
            area: [],
            'input[type="image"]': []
        }
    ],

    'jsx-a11y/img-redundant-alt': 'error',

    'jsx-a11y/label-has-for': [
        'error',
        {
            components: [],
            required: { every: [ 'nesting', 'id' ] },
            allowChildren: false
        }
    ],

    'jsx-a11y/label-has-associated-control': [
        'error',
        {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'both',
            depth: 25
        }
    ],

    'jsx-a11y/mouse-events-have-key-events': 'error',

    'jsx-a11y/no-access-key': 'error',

    'jsx-a11y/interactive-supports-focus': 'error',

    'jsx-a11y/role-has-required-aria-props': 'error',

    'jsx-a11y/role-supports-aria-props': 'error',

    'jsx-a11y/tabindex-no-positive': 'error',

    'jsx-a11y/heading-has-content': [ 'error', { components: [ '' ] } ],

    'jsx-a11y/html-has-lang': 'error',

    'jsx-a11y/lang': 'error',

    'jsx-a11y/no-distracting-elements': [ 'error', { elements: [ 'marquee', 'blink' ] } ],

    'jsx-a11y/scope': 'error',

    'jsx-a11y/click-events-have-key-events': 'error',

    'jsx-a11y/no-static-element-interactions': [ 'error', { handlers: [ 'onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp' ] } ],

    'jsx-a11y/no-noninteractive-element-interactions': [ 'error', { handlers: [ 'onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp' ] } ],

    'jsx-a11y/accessible-emoji': 'error',

    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    'jsx-a11y/iframe-has-title': 'error',

    'jsx-a11y/no-autofocus': [ 'error', { ignoreNonDOM: true } ],

    'jsx-a11y/no-redundant-roles': 'error',

    'jsx-a11y/media-has-caption': [ 'error', { audio: [], video: [], track: [] } ],

    'jsx-a11y/no-interactive-element-to-noninteractive-role': [ 'error', { tr: [ 'none', 'presentation' ] } ],

    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'error',
        {
            ul: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
            ol: [ 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid' ],
            li: [ 'menuitem', 'option', 'row', 'tab', 'treeitem' ],
            table: [ 'grid' ],
            td: [ 'gridcell' ]
        }
    ],

    'jsx-a11y/no-noninteractive-tabindex': [ 'error', { tags: [], roles: [ 'tabpanel' ] } ],

    'jsx-a11y/anchor-is-valid': [
        'error',
        {
            components: [ 'Link' ],
            specialLink: [ 'to' ],
            aspects: [ 'noHref', 'invalidHref', 'preferButton' ]
        }
    ]
};

const createReactConfiguration = () => {
    const base = createBaseConfiguration();

    const configuration = {
        ...base,

        parserOptions: { ...base.parserOptions, jsx: true },
        plugins: [ ...base.plugins, 'react', 'react-hooks', 'jsx-a11y' ],
        rules: { ...base.rules, ...javascriptRules, ...reactSpecificRules },

        settings: {
            ...base.settings,

            'import/extensions': [ '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json' ],
            'import/resolver': { node: { extensions: [ '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json' ] } },
            react: { pragma: 'React', version: 'detect' },
            propWrapperFunctions: [ 'Object.freeze' ]
        }
    };

    Reflect.defineProperty(configuration, 'createReactConfiguration', {
        value: createReactConfiguration,
        writable: true,
        enumerable: false,
        configurable: true
    });

    return configuration;
};

// Exporting.
module.exports = createReactConfiguration();
