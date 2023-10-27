<template>
    <ProductCardLoader v-for="(_, idx) in Array.from({ length: limit })" :key="idx" :unique-key="idx" />
</template>

<script setup>
import ProductCardLoader from '@components/ui/loaders/product-card-loader';

const props = defineProps({
    limit: {
        type: Number,
        default: 3
    }
})

</script>
