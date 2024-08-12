<template>
  <div
    class="flex justify-between items-center bg-white p-3 px-6 rounded-md mb-4"
  >
    <span class="text-veryDarkBlue">{{ link.url }}</span>
    <button
      @click="copyToClipboard(link.url)"
      :class="[
        'py-2 px-6 rounded text-white text-sm',
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
