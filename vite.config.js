import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/system.css/',
	build: {
		minify: false,
		target: ['esnext', 'safari17', 'firefox124', 'chrome117'],
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				theme: resolve(__dirname, 'openprops.html'),
			},
		},
	},
});
