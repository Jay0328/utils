module.exports = api => {
	const isES = api.env('es');
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					loose: true,
					useBuiltIns: 'entry',
					modules: isES ? false : 'commonjs',
				},
			],
			'@babel/preset-typescript',
		],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			"@babel/plugin-proposal-object-rest-spread",
			'@babel/plugin-proposal-json-strings',
		],
	};
};
