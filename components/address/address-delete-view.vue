<template>
    <ConfirmationCard
      :on-cancel="closeModal"
      :on-delete="handleDelete"
      :delete-btn-loading="isLoading"
    />
</template>

<script setup>
import { useSelectedStore } from '@/stores/selected';
import { useCustomerStore } from '@/stores/customer';
import ConfirmationCard from '@components/common/confirmation-card';

const isLoading = ref(false);

const { $eventBus } = useNuxtApp();
const store = useSelectedStore();
const customer = useCustomerStore();

const closeModal = () => {
    $eventBus.emit('modal:close');
};

const handleDelete = () => {
    customer.removeAddress(store.addressId);
    closeModal();
};

</script>
