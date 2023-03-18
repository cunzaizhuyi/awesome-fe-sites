<script lang="ts">
  export let site = {};
</script>

<a
    href={site.link}
    target="_blank"
    class='card cursor-pointer w-100% text-center min-h-50px rounded-6px transition-all-200 border-solid border border-#e9e9e9'
>
  <div class='color-#0000EE text-18px h-50px lh-50px'
       style='border-bottom: thin solid #e9e9e9;'>
    <span>{site.name}</span>
  </div>
  <div class='color-gray-500 text-14px p-15px'>
    <span>{site.desc}</span>
  </div>
</a>


<style lang="scss">
  .card:hover {
    /* transform: translateY(-4px) scale(1.01); */
    box-shadow: 7px 7px 14px #dadada, -7px -7px 14px #ffffff;
  }

  .card:active {
    box-shadow: 2px 2px 4px #999, -2px -2px 4px #ffffff;
  }

  a {
    text-decoration: none;
  }

  /*去除未被访问的a标签的下划线*/
  a:link {
    text-decoration: none;
  }

  /*去除已经被访问过的a标签的下划线*/
  a:visited {
    text-decoration: none;
  }

  /*去除鼠标悬停时的a标签的下划线*/
  a:hover {
    text-decoration: none;
  }

  /*去除正在点击的a标签的下划线（鼠标按下，尚未松开）*/
  a:active {
    text-decoration: none;
  }

  /*去除获得焦点的a标签的下划线（被鼠标点击过）*/
  a:focus {
    text-decoration: none;
  }

</style>