<script lang="ts">
  import { hotSites } from '@/utils/hotSites';
</script>

<div class="hot-sites flex flex-wrap dark:bg-#18181a">
  {#each hotSites as site}
    <a
      href={site.link}
      target="_blank"
      rel="noreferer"
      class="btn cursor-pointer m-5px dark:bg-#eee dark:text-black"
    >
      {site.name}
    </a>
  {/each}
</div>

<style lang="scss">
  .hot-sites{
    margin: 20px 0px;
    background: #eeeeee;
    .btn{
      padding: 7px 15px;
      background: #000028;
      border-radius: 20px;
      color: white;
    }
    .btn:hover{
      box-shadow: 4px 4px 8px gray;
    }
  }
</style>