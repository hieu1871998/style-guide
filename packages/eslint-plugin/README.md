# @jablab/eslint-plugin

A custom ESLint plugin and shareable config for JavaScript, TypeScript, React, and Next.js projects. This package provides a set of curated rules and configurations to help enforce code quality, consistency, and best practices across your codebase.

## Features

- **Comprehensive rule sets** for JavaScript, TypeScript, React, and Next.js
- **Opinionated import sorting** with `simple-import-sort`
- **Best practices** and stylistic rules
- **Prettier integration** for code formatting
- **Support for modern ECMAScript features**
- **Flat config support** (ESLint v9+)

## Installation

```bash
pnpm add -D @jablab/eslint-plugin
# or
yarn add -D @jablab/eslint-plugin
# or
npm install --save-dev @jablab/eslint-plugin
```

## Usage

Add the plugin to your ESLint configuration. Example using the flat config format (recommended for ESLint v9+):

```js
// eslint.config.js or eslint.config.mjs
import { plugin as jablabPlugin } from '@jablab/eslint-plugin';

export default [
	...jablabPlugin.configs.base,
	// or for React/Next.js/TypeScript:
	// ...jablabPlugin.configs.react,
	// ...jablabPlugin.configs.next,
	// ...jablabPlugin.configs.typescript,
];
```

Or, if using legacy config:

```json
{
	"extends": ["plugin:@jablab/base"]
}
```

## Available Configs

- `base` – General JavaScript/TypeScript rules
- `comments` – Rules for ESLint directive comments
- `react` – React-specific rules
- `next` – Next.js-specific rules
- `typescript` – TypeScript-specific rules

## Example: Import Sorting

This plugin enforces a consistent import order using `simple-import-sort`. Example:

```js
import React from 'react';
import express from 'express';
import lodash from 'lodash';
import myUtil from '@/utils/myUtil';
import helper from './helper';
import styles from './styles.css';
```

## License

MIT
