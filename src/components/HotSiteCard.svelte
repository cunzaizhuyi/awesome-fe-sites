<script lang="ts">
  export let sites = {};
</script>

<div bg="#fff dark:#333"
     class='card w-100% text-center min-h-50px rounded-6px transition-all-200 shadow-md  hover:shadow-lg active:shadow-sm'
>
  <div border="b-solid b-1px #e9e9e9 dark:#555"
       class='color-#646cff text-18px h-50px lh-50px'>{sites.type}</div>
  <div class="card-content flex flex-wrap gap-8px">
    {#each sites.sites as site}
      <a
          href={site.link}
          target="_blank"
          rel="noreferer"
          class="btn cursor-pointer centerLayout transition-all-200 space-x-6px dark:(!bg-#303133 !text-#fff) hover:shadow-lg active:shadow-sm"
      >
        {#if site.iconClass}
          <div class="{`${site.iconClass} ${site.extraCss} text-20px`}"></div>
        {:else if site.logo}
          <img src="{site.logo}" alt="" class="h-22px w-22px ">
        {/if}
        <span>{site.name}</span>
      </a>
    {/each}
  </div>
</div>


<style lang="scss">
  .card-content{
    margin: 0px 0px;
    padding: 10px;
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
