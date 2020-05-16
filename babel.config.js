/**
 * @param {import('@babel/core').ConfigAPI} API
 * @returns {import('@babel/core').TransformOptions}
 */
function configureBabel(API) {
    API.assertVersion('^7.9.0');
    API.cache.never();

    return {
        presets: [
            [ '@babel/preset-env', { targets: { node: 'current' } } ],
            [ '@babel/preset-typescript', {} ]
        ],

        plugins: []
    };
}

module.exports = configureBabel;
