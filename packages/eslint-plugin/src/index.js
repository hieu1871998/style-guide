import { name, version } from '../package.json';
import base from './configs/base.js';
import comments from './configs/comments.js';
import next from './configs/next.js';
import react from './configs/react.js';
import typescript from './configs/typescript.js';

/** @type {import('eslint').ESLint.Plugin} */
export const plugin = {
	meta: {
		name,
		version,
	},
	configs: {
		base,
		comments,
		next,
		react,
		typescript,
	},
};
