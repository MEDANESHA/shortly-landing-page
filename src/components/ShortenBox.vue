<template>
  <section
    class="shorten-bg-image w-full h-32 sm:h-48 md:w-9/12 bg-darkViolet flex items-center justify-center rounded-lg relative -mt-16 sm:-mt-24"
  >
    <form
      @submit.prevent="shortenLink"
      class="flex sm:flex-col items-center justify-center gap-[15px] w-full relative"
    >
      <div class="relative lg:w-3/5 md:w-8/12 sm:w-4/5">
        <input
          v-model="url"
          type="text"
          placeholder="Shorten a link here..."
          style="height: 53.6px"
          class="w-full px-4 md:py-3 md:text-lg border rounded-lg focus:outline-none"
          :class="{
            'border-gray': !error,
            'border-red  border-2 placeholder-red': error,
          }"
        />
        <!-- Error message positioned absolutely below the input -->
        <p
          v-if="error"
          class="md:absolute text-red text-sm mt-2 left-0"
          style="top: 100%"
        >
          Please add a link
        </p>
      </div>
      <button
        type="submit"
        style="height: 53.6px"
        class="lg:w-1/6 md:w-2/12 sm:w-4/5 sm:text-lg bg-cyan text-white font-extrabold py-3 rounded-lg hover:bg-cyan-brighter"
      >
        Shorten It!
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ShortenBox",
  data() {
    return {
      url: "",
      error: false,
      backgroundSvgDesktopSrc: require("@/assets/images/bg-shorten-desktop.svg"),
      backgroundSvgMobileSrc: require("@/assets/images/bg-shorten-mobile.svg"),
    };
  },
  methods: {
    shortenLink() {
      if (!this.url) {
        this.error = true;
      } else {
        this.$emit("link-shortened", this.url);
        this.url = "";
        this.error = false;
      }
    },
  },
  watch: {
    url(value) {
      if (value) {
        this.error = false;
      }
    },
  },
};
</script>
