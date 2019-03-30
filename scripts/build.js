const path = require('path');
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const typescript = require('rollup-plugin-typescript');
const { uglify } = require('rollup-plugin-uglify');
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

const buildUMD = async () => {
	const input = path.resolve(root, 'src', 'index.ts');
	const name = 'Utils';
	const buildConfigs = [
		{
			file: './umd/utils.development.js',
			uglifyOptions: {
				compress: false,
				mangle: false,
				output: {
					comments: false,
					beautify: true,
				},
			}
		},
		{
			file: './umd/utils.production.min.js',
		}
	];
	const write = async ({ file, uglifyOptions }) =>
		(await rollup({
			input,
			plugins: [
				typescript(),
				uglify(uglifyOptions)
			]
		})).write({
			file,
			format: 'umd',
			sourcemap: false,
			interop: false,
			name
		});

	await Promise.all(buildConfigs.map(write));
};

const build = async () => await Promise.all([
	buildES(),
	buildUMD()
]);

build();
