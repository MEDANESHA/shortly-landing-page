<template>
  <div
    class="flex sm:flex-col justify-between sm:text-md items-center font-medium bg-white p-3 md:px-6 rounded-md mb-4 sm:overflow-hidden"
  >
    <span class="text-veryDarkBlue sm:w-full sm:p-2">{{ link.url }} </span>
    <span
      class="sm:w-full sm:border-b-gray-300 sm:border-b-[1px] sm:scale-x-150 sm:my-3 sm:mt-1 sm:mb-12"
    ></span>

    <button
      @click="copyToClipboard(link.url)"
      :class="[
        'py-2 px-6 rounded text-white text-sm sm:w-full',
        copied ? 'bg-darkViolet' : 'bg-cyan hover:bg-cyan-brighter',
      ]"
    >
      {{ copied ? "Copied!" : "Copy" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LinkBox",
  props: {
    link: Object,
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyToClipboard(url) {
      navigator.clipboard.writeText(url).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000); // Reset copied state after 2 seconds
      });
    },
  },
};
</script>
