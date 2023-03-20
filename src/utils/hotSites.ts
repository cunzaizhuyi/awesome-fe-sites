import type { HotSite } from "@/types";
// import vue from '@/lib/images/logos/Vue.svg';
// import react from '@/lib/images/logos/React.svg';
// import antdesign_react from '@/lib/images/logos/AntDesign.svg';
// import svelte from '@/lib/images/logos/Svelte.svg';
// import astro from '@/lib/images/logos/Astro.svg';
// import solid from '@/lib/images/logos/Solid.svg';
// import vite from '@/lib/images/logos/Vite.svg';
// import webpack from '@/lib/images/logos/Webpack.svg';
// import rollup from '@/lib/images/logos/Rollup.svg';
// import leetcode from '@/lib/images/logos/LeetCode.svg';
// import esbuild from '@/lib/images/logos/Esbuild.svg';
// import tailwind from '@/lib/images/logos/TailwindCSS.svg';
// import qwik from '@/lib/images/logos/Qwik.svg';
// import bun from '@/lib/images/logos/Bun.svg';
// import unocss from '@/lib/images/logos/UnoCSS.svg';
// import nuxt from '@/lib/images/logos/Nuxt.svg';

export const hotSites: HotSite[] = [
	{
		name: "Vue",
		link: "https://cn.vuejs.org/guide/introduction.html",
		iconClass: "i-logos-vue",
	},
	{
		name: "React",
		link: "https://react.dev/",
		iconClass: "i-logos-react",
	},
	{
		name: "Ant Design",
		link: "https://ant.design/components/button-cn",
		iconClass: "i-logos-ant-design",
	},
	{
		name: "Svelte",
		link: "https://svelte.dev/docs",
		iconClass: "i-logos-svelte-icon",
	},
	{
		name: "Qwik",
		link: "https://qwik.builder.io/docs/overview/",
		iconClass: "i-logos-qwik",
	},
	{
		name: "Astro",
		link: "https://astro.build/",
		iconClass: "i-cus-astro",
	},
	{
		name: "Solid",
		link: "https://www.solidjs.com/",
		iconClass: "i-logos-solidjs-icon",
	},
	{
		name: "Vite",
		link: "https://cn.vitejs.dev/guide/",
		iconClass: "i-logos-vitejs",
	},
	{
		name: "Rollup",
		link: "https://rollupjs.org/introduction/",
		iconClass: "i-logos-rollupjs",
	},
	{
		name: "esbuild",
		link: "https://esbuild.github.io/",
		iconClass: "i-logos-esbuild",
	},
	{
		name: "webpack",
		link: "https://webpack.js.org/concepts/",
		iconClass: "i-logos-webpack",
		extraCss: "!text-24px",
	},
	{
		name: "TailwindCSS",
		link: "https://tailwindcss.com/",
		iconClass:'i-cus-tailwindcss'
	},
	{
		name: "UnoCSS",
		link: "https://github.com/unocss/unocss",
		iconClass: "i-logos-unocss",
		extraCss: "!text-18px",
	},
	{
		name: "LeetCode",
		link: "https://leetcode.cn/problemset/all/",
		iconClass: "i-cus-leetcode",
		extraCss: "-translate-y-1px",
	},
	{
		name: "Bun",
		link: "https://bun.sh/docs",
		iconClass: "i-logos-bun"
	},
	{
		name: "Nuxt",
		link: "https://nuxt.com/",
		iconClass: "i-logos-nuxt-icon",
	}
];
