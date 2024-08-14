<template>
  <!-- Container for displaying the shortened links -->
  <div class="w-9/12 xs:w-full mt-8 flex flex-col-reverse">
    <!-- Render a LinkBox component for each link -->
    <LinkBox v-for="(link, index) in links" :key="index" :link="link" />
  </div>
</template>

<script>
import LinkBox from "./LinkBox.vue";

export default {
  name: "LinksContainer",
  props: {
    // Expecting an array of link objects
    links: {
      type: Array,
      required: true,
    },
  },
  components: {
    LinkBox,
  },
};
</script>
