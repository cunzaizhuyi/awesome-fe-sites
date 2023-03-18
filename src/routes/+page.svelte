<script lang="ts">
	 import HotSites from '@/components/HotSites.svelte'
	 import CustomSites from './home/CustomSites.svelte'
	 import List from './home/List.svelte';
</script>

<svelte:head>
	<title>前端森林</title>
	<meta name="description" content="前端酷站 尽收眼底" />
</svelte:head>

<section>
	<div class=''>
		<HotSites></HotSites>
		<CustomSites></CustomSites>
		<List></List>
	</div>
</section>

<style>

</style>
