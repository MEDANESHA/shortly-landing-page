<template>
  <button
    class="bg-cyan hover:bg-cyan-brighter font-bold text-white rounded-full px-8 py-[10px]"
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
