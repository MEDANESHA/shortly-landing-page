<template>
  <button
    class="bg-cyan hover:bg-cyan-brighter font-bold text-white rounded-full px-7 py-[8px]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CostumButton",
  props: {
    color: String,
    text: String,
  },
};
</script>
