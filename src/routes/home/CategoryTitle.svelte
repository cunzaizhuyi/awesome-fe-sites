<script>
  export let category = {}
</script>

<div
    class="mb-16px"
    style={`font-size: ${category?.level ? "22px" : "26px"}`}
>
  <div class="i-mdi-file-table-outline text-orange-400" />
  <span class="relative top-3px text-#333">{category.type}</span>
</div>
