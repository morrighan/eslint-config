// Local helpers.
const createConfiguration = require('./helpers/configuration-creator');

/**
 * @returns {import('eslint').Linter.Config}
 */
function createConfigurate() {
    return createConfiguration();
}

// Exporting.
module.exports = createConfigurate();
