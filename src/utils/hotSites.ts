import type { HotSite } from "@/types";
import vue from '@/lib/images/logos/vue.png';
import react from '@/lib/images/logos/react.png';
import svelte from '@/lib/images/logos/svelte.png';
import astro from '@/lib/images/logos/astro.png';
import solid from '@/lib/images/logos/solid.png';
import vite from '@/lib/images/logos/vite.png';
import webpack from '@/lib/images/logos/webpack.png';
import rollup from '@/lib/images/logos/rollup.png';
import esbuild from '@/lib/images/logos/esbuild.png';
import tailwind from '@/lib/images/logos/tailwind.png';
import qwik from '@/lib/images/logos/qwik.png';
import bun from '@/lib/images/logos/bun.png';
import unocss from '@/lib/images/logos/unocss.png';

export const hotSites: HotSite[] = [
	{
		name: "Vue",
		link: "https://cn.vuejs.org/guide/introduction.html",
		logo: vue,
	},
	{
		name: "React",
		link: "https://reactjs.org/docs/getting-started.html",
		logo: react,
	},
	{
		name: "Ant Design",
		link: "https://ant.design/components/button-cn",
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
		name: "Esbuild",
		link: "https://esbuild.github.io/",
		logo: esbuild,
	},
	{
		name: "Webpack",
		link: "https://webpack.js.org/concepts/",
		logo: webpack
	},
	{
		name: "TailwindCSS",
		link: "https://tailwindcss.com/",
		logo: tailwind
	},
	{
		name: "unocss",
		link: "https://github.com/unocss/unocss",
		logo: unocss,
	},
	{
		name: "LeetCode",
		link: "https://leetcode.cn/problemset/all/",
	},
	{
		name: "Bun",
		link: "https://bun.sh/docs",
		logo: bun
	},
];
