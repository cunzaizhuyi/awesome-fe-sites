<script lang="ts">
  import { hotSites } from '@/utils/hotSites';
</script>

<div class="hot-sites flex flex-wrap gap-8px dark:bg-#18181a">
  {#each hotSites as site}
    <a
      href={site.link}
      target="_blank"
      rel="noreferer"
      class="btn cursor-pointer centerLayout transition-all-200 space-x-6px hover:shadow-lg active:shadow-sm"
    >
      {#if site.logo}
        <img src="{site.logo}" alt="" class="h-22px w-22px ">
      {/if}
      <span>{site.name}</span>
    </a>
  {/each}
</div>

<style lang="scss">
  .hot-sites{
    margin: 20px 0px;
    //background: #eeeeee;
    .btn{
      padding: 0px 15px;
      background: white;
      border-radius: 20px;
      line-height: 2.2;
      color: black;
    }
  }
</style>
