<script lang="ts">
  import { frameworks,
    uiLibraries,
    buildTolls,
    cssSites,
    runtimes,
    otherSites,
  } from '@/utils/hotSites';
  import HostSiteCard from './HotSiteCard.svelte';
</script>

<div class="hot-sites item-wrapper">
  <HostSiteCard sites="{frameworks}"></HostSiteCard>
  <HostSiteCard sites="{uiLibraries}"></HostSiteCard>
  <HostSiteCard sites="{buildTolls}"></HostSiteCard>
  <HostSiteCard sites="{cssSites}"></HostSiteCard>
  <HostSiteCard sites="{runtimes}"></HostSiteCard>
  <HostSiteCard sites="{otherSites}"></HostSiteCard>
</div>

<style lang="scss">
  .hot-sites{
    margin: 20px 0px;
  }
  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
</style>
