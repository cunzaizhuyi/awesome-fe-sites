import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';
import {
  presetIcons,
  presetWind,
} from 'unocss'


export default defineConfig(() => {
  return {
    plugins: [
      UnoCSS({
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
      }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        // 'Cache-Control': 'public, max-age=600',
        'Cache-Control': 'no-store',
      },
    },
  };
});
