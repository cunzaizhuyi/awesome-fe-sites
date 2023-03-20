<script>
  export let category = {}
</script>

<div
    class="mb-16px"
    style={`font-size: ${category?.level ? "22px" : "26px"}`}
>
  <div class="i-fluent-emoji-flat-wind-chime" />
  <span class="relative top-3px text-#333 font-NotoSerifSC font-500">{category.type}</span>
</div>
