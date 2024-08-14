<template>
  <section
    class="shorten-bg-image w-full sxs:w-9/12 h-32 sm:h-48 md:w-9/12 bg-darkViolet flex items-center justify-center rounded-lg relative -mt-16 sm:-mt-24"
  >
    <!-- Form to shorten the URL -->
    <form
      @submit.prevent="shortenLink"
      class="flex sm:flex-col items-center justify-center gap-[20px] w-full relative"
    >
      <!-- Input field for the URL -->
      <div class="relative lg:w-[70%] md:w-8/12 sm:w-4/5">
        <input
          v-model="url"
          type="text"
          placeholder="Shorten a link here..."
          class="w-full px-4 md:py-3 md:text-lg border rounded-lg focus:outline-none h-[3.4rem]"
          :class="{
            'border-gray': !error,
            'border-red  border-2 placeholder-red': error,
          }"
        />
        <!-- Error message displayed when the input is invalid -->
        <p
          v-if="error"
          class="md:absolute text-red text-sm mt-1 left-0"
          style="top: 100%"
        >
          Please add a link
        </p>
      </div>
      <!-- Submit button for the form -->
      <CustomButton
        text="Shorten It!"
        type="submit"
        class="md:w-2/12 sm:w-4/5 sm:text-lg font-extrabold rounded-lg py-3 h-[3.4rem]"
      />
    </form>
  </section>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "ShortenLinkForm",
  data() {
    return {
      url: "", // Holds the URL input by the user
      error: false, // Tracks if there is an error in the input
      backgroundSvgDesktopSrc: require("@/assets/images/bg-shorten-desktop.svg"), // Background image for desktop view
      backgroundSvgMobileSrc: require("@/assets/images/bg-shorten-mobile.svg"), // Background image for mobile view
    };
  },
  methods: {
    // Method to handle link shortening
    shortenLink() {
      if (!this.url) {
        this.error = true; // Set error to true if input is empty
      } else {
        this.$emit("link-shortened", this.url); // Emit event with the shortened link
        this.url = ""; // Reset the URL input
        this.error = false; // Reset the error state
      }
    },
  },
  watch: {
    // Watcher to clear the error state when the user starts typing
    url(value) {
      if (value) {
        this.error = false;
      }
    },
  },
  components: {
    CustomButton,
  },
};
</script>
