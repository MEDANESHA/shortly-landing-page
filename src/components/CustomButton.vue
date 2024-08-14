<template>
  <button
    class="costumButton bg-cyan hover:bg-cyan-brighter font-bold text-white"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    color: String,
    text: String,
  },
};
</script>
<style scoped>
.costumButton:active {
  transform: translateY(2px);
}
</style>
