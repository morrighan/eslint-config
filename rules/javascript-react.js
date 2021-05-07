/**
 * ESLint rules for JavaScript files with React.
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
    /**
     * Enforces consistent indentation.
     *
     * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md}
     */
    'react/jsx-indent-props': [ 'error', 4 ],

    /**
     * Prevents multiple class component definition per file.
     *
     * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
     */
    'react/no-multi-comp': [ 'error', { ignoreStateless: true } ],

    /**
     * Enforces consistent indentation.
     *
     * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md}
     */
    'react/jsx-indent': [ 'error', 4 ],

    /**
     * Restricts file extensions that may contain JSX.
     *
     * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
     */
    'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.tsx' ] } ],

    /**
     * Enforces the state initialization style to be with a class property.
     *
     * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md}
     */
    'react/state-in-constructor': [ 'error', 'never' ]
};
