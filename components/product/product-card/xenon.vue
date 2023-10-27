<template>
  <article
    class="[ 'product-card cart-type-xenon rounded h-full bg-light overflow-hidden border border-border-200 border-opacity-70 transform transition-all duration-200 hover:shadow hover:border-transparent hover:-translate-y-0.5', className ]"
  >
    <div
      class="relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64"
      @click="handleProductQuickView"
    >
      <span class="sr-only">{{ $t('text-product-image') }}</span>
      <Image 
        :src="product.image.original || siteSettings.product.placeholderImage" 
        :alt="product.name" 
        layout="fill" 
        object-fit="contain" 
        class="product-image" 
      />
      <div v-if="discount" class="absolute top-3 start-3 md:top-4 md:start-4 rounded text-xs leading-6 font-semibold px-1.5  md:px-2 lg:px-2.5 bg-accent text-light">
        {{ discount }}
      </div>
    </div>

    <header class="p-3 md:p-6">
      <h3
        class="text-xs md:text-sm text-body truncate cursor-pointer"
        @click="handleProductQuickView"
      >
        {{ product.name }}
      </h3>

      <div class="flex items-center justify-between mt-2">
        <template v-if="product.product_type === 'variable'">
          <div>
            <span class="text-sm md:text-base text-heading font-semibold">
              {{ minPrice }}
            </span>
            <span v-if="minPrice !== maxPrice" > - </span>
            <span v-if="minPrice !== maxPrice" class="text-sm md:text-base text-heading font-semibold">
              {{ maxPrice }}
            </span>
          </div>

          <button
            @click="handleProductQuickView"
            class="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-accent bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
          >
            <span class="sr-only">plus</span>
            <PlusIcon class="w-5 h-5 stroke-2" />
          </button>
        </template>
        <template v-else>
          <div class="flex md:items-center flex-col md:flex-row">
            <span class="text-sm md:text-base text-heading font-semibold">
              {{ basePrice ? basePrice : price }}
            </span>
            <del v-if="discount" class="text-xs text-muted mt-1 md:mt-0 md:ms-2">
              {{ price }}
            </del>
          </div>

          <AddToCart
            v-if="product.quantity > 0"
            variant="argon"
            :data="product"
            counter-class="absolute sm:static bottom-3 end-3 sm:bottom-0 sm:end-0"
          />
          <div v-else class="bg-red-500 rounded text-xs text-light px-1 py-1 truncate">
            {{ $t("text-out-stock") }}
          </div>
        </template>

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
import PlusIcon from "@components/icons/plus-icon";

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
const { price: minPrice } = usePrice({
  amount: props.product.min_price,
});
const { price: maxPrice } = usePrice({
  amount: props.product.max_price,
});

const handleProductQuickView = () => { 
  store.setProduct(props.product);
  $eventBus.emit('modal:open', 'PRODUCT_DETAILS');
  console.log('TODO.xenon.handleProductQuickView');
};
</script>
