<template>
    <SectionWithCardGroup
        :count="count"
        :heading="heading"
        add-action-text="text-address"
        :items="addresses"
        :on-select="handleSelect"
        :on-add="handleAdd"
        :on-edit="handleEdit"
        :on-delete="handleDelete"
    />
</template>

<script setup>
import { loggedIn } from "@utils/is-loggedin";
import { useSelectedStore } from '@/stores/selected';
import SectionWithCardGroup from "@components/common/section-with-card-group";

const props = defineProps({
    id: {
        type: Number,
        default: ''
    },
    heading: {
        type: String,
        default: ''
    },
    addresses: {
        type: Array,
        default: () => []
    },
    count: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: 'billing' // "billing" | "shipping";
    }
});

const { $eventBus } = useNuxtApp();
const store = useSelectedStore();

const handleAdd = () => {
    if (loggedIn()) {
      store.setCustomerId(props.id);
      store.setAddress({ type: props.type });
      store.setAddressType(props.type);
      $eventBus.emit('modal:open', 'ADD_OR_UPDATE_ADDRESS');
    } else {
      $eventBus.emit('modal:open', 'LOGIN_VIEW');
    }
}

const handleEdit = (address) => {
    store.setCustomerId(props.id);
    store.setAddress(address);
    store.setAddressType(address.type);
    $eventBus.emit('modal:open', 'ADD_OR_UPDATE_ADDRESS');
}

const handleDelete = (address) => {
    store.setCustomerId(props.id);
    store.setAddressId(address.id);
    $eventBus.emit('modal:open', 'DELETE_ADDRESS');
}

const updateBillingAddress = (address) => {
    console.log('TODO.address.updateBillingAddress');
}

const updateShippingAddress = (address) => {
    console.log('TODO.address.updateBillingAddress');
}

const handleSelect = (item) => {
    if (props.type === "billing") {
      updateBillingAddress(item);
    } else {
      updateShippingAddress(item);
    }
  }
</script>
