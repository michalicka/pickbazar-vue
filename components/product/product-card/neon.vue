<template>
  <article :class="['product-card cart-type-neon rounded h-full bg-light overflow-hidden shadow-sm transition-all duration-200 hover:shadow transform hover:-translate-y-0.5', className]">
    <div class="relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64" @click="handleProductQuickView">
      <span class="sr-only">Product Image</span>
      <div style="display:block;overflow:hidden;position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;margin:0">
        <Image 
          :src="product.image.original || siteSettings.product.placeholderImage" 
          :alt="product.name" 
          layout="fill" 
          object-fit="contain" 
          class="product-image" 
        />
      </div>
      <div v-if="discount" class="absolute top-3 end-3 md:top-4 md:end-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light" v-text="discount" />
    </div>
    <header class="p-3 md:p-6">
      <div class="flex items-center mb-2">
          <span class="text-sm md:text-base text-heading font-semibold" v-text="basePrice ? basePrice : price" />
          <del v-if="discount" class="text-xs md:text-sm text-muted ms-2" v-text="price" />
      </div>
      <h3 class="text-xs md:text-sm text-body truncate mb-4 cursor-pointer" v-text="product.name" @click="handleProductQuickView" />
      <AddToCart v-if="product.quantity > 0" :data="product" variant="neon" />
      <div v-else class="bg-red-500 rounded text-xs text-center text-light px-2 py-1.5 sm:py-2.5">
          {{ $t("text-out-stock") }}
      </div>
    </header>
  </article>
</template>

<script setup>
import { toRefs } from "vue";
import { siteSettings } from "@settings/site.settings";
import { useSelectedStore } from '@/stores/selected';
import usePrice from "@utils/use-price";
import Image from "@components/ui/image";
import AddToCart from "@components/product/add-to-cart/add-to-cart";

const name = 'Neon';

const props = defineProps({
  product: {
    type: Object,
    required: true 
  },
  className: {
    type: String,
    required: false,
    default: () => '' 
  }
})

const store = useSelectedStore();
const { $eventBus } = useNuxtApp();

const { price, basePrice, discount } = usePrice({
  amount: props.product.price,
  baseAmount: props.product.sale_price,
});

const handleProductQuickView = () => { 
  store.setProduct(props.product);
  $eventBus.emit('modal:open', 'PRODUCT_DETAILS');
  console.log('TODO.neon.handleProductQuickView');
};
</script>
