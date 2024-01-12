import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/system.css/',
	build: {
		minify: true,
		target: ['esnext', 'safari17', 'firefox124', 'chrome117'],
		rollupOptions: {
			input: {
				system: resolve(__dirname, 'index.css'),
			},
			output: {
				assetFileNames: `build/[name].min.[ext]`,
			},
		},
	},
});
