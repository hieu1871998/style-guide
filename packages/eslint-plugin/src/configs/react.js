import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import reactRules from '../rules/react.js';
import baseConfig from './base.js';
import tseslintConfig from './typescript.js';

/** @type {import("eslint").Linter.Config} */
export const reactConfig = {
	name: '@jablab/eslint-config-react',
	languageOptions: {
		...pluginReact.configs.flat.recommended?.languageOptions,
		globals: {
			...globals.serviceworker,
			...globals.browser,
		},
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	plugins: {
		'react-hooks': pluginReactHooks,
	},
	settings: { react: { version: 'detect' } },
	rules: {
		...pluginReactHooks.configs['recommended-latest'].rules,
		...reactRules,
		'import/no-cycle': 'error',
	},
};

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]}
 */
const configs = [
	js.configs.recommended,
	eslintConfigPrettier,
	importPlugin.flatConfigs.recommended,
	...baseConfig,
	...tseslintConfig,
	pluginReact.configs.flat.recommended,
	reactConfig,
];

export default configs;
