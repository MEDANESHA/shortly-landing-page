<template>
  <div class="min-h-screen flex flex-col items-center">
    <MainHeader />
    <MainLayout />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import MainLayout from "../layouts/MainLayout.vue";
export default {
  name: "HomePage",
  components: {
    MainHeader,
    MainLayout,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
