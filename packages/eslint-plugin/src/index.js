import base from './configs/base.js';
import comments from './configs/comments.js';
import next from './configs/next.js';
import react from './configs/react.js';
import typescript from './configs/typescript.js';
import vitest from './configs/vitest.js';

/** @type {import('eslint').ESLint.Plugin} */
export const plugin = {
	meta: {
		name: '@jablab/eslint-plugin',
		version: '1.0.0',
	},
	configs: {
		base,
		comments,
		next,
		react,
		typescript,
		vitest,
	},
};
