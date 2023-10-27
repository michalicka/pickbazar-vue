<template>
    <div>
        <div v-if="cart.isEmpty">
          <div
            class="flex flex-col items-center justify-center mb-4"
            :style="{ height: 'calc(100vh - 85px)' }"
          >
            <EmptyCart :width="180" :height="236" />
            <h4 class="my-4 text-lg text-heading">
              {{ $t('error-cart-empty') }}
              <Link
                :href="ROUTES.HOME"
                class="text-accent font-semibold hover:text-accent-hover"
              >
                {{ $t('text-home') }}
              </Link>
            </h4>
          </div>
        </div>
        <div v-else>
            <div class="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
              <div class="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-s-8 w-full max-w-5xl">
                <div class="lg:max-w-2xl w-full space-y-6 order-2 lg:order-1">
                  <div class="shadow-700 bg-light p-5 md:p-8">
                    <PaymentForm />
                  </div>
                </div>
                <div class="w-full lg:w-96 order-1 lg:order-2 mb-10 sm:mb-12 lg:mb-0">
                  <OrderInformation />
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ROUTES } from "@utils/routes";
import { useCartStore } from '@/stores/cart';
import { cartItems } from '@/data/cart-items'; //TODO remove
import Link from "@components/ui/link/link";
import EmptyCart from "@components/icons/empty-cart";
import PaymentForm from "@components/checkout/payment-form";
import OrderInformation from "@components/order/order-information";

const cart = useCartStore();

if (cart.isEmpty) { //TODO REMOVE
    cartItems.forEach((item) => cart.addItem(item));
}

</script>
