<template>
    <div>
      <div class="flex flex-col border-b pb-2 border-border-200">
        <CheckoutCartItem
          v-if="!cart.isEmpty"
          v-for="item in cart.items"
          :item="item"
          :key="item.id"
          :notAvailable="!!notAvailable(item)"
        />
        <EmptyCart v-else />
      </div>

      <div class="mt-4">
        <div class="flex justify-between mb-3">
          <p class="text-sm text-body">{{ $t('text-sub-total') }}</p>
          <span class="text-sm text-body">{{ sub_total }}</span>
        </div>
        <div class="flex justify-between mb-3">
          <p class="text-sm text-body">{{ $t('text-tax') }}</p>
          <span class="text-sm text-body">{{ tax }}</span>
        </div>
        <div class="flex justify-between mb-3">
          <p class="text-sm text-body">{{ $t('text-shipping') }}</p>
          <span class="text-sm text-body">{{ shipping }}</span>
        </div>
        <div v-if="cart.discount" class="flex justify-between mb-4">
          <p class="text-sm text-body me-4">{{ $t('text-discount') }}</p>
          <span class="text-xs font-semibold text-red-500 flex items-center me-auto">
            ({{ coupon.code }})
            <button @click="removeCoupon">
              <CloseIcon class="w-3 h-3 ms-2" />
            </button>
          </span>
          <span class="text-sm text-body">{{ discountPrice }}</span>
        </div>
        <div v-else class="flex justify-between mt-5 mb-4">
         <Coupon />
        </div>
        <div class="flex justify-between border-t-4 border-double border-border-200 pt-4">
          <p class="text-base font-semibold text-heading">
            {{ $t("text-total") }}
          </p>
          <span class="text-base font-semibold text-heading">{{ total }}</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { calculateTotal, calculatePaidTotal } from '@utils/cart-utils';
import usePrice from "@utils/use-price";
import EmptyCart from "@components/icons/empty-cart";
import CloseIcon from "@components/icons/close-icon";
import Coupon from "@components/checkout/coupon";

const cart = useCartStore();

const checkoutData = {
  total_tax: cart.total_tax,
  shipping_charge: cart.shipping_charge,
  unavailable_products: [] //TODO
}; 

const notAvailable = (item) => checkoutData.unavailable_products.find((d) => d === item.id);

const available_items = computed(() => cart.items.filter(
    (item) => !checkoutData.unavailable_products.includes(item.id)
));

const { price: tax } = usePrice({
  amount: checkoutData.total_tax || 0,
});
const { price: shipping } = usePrice({
  amount: checkoutData.shipping_charge || 0,
});
const base_amount = calculateTotal(available_items.value) - checkoutData.total_tax;
const { price: sub_total } = usePrice({
  amount: base_amount,
});
const { price: discountPrice } = usePrice({
  amount: cart.discount,
});
const { price: total } = usePrice({
  amount: calculatePaidTotal({
      totalAmount: base_amount,
      tax: checkoutData.total_tax,
      shipping_charge: checkoutData.shipping_charge,
    },
    Number(cart.discount)
  )
});

const removeCoupon = () => {
    console.log('TODO.order-information.removeCoupon');
}

</script>
