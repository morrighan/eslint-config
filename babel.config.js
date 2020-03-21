// Babel configuration.
const presets = Object.entries({
    '@babel/preset-env': { targets: { node: 'current' } },
    '@babel/preset-typescript': {}
});

const plugins = Object.entries({});

module.exports = { presets, plugins };
