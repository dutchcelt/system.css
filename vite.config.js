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
				forms: resolve(__dirname, 'forms.html'),
				theme: resolve(__dirname, 'openprops.html'),
				api: resolve(__dirname, 'style-api.html'),
			},
		},
	},
});
