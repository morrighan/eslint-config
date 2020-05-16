// Local helpers.
const createConfiguration = require('./helpers/configuration-creator');

// Configuration fragments.
const configurationPathForJSX = require.resolve('./fragments/javascript-react');
const { rules: rulesForTSX } = require('./fragments/typescript-react');

// Local helpers.
const { merge, replaceOnMerge, keepOnMerge } = require('./helpers/object-merger');

// Constants.
const extensions = [ '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json' ];

/**
 * @returns {import('eslint').Linter.Config}
 */
function createConfigurate() {
    const baseConfiguration = createConfiguration();

    const configurationOverridenForUsingReact = {
        extends: [
            replaceOnMerge({ from: 'airbnb-base', to: 'airbnb' }),
            configurationPathForJSX
        ],

        overrides: [ {
            files: [ '*.tsx' ],
            rules: rulesForTSX
        } ],

        settings: {
            'import/extensions': keepOnMerge(extensions),
            'import/resolver': { node: { extensions: keepOnMerge(extensions) } }
        }
    };

    return merge(baseConfiguration, configurationOverridenForUsingReact);
}

// Exporting.
module.exports = createConfigurate();
