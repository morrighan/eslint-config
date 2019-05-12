// Configuration creators.
const createBaseConfiguration = require('./base');
const { createReactConfiguration } = require('./react');

// Configuration.
const configuration = createBaseConfiguration();

Reflect.defineProperty(configuration, 'configurate', {
    value: ({ react = false } = {}) => (react ? createReactConfiguration() : createBaseConfiguration()),
    writable: true,
    enumerable: false,
    configurable: true
});

// Exporting.
module.exports = configuration;
