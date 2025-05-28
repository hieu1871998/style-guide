import { plugin } from '@repo/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [
	{
		plugins: {
			'@repo/eslint-plugin': plugin,
		},
	},
	...plugin.configs.next,
];
