import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
	plugins: [],
	//If you are deploying to https://<USERNAME>.github.io/, you can omit base as it defaults to '/'.
	base: '/',
	//If you are deploying to https://<USERNAME>.github.io/<REPO>/, for example your repository is at https://github.com/<USERNAME>/<REPO>, then set base to '/<REPO>/'.
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@img': resolve(__dirname, './src/assets/img'),
		},
	},
	server: {
		port: 3000,
	},
	build: {
		emptyOutDir: true,
		sourcemap: true,
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
		},
	},
});
