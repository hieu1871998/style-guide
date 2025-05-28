import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import reactRules from '../rules/react.js';
import baseConfig from './base.js';
import tseslintConfig from './typescript.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...baseConfig,
	js.configs.recommended,
	eslintConfigPrettier,
	importPlugin.flatConfigs.recommended,
	...tseslintConfig,
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended?.languageOptions,
			globals: {
				...globals.serviceworker,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			// Use the Node resolver by default.
			'import/resolver': { node: {} },
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
	},
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
		},
	},
	{
		plugins: {
			'react-hooks': pluginReactHooks,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...pluginReactHooks.configs['recommended-latest'].rules,
			...reactRules,
		},
	},
	{
		files: [
			'*.config.cjs',
			'*.config.js',
			'*.config.mjs',
			'*.config.ts',
			'**/*.d.ts',
			'**/*.stories.ts',
			'**/*.stories.tsx',
			'app/**/*error.tsx',
			'app/**/layout.tsx',
			'app/**/not-found.tsx',
			'app/**/opengraph-image.tsx',
			'app/**/page.tsx',
			'app/apple-icon.tsx',
			'app/robots.ts',
			'app/sitemap.ts',
			'next.config.mjs',
			'src/app/**/*error.tsx',
			'src/app/**/layout.tsx',
			'src/app/**/not-found.tsx',
			'src/app/**/opengraph-image.tsx',
			'src/app/**/page.tsx',
			'src/app/apple-icon.tsx',
			'src/app/robots.ts',
			'src/app/sitemap.ts',
		],
		rules: {
			'import/no-default-export': 'off',
			'import/prefer-default-export': ['error', { target: 'any' }],
		},
	},
];

export default config;
