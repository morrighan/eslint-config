/**
 * ESLint rules for TypeScript files with React.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    rules: {
        // For using TypeScript's typings instead of `prop-types` module.
        'react/prop-types': 'off'
    }
};
