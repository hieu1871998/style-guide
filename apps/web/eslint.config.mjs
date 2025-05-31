import { plugin } from '@jablab/eslint-plugin';

/** @type {import("eslint").Linter.Config} */
export default [
	{
		plugins: {
			'@jablab/eslint-plugin': plugin,
		},
	},
	...plugin.configs.next,
	...plugin.configs.vitest,
];
