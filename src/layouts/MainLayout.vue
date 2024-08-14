<template>
  <main class="mx-auto flex items-center flex-col gap-28 pt-10 sm:pt-0">
    <!-- Main Content Section -->
    <div
      class="center flex-1 flex flex-col md:flex-row sm:flex-col-reverse items-center justify-between w-full md:pl-16 sm:gap-[20px] min-h-[20rem]"
    >
      <!-- Headline Section -->
      <section
        class="md:text-left sm:text-center w-full lg:w-11/12 lg:ml-12 lg:pl-12 sm:p-8"
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
        <!-- Custom button component -->
        <CustomButton
          color="cyan"
          text="Get Started"
          class="md:text-lg rounded-full px-8 py-[10px]"
        />
      </section>

      <!-- Illustration Section -->
      <section
        class="image xl:w-full md:w-[130%] mm:w-[200%] xs:w-[120%] lx:w-5/6 sxs:w-4/5 md:mt-4 md:translate-x-24 xs:translate-x-16"
      >
        <img :src="svgSrc" alt="illustration working" class="w-full h-auto" />
      </section>
    </div>

    <!-- Shorten Box and Links Section -->
    <div
      class="shortenBoxContainer mt-8 bg-gray-brighter w-full flex items-center flex-col px-6 md:px-0"
    >
      <!-- Form for shortening links -->
      <ShortenLinkForm @link-shortened="addLink" />
      <!-- Container for displaying shortened links -->
      <LinksContainer :links="links" />
    </div>
  </main>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import ShortenLinkForm from "../components/ShortenLinkForm.vue";
import LinksContainer from "../components/LinksContainer.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      svgSrc: require("@/assets/images/illustration-working.svg"),
      links: [], // Array to store shortened links
    };
  },
  methods: {
    // Method to add a new link to the list
    addLink(newLink) {
      this.links.push({ id: this.links.length + 1, url: newLink });
    },
  },
  components: {
    CustomButton,
    ShortenLinkForm,
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
