import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import {
	presetIcons,
	presetWind,
} from 'unocss';

export default defineConfig({
	plugins: [UnoCSS({
		shortcuts: {
			'centerLayout': 'flex justify-center items-center',
		},
		presets: [
			// presetWind和presetUno的区别是，用presetWind的预设可以获得VS Code中windicss插件的提示，其他的都一样
			presetWind({
				darkMode: 'class',
			}),
			presetIcons({
				extraProperties: {
					'display': 'inline-block',
					'vertical-align': 'middle',
				},
			}),
		],
	}), sveltekit()]
});
