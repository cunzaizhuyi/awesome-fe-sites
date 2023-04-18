import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import customIconJson from './src/lib/customIcon/customIcon.json'
import * as hotSites from "./src/utils/hotSites";
import {buildTolls, cssSites, otherSites, runtimes} from "./src/utils/hotSites";
const extractIconClasses = (category: { sites: { iconClass: string }[] }) => {
  return category.sites.map(({ iconClass }) => iconClass);
};
export default defineConfig({
  shortcuts: {
    'centerLayout': 'flex justify-center items-center',
  },
  rules: [
    [
      /^transition-cusbezier-(\d+)$/,
      ([, d]) => ({ transition: `all ${d}ms var(--ani-bezier)` }),
      { autocomplete: 'transition-cusbezier-400' },
    ],
  ],
  presets: [
    presetUno({
      darkMode: 'class',
    }),
    presetWebFonts({
      // we can use the class "fonts-Inter" to give a font to a DOM element, but it doesn't quite fit our scenario
      // so it is only used for importing text.
      fonts: {
        provider: 'bunny',
        Inter: [{ name: 'Inter' }],
        NotoSerifSC: [{ name: 'Noto Serif SC' ,  weights: ['500', '600', '700'] }],
      },
    }),
    presetAttributify(), // This is Attributify Mode for UnoCSS. such as <div border="2 rounded blue-200" />
    presetIcons({
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        cus: {
          // the key and value are extracted from the JSON, and the value of "value.iconMain" is set as the value of "key", which forms an object that is destructured.
          // e.g. { "tailwindcss": "<svg>xxx</svg>" },
          ...Object.fromEntries(
            Object.entries(customIconJson).map(([key, value]) => [key, value.iconMain])
          ),
        },
      },
    }),
  ],
  theme: {
    colors: {
      // After using the `theme()` directive, you can then use `text-primary`, `bg-primary`, `border-primary`, and so on.
      // If there isn't a class available in Uno for a specific element, such as one for text or background, you can use the theme() directive.
      // e.g. text-decoration-color: theme('colors.primary');
      primary: '#646cff',
    },
  },
  transformers: [
    transformerDirectives(), // Supports the @apply text-center my-0 font-medium; syntax.
    transformerVariantGroup(), // <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
  ],
  variants: [
    // Uno does not support using `@apply !text-center` syntax in .scss files to represent `!important`. It will result in an error.
    // Here's a variation for writing !important in Uno that also makes any class starting with 'I_' important, and is compatible with .scss files.
    // For example, `@apply I_text-center;` will be converted to the following CSS: `text-align: center !important;`;
    matcher => {
      if (!matcher.startsWith('I_')) {
        return matcher
      }
      return {
        matcher: matcher.slice(2),
        body: body => {
          body.forEach(v => v[1] && (v[1] += ' !important'))
          return body
        },
      }
    },
  ],
  // Here, we are manually adding `iconName` to UnoCSS because it is not being picked up by the scanner from the JSON/TS file.
  safelist: [
    // Manually add a custom icon.
    ...Object.values(customIconJson).map((i) => i.iconName),

    // Manually add the icon for a popular website.
    ...Object.values(hotSites).flatMap(extractIconClasses),
  ],
})
