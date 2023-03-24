<script lang="ts">
	import PageList from '@/components/pageList/List.svelte';
	import { aiSites } from "@/utils/aiSites";
</script>

<svelte:head>
	<title>AI</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class=''>
	<PageList pageSites="{aiSites}"></PageList>
</div>

<style lang="scss">
</style>
