<template>
    <p class="bg-red-400 p-5 mt-16 mx-auto max-w-sm min-w-min text-center text-lg text-light font-semibold rounded">
      {{ $t(message) }}
    </p>
</template>

<script setup>

const props = defineProps({
    message: {
        type: String,
        default: ''
    }
})

</script>
