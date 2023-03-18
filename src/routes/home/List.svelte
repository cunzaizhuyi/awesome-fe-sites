<script lang="ts">
  import { allSites } from "@/utils/sites";
  import Card from "./Card.svelte";
  import CategoryTitle from "./CategoryTitle.svelte";

</script>

<section class="all-sites">
  {#each allSites as list}
    <div class="site-block my-30px">
      <CategoryTitle category={list} />
      <div class="item-wrapper">
        {#each list.sites as site}
          <Card site={site} />
        {/each}
      </div>
    </div>
  {/each}
</section>

<style lang="scss">
  .item-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
</style>