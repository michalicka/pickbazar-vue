<template>
  <AddToCartBtn v-if="!cart.isInCart(item().id)" :variant="variant" :disabled="disabled || outOfStock" :on-click="handleAddClick" />
  <Counter v-else :value="_get(cart.getItem(item().id), 'quantity', 0)" :variant="variant" :on-decrement="handleRemoveClick" :on-increment="handleAddClick" :class="counterClass" :disabled="outOfStock" />
</template>

<script setup>
import { computed } from 'vue';
import { cartAnimation } from "@utils/cart-animation";
import { useCartStore } from '@/stores/cart';
import AddToCartBtn from "@components/product/add-to-cart/add-to-cart-btn";
import Counter from "@components/ui/counter";

const props = defineProps({
  data: {
    type: Object,
    required: true 
  },
  variant: {
    type: String,
    required: false,
    default: () => 'helium' // "helium" | "neon" | "argon" | "oganesson" | "single" | "big"
  },
  counterVariant: {
    type: String,
    required: false,
    default: () => '' // "helium" | "neon" | "argon" | "oganesson" | "single" | "details"
  },
  counterClass: {
    type: String,
    required: false,
    default: () => '' 
  },
  variation: {
    type: Object,
    required: false,
    default: () => { }
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => false 
  }
});

const cart = useCartStore();

const item = () => cart.generateCartItem(props.data, props.variation);

const handleAddClick = (e) => {
  e.stopPropagation();
  if (!cart.isInCart(item().id)) {
    cartAnimation(e);
  }
  cart.addItemToCart(item(), 1);
};
const handleRemoveClick = (e) => {
  e.stopPropagation();
  cart.removeItemOrQuantity(item().id, 1);
};

const outOfStock = cart.isInCart(item().id) && !cart.isInStock(item().id);

</script>
