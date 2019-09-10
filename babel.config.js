module.exports = api => {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env', { loose: true }],
			'@babel/preset-typescript',
		],
		plugins: [
			'@babel/plugin-transform-runtime',
			['@babel/plugin-proposal-decorators', { legacy: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
		],
	};
};
