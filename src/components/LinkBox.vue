<template>
  <!-- Container for each link box -->
  <div
    class="flex sm:flex-col justify-between sm:text-md items-center font-medium bg-white p-3 md:px-6 rounded-md mb-4 sm:overflow-hidden"
  >
    <!-- Display the shortened URL with word wrapping -->
    <span class="text-veryDarkBlue sm:w-full sm:p-2 break-all">
      {{ link.url }}
    </span>

    <!-- Divider for mobile view -->
    <span
      class="sm:w-full sm:border-b-gray-300 sm:border-b-[1px] sm:scale-x-150 sm:my-3 sm:mt-1 sm:mb-12"
    ></span>

    <!-- Copy button -->
    <CustomButton
      @click="copyToClipboard(link.url)"
      :text="copied ? 'Copied!' : 'Copy'"
      :class="[
        'px-6 py-2 rounded text-sm sm:w-full',
        copied
          ? 'bg-darkViolet hover:bg-darkViolet'
          : 'bg-cyan hover:bg-lightCyan',
      ]"
    />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "LinkBox",
  props: {
    // Expects a link object with at least a 'url' property
    link: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      copied: false, // State to track if the URL has been copied
    };
  },
  methods: {
    // Method to copy the URL to the clipboard
    copyToClipboard(url) {
      navigator.clipboard.writeText(url).then(() => {
        this.copied = true; // Indicate that the URL has been copied
        setTimeout(() => {
          this.copied = false; // Reset copied state after 2 seconds
        }, 2000);
      });
    },
  },
  components: {
    CustomButton,
  },
};
</script>
