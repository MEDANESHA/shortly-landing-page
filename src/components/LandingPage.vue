<template>
  <div class="min-h-screen flex flex-col items-center">
    <MainHeader />
    <MainComponnet />
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MainComponnet from "./MainComponent.vue";
export default {
  components: {
    MainHeader,
    MainComponnet,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
