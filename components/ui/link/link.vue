<template>
    <NuxtLink :to="href">
      <slot />
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    href: {
        type: String,
        required: true
    }
});
</script>
