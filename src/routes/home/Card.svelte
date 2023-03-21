<script lang="ts">
  export let site = {};
</script>

<a
    href={site.link}
    target="_blank"
    bg="#fff dark:#333"
    class='cursor-pointer  w-100% text-center min-h-50px rounded-6px transition-all-200 shadow-md  hover:shadow-lg active:shadow-sm'
>
  <div border="b-solid b-1px #e9e9e9 dark:#555" class='color-#646cff text-18px h-50px lh-50px'>
    <span>{site.name}</span>
  </div>
  <div text="gray-500 dark:#ddd" class=' text-14px p-15px'>
    <span>{site.desc}</span>
  </div>
</a>


<style lang="scss">

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
