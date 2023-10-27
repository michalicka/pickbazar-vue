<template>
    <Xenon v-if="product.type.slug === 'clothing'" :product="product" :class-name="className" />
    <Neon v-else :product="product" :class-name="className" />
</template>

<script setup>
import Neon from "@components/product/product-card/neon";
import Xenon from "@components/product/product-card/xenon";

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => { }
  },
  className: {
    type: String,
    default: ''
  }
});

</script>
