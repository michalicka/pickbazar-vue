<template>
    <div
      class="flex flex-col"
    >
      <Input
        v-model="contact"
        name="contact"
        :label="$t('text-enter-contact-number')"
        variant="outline"
        class-name="flex-1"
        :error="errors ? $t(errors.contact.message) : ''"
      />

      <div class="my-6">
        <Label>{{ $t('text-payment-gateway') }}</Label>

        <div class="space-s-4 flex items-center">
          <Radio
            id="stripe"
            name="payment_gateway"
            type="radio"
            v-model="payment_gateway"
            :label="$t('text-stripe')"
          />

          <Radio
            id="cod"
            name="payment_gateway"
            type="radio"
            v-model="payment_gateway"
            value="cod"
            :label="$t('text-cash-on-delivery')"
          />
        </div>
      </div>

      <div v-if="payment_gateway === 'stripe'">
        <Label>{{ $t('text-card-info') }}</Label>

        <Input
          v-model="card.email"
          name="card.email"
          variant="outline"
          :placeholder="$t('text-email')"
          :error="errors ? $t(errors.card.email.message): ''"
        />

        <FormattedInput
          variant="outline"
          :placeholder="$t('placeholder-card-number')"
          v-model="card.number"
          name="card.number"
          :options="{ creditCard: true }"
          :error="errors ? $t(errors.card.number.message) : ''"
        />

        <div class="flex space-s-4 w-full">
          <FormattedInput
            variant="outline"
            class-name="w-1/2"
            :placeholder="$t('placeholder-m-y')"
            :options="{ date: true, datePattern: ['m', 'y'] }"
            v-model="card.expiry"
            name="card.expiry"
            :error="errors ? $t(errors.card.expiry.message) : ''"
          />
          <FormattedInput
            variant="outline"
            class-name="w-1/2"
            :placeholder="$t('placeholder-cvc')"
            :options="{ blocks: [4] }"
            v-model="card.cvc"
            name="card.cvc"
            :error="errors ? $t(errors.card.cvc.message) : ''"
          />
        </div>
      </div>
      <ValidationError v-if="!subtotal" :message="$t('error-order-unavailable')" />
      <div v-if="total < 0" class="mt-3">
        <ValidationError :message="$t('error-cant-process-order')" />
      </div>
      <Button
        :loading="loading"
        :disabled="!subtotal || total < 0"
        class="w-full lg:w-auto lg:ms-auto mt-5"
        :on-click="onSubmit"
      >
        {{ $t('text-place-order') }}
      </Button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ROUTES } from "@utils/routes";
import { calculateTotal, calculatePaidTotal } from '@utils/cart-utils';
import { formatOrderedProduct } from "@utils/format-ordered-product";
import { useCartStore } from '@/stores/cart';
import { useSelectedStore } from '@/stores/selected';
import { useCustomerStore } from '@/stores/customer';
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import Input from "@components/ui/input";
import FormattedInput from "@components/ui/formatted-input";
import Button from "@components/ui/button";
import ValidationError from "@components/ui/validation-error";

const router = useRouter();
const cart = useCartStore();
const store = useSelectedStore();
const customer = useCustomerStore();

const contact = ref('');
const payment_gateway = ref('stripe');
const card = ref({
    number: '',
    expiry: '',
    cvc: '',
    email: ''
});

const checkoutData = {
  total_tax: cart.total_tax,
  shipping_charge: cart.shipping,
  unavailable_products: [] //TODO
}; 

const errors = ref(null); //TODO
const coupon = null; //TODO
const delivery_time = { //TODO
    description: 'Next Day'
}

const available_items = computed(() => cart.items.filter(
    (item) => !checkoutData.unavailable_products.includes(item.id)
));

const subtotal = computed(() => calculateTotal(available_items.value) - checkoutData.total_tax);
const total = computed(() => calculatePaidTotal(
    {
      totalAmount: subtotal.value,
      tax: checkoutData.total_tax,
      shipping_charge: checkoutData.shipping_charge,
    },
    cart.discount
));

const billing_address = () => { //TODO
  const items = customer.me.address.filter((address) => address.type === 'billing') || [];
  const indexes = Object.assign({}, store.selected);
  const index = indexes['text-billing-address'] || (items.length ? 0 : null);
  const item = index !== null && index < items.length ? Object.assign({}, items[index]) : { address: {} };
  const address = Object.assign({}, item.address || {});

  return address;
};
const shipping_address = () => { //TODO
  const items = customer.me.address.filter((address) => address.type === 'shipping') || [];
  const indexes = Object.assign({}, store.selected);
  const index = indexes['text-shipping-address'] || (items.length ? 0 : null);
  const item = index !== null && index < items.length ? Object.assign({}, items[index]) : { address: {} };
  const address = Object.assign({}, item.address || {});

  return address;
};

const loading = ref(false); //TODO
const createOrder = (data, callbacks) => { 
    console.log('TODO.payment-form.createOrder', data, callbacks);
    callbacks.onSuccess({
        tracking_number: 'ABCDEFGH' //TODO
    });
};

const onSubmit = () => {
    let input = {
      products: available_items.value.map((item) => formatOrderedProduct(item)),
      customer_contact: contact.value,
      status: 1, //TODO
      amount: subtotal.value,
      coupon_id: coupon ? coupon.id : null,
      discount: cart.discount || 0,
      paid_total: total,
      total,
      sales_tax: checkoutData.total_tax,
      delivery_fee: checkoutData.shipping_charge,
      delivery_time: delivery_time ? delivery_time.description : '',
      payment_gateway: payment_gateway.value,
      billing_address: {
        ...billing_address(),
      },
      shipping_address: {
        ...shipping_address(),
      },
    };
    if (payment_gateway.value !== "cod") {
      input.card = {
        number: card.value.number,
        expiryMonth: card.value.expiry.split("/")[0],
        expiryYear: card.value.expiry.split("/")[1],
        cvv: card.value.cvc,
        email: card.value.email,
      };
    }

    createOrder(input, {
      onSuccess: (order) => {
        if (order.tracking_number) {
          router.push(`${ROUTES.ORDERS}/${order.tracking_number}`);
        }
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
}

const setValue = (name, value) => {
    [name].value = value;
}

</script>
