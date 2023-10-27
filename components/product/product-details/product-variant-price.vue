<template>
  <span class="flex items-center">
    <ins class="text-2xl md:text-3xl font-semibold text-accent no-underline">
      {{ !_isEmpty(selectedVariation) ? `${basePrice() ? basePrice() : price()}` : (min_price === max_price ? min_price : `${min_price} - ${max_price}`) }}
    </ins>
    <del v-if="discount()" class="text-sm md:text-base font-normal text-muted ms-2">
      {{ price() }}
    </del>
  </span>
</template>

<script setup>
import usePrice from "@utils/use-price";

const name = 'ProductVariantPrice';

const props = defineProps({
  selectedVariation: {
    type: Object,
    default: {}
  },
  minPrice: {
    type: Number,
    default: 0
  },
  maxPrice: {
    type: Number,
    default: 0
  }
});

const price = () => props.selectedVariation ? usePrice({
  amount: +props.selectedVariation.price,
  baseAmount: +props.selectedVariation.sale_price
}).price : '';

const basePrice = () => props.selectedVariation ? usePrice({
  amount: +props.selectedVariation.price,
  baseAmount: +props.selectedVariation.sale_price
}).basePrice : '';

const discount = () => props.selectedVariation ? usePrice({
  amount: +props.selectedVariation.price,
  baseAmount: +props.selectedVariation.sale_price
}).discount : '';

const { price: min_price } = usePrice({
  amount: +props.minPrice,
});

const { price: max_price } = usePrice({
  amount: +props.maxPrice,
});
</script>
