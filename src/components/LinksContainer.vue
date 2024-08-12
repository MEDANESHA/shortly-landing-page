<template>
  <div class="w-full md:w-2/3 mt-8 flex flex-col-reverse">
    <LinkBox v-for="(link, index) in links" :key="index" :link="link" />
  </div>
</template>

<script>
import LinkBox from "./LinkBox.vue";

export default {
  name: "LinksContainer",
  props: {
    links: Array,
  },
  components: {
    LinkBox,
  },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
