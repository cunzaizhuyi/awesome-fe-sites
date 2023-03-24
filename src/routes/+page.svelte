<script lang="ts">
	 import HotSites from '@/components/HotSites.svelte'
	 import CustomSites from './home/CustomSites.svelte'
	 import PageList from '@/components/pageList/List.svelte';
	 import { allSites } from "@/utils/sites";
</script>

<svelte:head>
	<title>前端森林</title>
	<meta name="description" content="前端酷站 尽收眼底" />
</svelte:head>

<section>
	<div class=''>
		<HotSites></HotSites>
		<CustomSites></CustomSites>
		<PageList pageSites="{allSites}"></PageList>
	</div>
</section>

<style>

</style>
