<template>
    <p
        v-if="!cart.hasCoupon"
        role="button"
        class="text-xs font-bold text-body transition duration-200 hover:text-accent"
        @click="() => cart.setHasCoupon(true)"
      >
        {{ $t('text-have-coupon') }}
    </p>
    <div
      v-else
      class="w-full flex flex-col sm:flex-row"
    >
      <Input
        v-model="code"
        name="code"
        :placeholder="$t('text-enter-coupon')"
        variant="outline"
        class-name="mb-4 sm:mb-0 sm:me-4 flex-1"
        dimension="small"
        :error="errors ? $t(errors.code.message) : ''"
      />
      <Button
        :loading="loading"
        :disabled="loading"
        size="small"
        class-name="w-full sm:w-40 lg:w-auto"
        :on-click="onSubmit"
      >
        {{ $t('text-apply') }}
      </Button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import Input from "@components/ui/input";
import Button from "@components/ui/button";

const cart = useCartStore();

const loading = ref(false); //TODO
const errors = ref(null); //TODO

const code = ref('');

const verifyCoupon = (data, callbacks) => { 
    console.log('TODO.coupon.createOrder', data, callbacks);
    callbacks.onSuccess({
        is_valid: true,
        coupon: '123'
    });
};

const applyCoupon = (coupon) => {
    console.log('TODO.coupon.applyCoupon', coupon);
}

const errorMessage = ref(''); //TODO
const setError = (code, data) => {
    console.log('TODO.verify-checkout.setError');
    errorMessage.value = data.message;
}

const onSubmit = () => {
    verifyCoupon({ 
      code: code.value 
    }, {
      onSuccess: (data) => {
        if (data.is_valid) {
            applyCoupon(data.coupon);
            cart.setHasCoupon(false);
        } else {
            setError('code', {
              type: 'manual',
              message: 'error-invalid-coupon',
            });
        }
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
}

</script>
