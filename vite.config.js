import { resolve } from 'path';
import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
	base: '/system.css/',
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},

	build: {
		minify: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				forms: resolve(__dirname, 'forms.html'),
				theme: resolve(__dirname, 'openprops.html'),
				api: resolve(__dirname, 'style-api.html'),
				example: resolve(__dirname, 'example.html'),
			},
		},
	},
});
