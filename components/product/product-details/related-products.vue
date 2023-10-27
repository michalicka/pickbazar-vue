<template>
    <div>
      <h2 class="text-lg text-heading tracking-tight font-semibold mb-6">
        {{ $t("text-related-products") }}
      </h2>
      <div
        :class="['grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4', gridClassName]"
      >
        <RenderProductCard 
            v-for="product in products" 
            :key="product.id" 
            v-show="currentProductId !== product.id" 
            :product="product" 
            class-name="!shadow-none border border-border-200 hover:!border-border-200 border-opacity-70" 
        />
      </div>
    </div>
</template>

<script setup>
import RenderProductCard from "@components/product/render-product-card";

const name = 'RelatedProducts';

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  currentProductId: {
    type: Number,
    default: 0
  },
  gridClassName: {
    type: String,
    default: ''
  }
});

</script>
