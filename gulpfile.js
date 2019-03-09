const { src, watch, series, parallel } = require('gulp');
const typedoc = require('gulp-typedoc');
const browsersync = require('browser-sync').create();
const { exec } = require('child_process');
const tsconfig = require('./tsconfig.json');

const globs = [
	'src/*.ts',
	'src/**/*.ts',
	'!src/*.test.ts',
	'!src/**/*.test.ts',
];

const browserSync = cb => {
	browsersync.init({
		server: {
			baseDir: "./docs/"
		},
		port: 5000
	});
	cb();
};

const browserSyncReload = cb => {
	browsersync.reload();
	cb();
};

const clean = async cb => {
	await exec('rm -rf ./docs');
	cb();
};

const buildDoc = () =>
	src(globs)
		.pipe(typedoc({ ...tsconfig.typedocOptions }));

const watchFiles = () => watch(globs, series(buildDoc, browserSyncReload));

exports.default = series(clean, buildDoc, parallel(watchFiles, browserSync));
