/**
 * ESLint rules for JavaScript files with React.
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
    'import/extensions': [ 'error', 'ignorePackages', { mjs: 'never', js: 'never', jsx: 'never', ts: 'never', tsx: 'never' } ],

    'react/jsx-indent-props': [ 'error', 4 ],

    'react/no-multi-comp': [ 'error', { ignoreStateless: true } ],

    'react/jsx-indent': [ 'error', 4 ],

    'react/jsx-filename-extension': [ 'error', { extensions: [ '.jsx', '.tsx' ] } ]
};
