import { defineStore } from 'pinia'
import { SELECTED_KEY } from "@utils/constants";

export const useSelectedStore = defineStore(SELECTED_KEY, () => {
  const product = ref({});
  const setProduct = (value) => {
    product.value = value;
  }

  const selected = ref({
    'text-billing-address': null,
    'text-shipping-address': null,
    'text-delivery-schedule': null
  });
  const setSelected = (id, value) => {
    selected.value[id] = value;
  }

  const customerId = ref(null);
  const setCustomerId = (value) => {
    customerId.value = value;
  }

  const address = ref({});
  const setAddress = (value) => {
    address.value = value;
  }

  const addressType = ref('');
  const setAddressType = (value) => {
    addressType.value = value;
  }

  const addressId = ref('');
  const setAddressId = (value) => {
    addressId.value = value;
  }

  const errorMsg = ref('');
  const setErrorMsg = (value) => {
    errorMsg.value = value;
  }

  const show = ref(false);
  const toggleShow = () => {
    show.value = !show.value;
  }

  const order = ref({});
  const setOrder = (value) => {
    order.value = value;
  }

  const data = ref({});
  const setData = (value) => {
    data.value = value;
  }

  return { 
    product, setProduct, 
    selected, setSelected,
    customerId, setCustomerId,
    address, setAddress,
    addressType, setAddressType,
    addressId, setAddressId,
    errorMsg, setErrorMsg,
    show, toggleShow,
    order, setOrder,
    data, setData
  }
})
