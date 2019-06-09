const path = require('path');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const entries = require('./entries');

const root = path.resolve(__dirname, '..');

const buildES = async () => {
	const input = await entries();
	const plugins = [
		babel({
			exclude: 'node_modules/**',
			extensions: ['.ts', '.js']
		})
	];
	const external = Object
		.entries(input)
		.map(([ignored, filePath]) => {
			if (filePath.includes('index.ts')) {
				return filePath.replace('/index.ts', '');
			}

			return filePath.replace('.ts', '');
		});
	const bundle = await rollup({ input, plugins, external });
	const dir = root;

	await bundle.write({
		dir,
		format: 'es',
		sourcemap: false,
		interop: false,
	});
};

const build = async () => await Promise.all([
	buildES(),
]);

build();
