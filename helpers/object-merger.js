// Third-party modules.
const lodash = require('lodash');

// Local helpers.
const checkEquivalence = require('./equivalence-checker');

/** @type {Map<symbol, { from: any; to: any }>} */
const replacerMap = new Map();

/** @type {Map<symbol, any[]>} */
const keeperMap = new Map();

/**
 * Merge objects with custom array concatenation.
 * Lodash's default behaviour of array is changing element by each index.
 */
function performMerge(destination, source) {
    const destinationIsArray = Array.isArray(destination);
    const sourceIsKeptArray = typeof source === 'symbol' && keeperMap.has(source);
    const sourceIsArray = Array.isArray(source);

    switch (true) {
    case (destinationIsArray && sourceIsKeptArray): {
        const keptArray = keeperMap.get(source);

        keeperMap.delete(source);

        return keptArray;
    }

    case (destinationIsArray && sourceIsArray): {
        const concatenated = [ ...destination ];

        /** @type {symbol[]} */
        const replacerKeys = [];

        for (const value of source) {
            const isDuplicated = concatenated.includes(value);
            const isReplacing = typeof value === 'symbol' && replacerMap.has(value);

            if (isReplacing) {
                replacerKeys.push(value);
            }

            if (isDuplicated || isReplacing) {
                continue;
            }

            concatenated.push(value);
        }

        for (const replacerKey of replacerKeys) {
        /** @type {{ from: any; to: any }} */
            const context = replacerMap.get(replacerKey);

            replacerMap.delete(replacerKey);

            const index = concatenated.findIndex(value => checkEquivalence(value, context.from));

            if (index === -1) {
                continue;
            }

            concatenated.splice(index, 1, ...[ context.to ].flat());
        }

        return concatenated;
    }

    // Use Lodash's default action.
    default: {
        return undefined;
    }
    }
}

function merge(destination, ...sources) {
    return lodash.mergeWith(destination, ...sources, performMerge);
}

/**
 * Use this function if some element has to be replaced on merging.
 */
function replaceOnMerge(context) {
    const delegateSymbol = Symbol('eslint-config-hpcnt::helpers/object-merger::Replacer');

    replacerMap.set(delegateSymbol, context);

    return delegateSymbol;
}

/**
 * Use this function if a given array should be applied as-is to merged object.
 */
function keepOnMerge(array) {
    const delegateSymbol = Symbol('eslint-config-hpcnt::helpers/object-merger::Keeper');

    keeperMap.set(delegateSymbol, array);

    return delegateSymbol;
}

module.exports = {
    /** @type {typeof lodash.merge} */
    merge,

    /** @type {<T>(context: { from: T; to: T | T[]; }) => T} */
    replaceOnMerge,

    /** @type {<T extends any[]>(array: T) => T} */
    keepOnMerge
};
