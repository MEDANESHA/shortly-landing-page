<template>
  <section
    class="w-full h-32 md:w-9/12 bg-darkViolet flex items-center justify-center rounded-lg relative"
    :style="{
      backgroundImage: `url(${backgroundSvgSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop: '-56px',
    }"
  >
    <form
      @submit.prevent="shortenLink"
      class="flex flex-col items-center justify-center gap-[10px] w-full relative"
    >
      <div class="flex items-center justify-center gap-[25px] w-full relative">
        <div class="relative w-3/5">
          <input
            v-model="url"
            type="text"
            placeholder="Shorten a link here..."
            style="height: 53.6px"
            class="w-full px-4 py-3 text-lg border text-base rounded-lg focus:outline-none"
            :class="{
              'border-gray': !error,
              'border-red  border-2 placeholder-red': error,
            }"
          />
          <!-- Error message positioned absolutely below the input -->
          <p
            v-if="error"
            class="absolute text-red text-sm mt-2 left-0"
            style="top: 100%"
          >
            Please add a link
          </p>
        </div>
        <button
          type="submit"
          style="height: 53.6px"
          class="w-1/6 bg-cyan text-white py-3 rounded-lg hover:bg-cyan-brighter"
        >
          Shorten It!
        </button>
      </div>
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
      backgroundSvgSrc: require("@/assets/images/bg-shorten-desktop.svg"),
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
