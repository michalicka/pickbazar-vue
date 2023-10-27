<template>
    <p v-if="message" className="my-2 text-sm text-start text-red-500">
        {{ $t(message) }}
    </p>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        default: ''
    }
});
</script>
