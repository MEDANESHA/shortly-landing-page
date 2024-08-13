<template>
  <main class="mx-auto flex items-center flex-col gap-28 pt-10 sm:pt-0">
    <!-- Main Content Section -->
    <div
      class="center flex-1 flex flex-col md:flex-row sm:flex-col-reverse items-center justify-between w-full md:pl-28 sm:gap-[20px] min-h-[20rem]"
    >
      <section
        class="md:text-left sm:text-center w-full lg:w-11/12 lg:ml-12 sm:p-8"
      >
        <h2
          class="text-veryDarkBlue xl:text-7xl md:text-5xl sm:text-4xl font-extrabold mb-4"
          style="line-height: 1.2"
        >
          More than just shorter links
        </h2>
        <p
          class="text-grayishViolet text-base lg:text-xl mb-8 w-full lg:w-9/12"
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <CostumButton color="cyan" text="Get Started" class="md:text-lg" />
      </section>
      <section
        class="image xl:w-full md:w-[130%] mm:w-[160%] xs:w-[120%] lx:w-5/6 md:mt-4 translate-x-24"
      >
        <img :src="svgSrc" alt="illustration working" class="w-full h-auto" />
      </section>
    </div>
    <!-- Shorten Box and Links Section -->
    <div
      class="shortenBoxContainer mt-8 bg-gray-brighter w-full flex items-center flex-col px-6 md:px-0"
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
@media only screen and (min-width: 768px) {
  .center {
    max-height: 60vh;
  }
}
</style>
