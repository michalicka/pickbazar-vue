<template>
  <Modal :open="modal.open">
    <Login v-if="modal.view === 'LOGIN_VIEW'" />
    <ProductDetailsModalView v-if="modal.view === 'PRODUCT_DETAILS'" />
    <CreateOrUpdateAddressForm v-if="modal.view === 'ADD_OR_UPDATE_ADDRESS'" />
    <AddressDeleteView v-if="modal.view === 'DELETE_ADDRESS'" />
    <ShopProfileCard
      v-if="modal.view === 'SHOP_INFO'"
      :data="store.data"
      card-class-name="!hidden"
      class-name="!flex flex-col !w-screen !h-screen !rounded-none"
    />
  </Modal>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { useSelectedStore } from '@/stores/selected';
import Modal from "@components/ui/modal/modal";
import Login from "@/components/auth/login";
// import Register from "@/components/auth/register";
// import ForgotPassword from "@/components/auth/forget-password/forget-password";
import ProductDetailsModalView from "@/components/product/product-details-modal-view";
import CreateOrUpdateAddressForm from "@/components/address/address-form";
import AddressDeleteView from "@/components/address/address-delete-view";
import ShopProfileCard from "@/components/profile/profile-card";

const name = 'ManagedModal';

const state = reactive({
  modal: {
    open: false,
    view: null
  }
});

const { $eventBus } = useNuxtApp();
const store = useSelectedStore();

$eventBus.on('modal:open', (view) => {
  console.log('modal:open', view);
  state.modal.view = view;
  state.modal.open = true;
});

$eventBus.on('modal:close', () => {
  console.log('modal:close');
  state.modal.open = false;
  state.modal.view = '';
});

const { modal } = toRefs(state);

</script>
