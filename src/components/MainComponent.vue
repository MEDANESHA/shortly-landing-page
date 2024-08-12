<template>
  <main class="mx-auto flex items-center flex-col gap-[4rem] pt-10">
    <div
      class="center flex-1 flex items-center justify-between px-4 w-full pl-28 h-full"
    >
      <section class="text-left w-11/12 ml-12">
        <h2
          class="text-veryDarkBlue text-10xl md:text-7xl font-extrabold mb-4"
          style="line-height: 1.2"
        >
          More than just shorter links
        </h2>
        <p class="text-grayishViolet text-xl md:text-lg mb-8 w-8/12">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <CostumButton color="cyan" text="Get Started" />
      </section>
      <section class="image w-5/6 translate-x-24">
        <img :src="svgSrc" alt="illustration working" class="w-full h-auto" />
      </section>
    </div>
    <div
      class="shortenBoxContainer mt-8 bg-gray-brighter w-full flex items-center flex-col gap-[5px]"
    >
      <ShortenBox @link-shortened="addLink" />
      <LinksContainer :links="links" />
    </div>
  </main>
</template>

<script>
import CostumButton from "./CostumButton.vue";
import ShortenBox from "./ShortenBox.vue";
import LinksContainer from "./LinksContainer.vue";
export default {
  name: "MainComponent",
  data() {
    return {
      svgSrc: require("@/assets/images/illustration-working.svg"),
      links: [{ id: 1, url: "www.google.com" }],
    };
  },
  methods: {
    addLink(newLink) {
      this.links.push({ id: this.links.length + 1, url: newLink });
    },
  },
  components: {
    CostumButton,
    ShortenBox,
    LinksContainer,
  },
};
</script>

<style scoped>
.container {
  max-width: 100% !important;
}
.center {
  max-height: 60vh;
}
</style>
