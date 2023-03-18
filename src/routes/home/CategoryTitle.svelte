<script>
  export let category = {}
</script>

<div
    class="mb-10px"
    style={`font-size: ${category?.level ? "24px" : "30px"}`}
>
  <div class="i-mdi-file-table-outline text-orange-400" />
  <span class="relative top-3px">{category.type}</span>
</div>