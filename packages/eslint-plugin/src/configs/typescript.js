import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

import { TYPESCRIPT_FILES } from '../lib/constants.js';
import typescriptExtensionRules from '../rules/typescript.extension.js';
import typescriptImportRules from '../rules/typescript.import.js';
import typescriptRules from '../rules/typescript.js';

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	importPlugin.flatConfigs.typescript,
	eslintConfigPrettier,
	{
		files: TYPESCRIPT_FILES,
		rules: {
			...typescriptRules,
			...typescriptExtensionRules,
			...typescriptImportRules,
		},
	},
];

export default config;
