// Node.js built-in APIs.
const { deepStrictEqual, AssertionError } = require('assert');

module.exports = function checkEquivalence(actual, expected) {
    try {
        deepStrictEqual(actual, expected);
    } catch (error) {
        if (error instanceof AssertionError) {
            return false;
        }

        throw error;
    }

    return true;
};
