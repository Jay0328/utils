const path = require('path');
const { rollup } = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const entries = require('./entries');

const build = async () => {
	const input = await entries();
	const plugins = [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
	];
	const bundle = await rollup({ input, plugins });
	const dir = path.resolve(__dirname, '..');

	await bundle.write({
		dir,
		format: 'cjs',
		sourcemap: false
	});
};

build();
