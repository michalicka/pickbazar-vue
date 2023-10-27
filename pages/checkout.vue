<template>
    <div class="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <div class="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-s-8 w-full max-w-5xl">
        <div class="lg:max-w-2xl w-full space-y-6">
          <div class="shadow-700 bg-light p-5 md:p-8">
            <Address
              :id="me.id"
              heading="text-billing-address"
              :addresses="me.address.filter((address) => address.type === 'billing')"
              :count="1"
              type="billing"
            />
          </div>
          <div class="shadow-700 bg-light p-5 md:p-8">
            <Address
              :id="me.id"
              heading="text-shipping-address"
              :addresses="me.address.filter((address) => address.type === 'shipping')"
              :count="2"
              type="shipping"
            />
          </div>
          <div class="shadow-700 bg-light p-5 md:p-8">
            <Schedule :count="3" />
          </div>
        </div>
        <div class="w-full lg:w-96 mb-10 sm:mb-12 lg:mb-0 mt-10">
          <VerifyCheckout />
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { user } from "@data/me"; //TODO
import { useCustomerStore } from '@/stores/customer';
import Address from "@components/address/address";
import Schedule from "@components/checkout/schedule";
import VerifyCheckout from "@components/checkout/verify-checkout";

const customer = useCustomerStore();
customer.setMe(user); //TODO
const { me } = customer;

</script>
