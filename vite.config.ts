import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import UnoCSS from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';


export default defineConfig(() => {
  return {
    plugins: [
      UnoCSS({
        shortcuts: {
          'centerLayout': 'flex justify-center items-center',
        },
        presets: [
          presetUno({
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
