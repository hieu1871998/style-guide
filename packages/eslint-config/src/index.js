import base from './configs/base.js';
import comments from './configs/comments.js';
import next from './configs/next.js';
import react from './configs/react.js';
import typescript from './configs/typescript.js';

/** @type {import('eslint').ESLint.Plugin} */
export const plugin = {
	meta: {
		name: 'eslint-plugin-frontend',
		namespace: '@hieuvi',
	},
	configs: {
		base,
		comments,
		next,
		react,
		typescript,
	},
};
