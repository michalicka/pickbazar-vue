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
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
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
