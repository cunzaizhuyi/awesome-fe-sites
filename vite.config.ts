import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import presetIcons from '@unocss/preset-icons';
import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';



export default defineConfig(() => {
  return {
    plugins: [UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      shortcuts: {
        'centerLayout': 'flex justify-center items-center',
      },
    }), qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
