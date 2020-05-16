// Node.js built-in APIs.
const { deepStrictEqual, AssertionError } = require('assert');

/**
 * Check the equivalence of two values deeply.
 *
 * @template A
 * @template B
 * @param {A} actual
 * @param {B} expected
 * @returns {A extends B ? B extends A ? true : false : false}
 */
function checkEquivalence(actual, expected) {
    try {
        deepStrictEqual(actual, expected);
    } catch (error) {
        if (error instanceof AssertionError) {
            return false;
        }

        throw error;
    }

    return true;
}

// Exporting.
module.exports = checkEquivalence;
