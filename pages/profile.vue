<template>
    <div class="flex flex-col xl:flex-row items-start max-w-1920 w-full mx-auto py-10 px-8 xl:py-14 xl:px-16 2xl:px-20 bg-gray-100">
      <ProfileSidebar class="flex-shrink-0 hidden xl:block xl:w-80 me-10" />
      <Spinner v-if="loading" :show-text="false" />
      <div v-else class="w-full overflow-hidden">
        <div class="mb-8">
          <ProfileForm :user="me" />
        </div>
        <Card class="w-full">
          <Address
            :id="me.id"
            :addresses="me.address"
            heading="text-addresses"
            type="billing"
          />
        </Card>
      </div>
    </div>
</template>

<script setup>
import { user } from "@data/me"; //TODO
import { useCustomerStore } from '@/stores/customer';
import ProfileSidebar from "@components/profile/profile-sidebar";
import ProfileForm from "@components/profile/profile-form";
import Spinner from "@components/ui/loaders/spinner/spinner";
import Card from "@components/ui/card";
import Address from "@components/address/address";

const loading = ref(false);

const customer = useCustomerStore();
customer.setMe(user); //TODO
const { me } = customer;

</script>
