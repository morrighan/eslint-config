/** @type {import('eslint').Linter.Config} */
const airbnbBase = require('eslint-config-airbnb-base');

/** @type {Record<string, import('eslint').Linter.RulesRecord>} */
const airbnbBaseRules = airbnbBase.extends
    .map(rulePath => require(rulePath).rules) // eslint-disable-line global-require, security/detect-non-literal-require
    .reduce((concatenated, rules) => ({ ...concatenated, ...rules }), {});

// Exporting.
module.exports = airbnbBaseRules;
