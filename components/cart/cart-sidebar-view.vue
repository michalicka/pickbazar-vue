<template>
    <section class="flex flex-col h-full relative">
      <header class="fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75">
        <div class="flex text-accent font-semibold">
          <CartCheckBag class="flex-shrink-0" :width="24" :height="22" />
          <span class="flex ms-2">
            {{ formatString(cart.totalUniqueItems, $t("common:text-item")) }}
          </span>
        </div>
        <button
          @click="closeSidebar"
          class="w-7 h-7 ms-3 -me-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
        >
          <span class="sr-only">{{ $t("text-close") }}</span>
          <CloseIcon class="w-3 h-3" />
        </button>
      </header>

        <div class="flex-grow pt-16">
          <template v-if="cart.items.length > 0">
            <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
          </template>
          <div v-else
              layout
              initial="from"
              animate="to"
              exit="from"
              variants="fadeInOut(0.25)"
              class="h-full flex flex-col items-center justify-center"
            >
              <EmptyCart :width="140" :height="176" />
              <h4 class="mt-6 text-base font-semibold">
                {{ $t("text-no-products") }}
              </h4>
            </div>
        </div>

      <footer class="sticky start-0 bottom-0 w-full py-5 px-6 z-10 bg-light">
        <button
          class="flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover"
          @click="handleCheckout"
        >
          <span class="flex flex-1 items-center h-full px-5 text-light">
            {{ $t("text-checkout") }}
          </span>
          <span class="flex items-center flex-shrink-0 h-full bg-light text-accent rounded-full px-5">
            {{ totalPrice }}
          </span>
        </button>
      </footer>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { ROUTES } from "@utils/routes";
import { formatString } from "@utils/format-string";
import { useCartStore } from '@/stores/cart';
import usePrice from "@utils/use-price";
import CartItem from "@components/cart/cart-item";
import CartCheckBag from "@components/icons/cart-check-bag";
import CloseIcon from "@components/icons/close-icon";
import EmptyCart from "@components/icons/empty-cart";

const name="CartSidebarView";

const router = useRouter();
const cart = useCartStore();

const { $eventBus } = useNuxtApp();

const closeSidebar = () => {
    $eventBus.emit('sidebar:close');
}

const handleCheckout = () => {
    router.push(ROUTES.CHECKOUT);
    closeSidebar();
}

const totalPrice = computed(() => usePrice({
  amount: cart.total
}).price);

</script>
