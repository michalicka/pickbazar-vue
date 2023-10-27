<template>
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      :strokeWidth="strokeWidth"
      d="M9 5l7 7-7 7"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  strokeWidth: {
    type: Number,
    default: 2
  }
});
</script>
