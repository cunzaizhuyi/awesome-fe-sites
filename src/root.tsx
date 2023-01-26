import { component$, useClientEffect$, useStyles$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';
// import presetIcons from "@unocss/preset-icons/browser";
import 'uno.css';


export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  useClientEffect$(() => {
    // window.__unocss = {
    //   shortcuts: {
    //     'centerLayout': 'flex justify-center items-center',
    //   },
    //   presets: [
    //     presetIcons({
    //       extraProperties: {
    //         'display': 'inline-block',
    //         'vertical-align': 'middle',
    //       },
    //     })
    //   ],
    // }
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/full.global.js"></script>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
