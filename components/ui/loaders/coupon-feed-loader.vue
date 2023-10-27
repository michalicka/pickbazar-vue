<template>
    <CouponCardLoader v-for="(_, idx) in Array.from({ length: limit })" :key="idx" :unique-key="idx" />
</template>

<script setup>
import CouponCardLoader from '@components/ui/loaders/coupon-card-loader';

const props = defineProps({
    limit: {
        type: Number,
        default: 3
    }
})

</script>
