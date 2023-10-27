<template>
    <div
      class="flex items-center py-4 px-4 sm:px-6 text-sm border-b border-solid border-border-200 border-opacity-75"
    >
      <div class="flex-shrink-0">
        <Counter
          :value="item.quantity"
          @decrement="handleRemoveClick"
          @increment="handleIncrement"
          variant="pillVertical"
          :disabled="outOfStock"
        />
      </div>
      <div class="w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center overflow-hidden bg-gray-100 mx-4 flex-shrink-0 relative">
        <Image
          :src="item.image || siteSettings.product.placeholderImage"
          :alt="item.name"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h3 class="font-bold text-heading">{{ item.name }}</h3>
        <p class="my-2.5 font-semibold text-accent">{{ price }}</p>
        <span class="text-xs text-body">
          {{ item.quantity }} X {{ item.unit }}
        </span>
      </div>
      <span class="ms-auto font-bold text-heading">{{ itemPrice }}</span>
      <button
        class="w-7 h-7 ms-3 -me-2 flex items-center justify-center rounded-full text-muted transition-all duration-200 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-red-600 focus:text-red-600"
        @click="clearItemFromCart(item.id)"
      >
        <span class="sr-only">{{ $t("text-close") }}</span>
        <CloseIcon class="w-3 h-3" />
      </button>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { formatString } from "@utils/format-string";
import { useCartStore } from '@/stores/cart';
import { siteSettings } from "@settings/site.settings";
import usePrice from "@utils/use-price";
import Image from "@components/ui/image";
import Counter from "@components/ui/counter";
import CloseIcon from "@components/icons/close-icon";

const name="CartItem";

const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
});

const cart = useCartStore();

const outOfStock = !cart.isInStock(props.item.id);

const handleRemoveClick = (e) => {
  e.stopPropagation();
  cart.removeItemOrQuantity(props.item.id, 1);
};

const handleIncrement = (e) => {
  e.stopPropagation();
  cart.addItemToCart(props.item, 1);
};

const clearItemFromCart = (id) => {
  cart.removeItem(id);
};

const price = computed(() => usePrice({
  amount: props.item.price
}).price);

const itemPrice = computed(() => usePrice({
  amount: props.item.itemTotal || 0,
}).price);

</script>
