<template>
  <button
    class="font-bold text-white rounded-full px-7 py-[8px]"
    :style="{ backgroundColor: currentColor }"
    @mouseover="currentColor = hoverColor"
    @mouseout="currentColor = bgColor"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CustomButton2",
  props: {
    bgColor: String,
    hoverColor: String,
    text: String,
  },
  data() {
    return {
      currentColor: this.bgColor,
    };
  },
};
</script>
