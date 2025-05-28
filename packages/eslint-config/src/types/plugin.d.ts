import { type Linter } from 'eslint';

declare const plugin: {
	readonly meta: {
		readonly name: string;
		readonly namespace: string;
	};

	readonly configs: {
		readonly base: Readonly<Linter.Config[]>;
		readonly comments: Readonly<Linter.Config[]>;
		readonly next: Readonly<Linter.Config[]>;
		readonly react: Readonly<Linter.Config[]>;
		readonly typescript: Readonly<Linter.Config[]>;
	};
};
