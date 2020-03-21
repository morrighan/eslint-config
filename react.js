// Base configuration.
const createConfiguration = require('./base');

// Local rules.
const configForJSX = require('./configs/javascript-react');
const { rules: rulesForTSX } = require('./configs/typescript-react');

// Local helpers.
const { replaceOnMerge, keepOnMerge } = require('./helpers/merger');

// Constants.
const extensions = [ '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json' ];

// Exporting.
module.exports = createConfiguration({
    extends: [
        replaceOnMerge({ from: 'airbnb-base', to: [ 'airbnb', 'airbnb/hooks' ] }),
        configForJSX
    ],

    overrides: [ {
        files: [ '*.tsx' ],
        rules: rulesForTSX
    } ],

    settings: {
        'import/extensions': keepOnMerge(extensions),
        'import/resolver': { node: { extensions: keepOnMerge(extensions) } }
    }
});
