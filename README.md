# `@cichol/eslint-config`

An universal ESLint configuration for personal projects.

[![Build Status][github actions badge]][github actions][![License][license badge]](LICENSE)[![Package Version][npm package version badge]][npm package]

## Table of Contents

- [`@cichol/eslint-config`](#cicholeslint-config)
  - [Table of Contents](#table-of-contents)
  - [Requisites](#requisites)
  - [Installation](#installation)
  - [Use cases](#use-cases)
    - [JavaScript and TypeScript](#javascript-and-typescript)
    - [With React](#with-react)
  - [Contained presets and plugins](#contained-presets-and-plugins)

## Requisites

- ESLint `^6.8.0`
- TypeScript `^3.9.2`

## Installation

```sh
$ npm install --save-dev @cichol/eslint-config
```

## Use cases

### JavaScript and TypeScript

```json
{
    "extends": "@cichol/eslint-config"
}
```

### With React

```json
{
    "extends": "@cichol/eslint-config/react"
}
```

## Contained presets and plugins

- Presets
  - [eslint-config-airbnb][eslint-config-airbnb]
  - [eslint-config-airbnb-base][eslint-config-airbnb-base]
- Plugins
  - [eslint-plugin-import][eslint-plugin-import]
  - [eslint-plugin-node][eslint-plugin-node]
  - [eslint-plugin-promise][eslint-plugin-promise]
  - [eslint-plugin-security][eslint-plugin-security]
  - [eslint-plugin-eslint-comments][eslint-plugin-eslint-comments]
  - [eslint-plugin-react][eslint-plugin-react]
  - [eslint-plugin-jsx-a11y][eslint-plugin-jsx-a11y]

[github actions badge]: https://img.shields.io/github/workflow/status/morrighan/eslint-config/On%20default/develop?style=flat-square
[github actions]: https://github.com/morrighan/eslint-config/actions
[license badge]: https://img.shields.io/github/license/morrighan/eslint-config.svg?style=flat-square
[npm package version badge]: https://img.shields.io/npm/v/@cichol/eslint-config.svg?style=flat-square
[npm package]: https://www.npmjs.com/package/@cichol/eslint-config
[eslint]: https://eslint.org/
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-preset-airbnb
[eslint-config-airbnb-base]: https://www.npmjs.com/package/eslint-config-airbnb-base
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-node]: https://www.npmjs.com/package/eslint-plugin-node
[eslint-plugin-promise]: https://www.npmjs.com/package/eslint-plugin-promise
[eslint-plugin-security]: https://www.npmjs.com/package/eslint-plugin-security
[eslint-plugin-eslint-comments]: https://www.npmjs.com/package/eslint-plugin-eslint-comments
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
