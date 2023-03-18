<script lang="ts">
  import { hotSites } from '@/utils/hotSites';
</script>

<div class="hot-sites flex flex-wrap dark:bg-#18181a">
  {#each hotSites as site}
    <a
      href={site.link}
      target="_blank"
      rel="noreferer"
      class="btn cursor-pointer m-5px centerLayout transition-all-200 hover:shadow-lg"
    >
      {#if site.logo}
        <img src="{site.logo}" alt="" class="w-30px mr-5px">
      {/if}
      {site.name}
    </a>
  {/each}
</div>

<style lang="scss">
  .hot-sites{
    margin: 20px 0px;
    //background: #eeeeee;
    .btn{
      padding: 2px 15px;
      background: white;
      border-radius: 20px;
      color: black;
    }
  }
</style>
