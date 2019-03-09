const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');

const removeCommonJS = async () => {
	await Promise.all(
		await fs
			.readdirSync(path.resolve(src))
			.map(async dir => {
				const stat = await fs.statSync(path.resolve(src, dir));

				if (stat.isDirectory()) {
					return exec(`rm -rf ${path.resolve(root, dir)}`)
				}

				return;
			})
	);

	await exec(`rm ${path.resolve(root, 'index.js')}`);
	await exec(`rm ${path.resolve(root, 'index.d.ts')}`);
};

const removeUMD = async () => {
	await exec(`rm -rf ${path.resolve(root, 'umd')}`);
};

const removeBuild = async () => await Promise.all([
	removeCommonJS(),
	removeUMD()
]);

removeBuild();
