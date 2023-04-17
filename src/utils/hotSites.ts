import type { HotSite } from "@/types";
// Use UnoCSS comments to enable scanning of available classes in the current file
// @unocss-include

export const frameworks = {
	type: '前端框架',
	sites: [
		{
			name: "Vue",
			link: "https://cn.vuejs.org/guide/introduction.html",
			iconClass: "i-logos-vue",
		},
		{
			name: "Nuxt",
			link: "https://nuxt.com/",
			iconClass: "i-logos-nuxt-icon",
		},
		{
			name: "React",
			link: "https://react.dev/",
			iconClass: "i-logos-react",
		},
		{
			name: 'Next',
			link: 'https://nextjs.org/docs',
			iconClass: 'i-logos-nextjs',
		},
		{
			name: "Svelte",
			link: "https://svelte.dev/docs",
			iconClass: "i-logos-svelte-icon",
		},
		{
			name: 'SvelteKit',
			link: 'https://kit.svelte.dev/docs/introduction',
			iconClass: 'i-logos-svelte-icon',
		},
		{
			name: "Solid",
			link: "https://www.solidjs.com/",
			iconClass: "i-logos-solidjs-icon",
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
	]
};

export const uiLibraries = {
	type: '组件库',
	sites: [
		{
			name: "Ant Design",
			link: "https://ant.design/components/button-cn",
			iconClass: "i-logos-ant-design",
		},
		{
			name: 'Vant',
			link: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
			iconClass: 'i-cus-vant',
		},
		{
			name: 'Element Plus',
			link: 'https://element-plus.gitee.io/zh-CN/component/button.html',
			iconClass: 'i-logos-element',
		},
		{
			name: 'Naive UI',
			link: 'https://www.naiveui.com/zh-CN/os-theme/components/button',
			iconClass: 'i-logos-naiveui',
		}
	]
};

export const buildTolls = {
	type: '构建工具',
	sites: [
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
			name: 'Rspack',
			link: 'https://www.rspack.dev/zh/guide/introduction.html',
			iconClass: 'i-cus-rspack',
			extraCss: "!text-28px",
		}
	]
}

export const cssSites = {
	type: 'CSS库/框架',
	sites: [
		{
			name: "TailwindCSS",
			link: "https://tailwindcss.com/",
			iconClass:'i-cus-tailwindcss'
		},
		{
			name: "UnoCSS",
			link: "https://unocss.dev/",
			iconClass: "i-cus-unocss",
		},
		{
			name: "Windi CSS",
			link: "https://cn.windicss.org/",
			iconClass: "i-logos-windi-css",
		},
	]
}

export const runtimes = {
	type: '运行时',
	sites: [
		{
			name: 'Node',
			link: 'https://nodejs.org/dist/latest-v19.x/docs/api/',
			iconClass: "i-logos-nodejs-icon"
		},
		{
			name: 'Deno',
			link: 'https://deno.land/manual@v1.32.4/introduction',
			iconClass: 'i-logos-deno',
		},
		{
			name: "Bun",
			link: "https://bun.sh/docs",
			iconClass: "i-logos-bun"
		},
	]
}

export const otherSites = {
	type: '其他',
	sites: [
		{
			name: "LeetCode",
			link: "https://leetcode.cn/problemset/all/",
			iconClass: "i-cus-leetcode",
			extraCss: "-translate-y-1px",
		},
	]
};
