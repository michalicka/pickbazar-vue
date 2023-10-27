<template>
    <button class="hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 end-0 z-40 shadow-900 rounded rounded-te-none rounded-be-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover" @click="handleSidebarOpen">
      <span class="flex pb-0.5">
        <CartCheckBag width="14" height="16" class="flex-shrink-0" />
        <span class="flex ms-2">
            {{ formatString(cart.totalUniqueItems, $t("common:text-item")) }}
        </span>
      </span>
      <span class="bg-light rounded w-full py-2 px-2 text-accent mt-3">{{ totalPrice }}</span>
    </button>
</template>

<script setup>
import { computed } from "vue";
import { formatString } from "@utils/format-string";
import { useCartStore } from '@/stores/cart';
import usePrice from "@utils/use-price";
import CartCheckBag from "@components/icons/cart-check-bag";

const name = 'CartCounterButton';

const cart = useCartStore();
const totalPrice = computed(() => usePrice({
  amount: cart.total
}).price);

const { $eventBus } = useNuxtApp();

const handleSidebarOpen = () => {
    $eventBus.emit('sidebar:open', 'CART_VIEW');
}

</script>
