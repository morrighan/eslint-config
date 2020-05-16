/**
 * Create advances rules to use rules of `@typescript-eslint/eslint-plugin` instead of rules from ESLint core.
 *
 * @param {import('eslint').Linter.RulesRecord} coreRules
 * @returns {import('eslint').Linter.RulesRecord}
 */
function createAdvancedRules(coreRules) {
    /** @type {import('eslint').Linter.RulesRecord} */
    const advancedRules = { ...coreRules };

    for (const ruleName of Object.keys(coreRules)) {
        advancedRules[`@typescript-eslint/${ruleName}`] = coreRules[ruleName];
        advancedRules[ruleName] = 'off';
    }

    return advancedRules;
}

// Exporting.
module.exports = createAdvancedRules;
