import type { HotSite } from "@/types";
import vue from '@/lib/images/logos/Vue.svg';
import react from '@/lib/images/logos/React.svg';
import antdesign_react from '@/lib/images/logos/AntDesign.svg';
import svelte from '@/lib/images/logos/Svelte.svg';
import astro from '@/lib/images/logos/Astro.svg';
import solid from '@/lib/images/logos/Solid.svg';
import vite from '@/lib/images/logos/Vite.svg';
import webpack from '@/lib/images/logos/Webpack.svg';
import rollup from '@/lib/images/logos/Rollup.svg';
import leetcode from '@/lib/images/logos/LeetCode.svg';
import esbuild from '@/lib/images/logos/Esbuild.svg';
import tailwind from '@/lib/images/logos/TailwindCSS.svg';
import qwik from '@/lib/images/logos/Qwik.svg';
import bun from '@/lib/images/logos/Bun.svg';
import unocss from '@/lib/images/logos/UnoCSS.svg';
import nuxt from '@/lib/images/logos/Nuxt.svg';

export const hotSites: HotSite[] = [
	{
		name: "Vue",
		link: "https://cn.vuejs.org/guide/introduction.html",
		logo: vue,
	},
	{
		name: "React",
		link: "https://react.dev/",
		logo: react,
	},
	{
		name: "Ant Design",
		link: "https://ant.design/components/button-cn",
		logo : antdesign_react,
	},
	{
		name: "Svelte",
		link: "https://svelte.dev/docs",
		logo: svelte,
	},
	{
		name: "Qwik",
		link: "https://qwik.builder.io/docs/overview/",
		logo: qwik,
	},
	{
		name: "Astro",
		link: "https://astro.build/",
		logo: astro,
	},
	{
		name: "Solid",
		link: "https://www.solidjs.com/",
		logo: solid,
	},
	{
		name: "Vite",
		link: "https://cn.vitejs.dev/guide/",
		logo: vite
	},
	{
		name: "Rollup",
		link: "https://rollupjs.org/introduction/",
		logo: rollup
	},
	{
		name: "esbuild",
		link: "https://esbuild.github.io/",
		logo: esbuild,
	},
	{
		name: "webpack",
		link: "https://webpack.js.org/concepts/",
		logo: webpack
	},
	{
		name: "TailwindCSS",
		link: "https://tailwindcss.com/",
		logo: tailwind
	},
	{
		name: "UnoCSS",
		link: "https://github.com/unocss/unocss",
		logo: unocss,
	},
	{
		name: "LeetCode",
		link: "https://leetcode.cn/problemset/all/",
		logo: leetcode
	},
	{
		name: "Bun",
		link: "https://bun.sh/docs",
		logo: bun
	},
	{
		name: "Nuxt",
		link: "https://nuxt.com/",
		logo: nuxt,
	}
];
