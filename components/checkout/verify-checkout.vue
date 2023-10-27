<template>
    <div class="w-full">
      <div class="flex flex-col items-center space-s-4 mb-4">
        <span class="text-base font-bold text-heading">
          {{ $t('text-your-order') }}
        </span>
      </div>
      <div class="flex flex-col py-3 border-b border-border-200">
        <div v-if="cart.isEmpty" class="h-full flex flex-col items-center justify-center mb-4">
          <EmptyCart :width="140" :height="176" />
          <h4 class="mt-6 text-base font-semibold">
            {{ $t('text-no-products') }}
          </h4>
        </div>
        <CheckoutCartItem 
            v-else 
            v-for="item in cart.items" 
            :key="item.id" 
            :item="item" 
        />
      </div>
      <div class="space-y-2 mt-4">
        <div class="flex justify-between">
          <p class="text-sm text-body">{{ $t("text-sub-total") }}</p>
          <span class="text-sm text-body">{{ subtotal }}</span>
        </div>
        <div class="flex justify-between">
          <p class="text-sm text-body">{{ $t('text-tax') }}</p>
          <span class="text-sm text-body">
            {{ $t('text-calculated-checkout') }}
          </span>
        </div>
        <div class="flex justify-between">
          <p class="text-sm text-body">{{ $t('text-estimated-shipping') }}</p>
          <span class="text-sm text-body">
            {{ $t('text-calculated-checkout') }}
          </span>
        </div>
      </div>
      <Button
        :loading="loading"
        class-name="w-full mt-5"
        @click="handleVerifyCheckout"
        :disabled="cart.isEmpty"
      >
        {{ $t('text-proceed-checkout') }}
      </Button>

      <div v-if="errorMessage" class="mt-3">
        <ValidationError :message="errorMessage" />
      </div>
    </div>
</template>

<script setup>
import { cartItems } from '@/data/cart-items'; //TODO remove
import { useCartStore } from '@/stores/cart';
import { loggedIn } from "@utils/is-loggedin";
import { formatOrderedProduct } from "@utils/format-ordered-product";
import { useSelectedStore } from '@/stores/selected';
import { useCustomerStore } from '@/stores/customer';
import usePrice from "@utils/use-price";
import EmptyCart from "@components/icons/empty-cart";
import CheckoutCartItem from "@components/checkout/checkout-cart-item";
import ValidationError from "@components/ui/validation-error";
import Button from "@components/ui/button";

const { $eventBus } = useNuxtApp();

const router = useRouter();
const cart = useCartStore();
const store = useSelectedStore();
const customer = useCustomerStore();

const errorMessage = ref(''); //TODO
const setError = (message) => {
    console.log('TODO.verify-checkout.setError');
    errorMessage.value = message;
}

const billing_address = () => {
  const items = customer.me.address.filter((address) => address.type === 'billing') || [];
  const indexes = Object.assign({}, store.selected);
  const index = indexes['text-billing-address'] || (items.length ? 0 : null);
  const item = index !== null && index < items.length ? Object.assign({}, items[index]) : { address: {} };
  const address = Object.assign({}, item.address || {});

  return address;
};
const shipping_address = () => {
  const items = customer.me.address.filter((address) => address.type === 'shipping') || [];
  const indexes = Object.assign({}, store.selected);
  const index = indexes['text-shipping-address'] || (items.length ? 0 : null);
  const item = index !== null && index < items.length ? Object.assign({}, items[index]) : { address: {} };
  const address = Object.assign({}, item.address || {});

  return address;
};
const setCheckoutData = (data) => {
    console.log('TODO.verify-checkout.setCheckoutData', data);
}

const loading = ref(false); //TODO
const verifyCheckout = (data, callbacks) => { 
    console.log('TODO.verify-checkout.verifyCheckout', data, callbacks);
    callbacks.onSuccess(data);
};

if (cart.isEmpty) { //TODO REMOVE
    cartItems.forEach((item) => cart.addItem(item));
}

const { price: subtotal } = usePrice({
  amount: cart.total
});

async function handleVerifyCheckout() {
    if (loggedIn()) {
      if (billing_address && shipping_address) {
        verifyCheckout(
          {
            amount: cart.total,
            products: cart.items.map((item) => formatOrderedProduct(item)),
            billing_address: {
              ...billing_address(),
            },
            shipping_address: {
              ...shipping_address(),
            },
          },
          {
            onSuccess: (data) => {
              setCheckoutData(data);
              router.push("/order");
            },
            onError: (error) => {
              console.log(error, "error");
            },
          }
        );
      } else {
        setError("error-add-both-address");
      }
    } else {
      $eventBus.emit('modal:open', 'LOGIN_VIEW');
      // openModal("LOGIN_VIEW");
    }
}

</script>
