import { defineStore } from 'pinia'
import { CUSTOMER_KEY } from "@utils/constants";

export const useCustomerStore = defineStore(CUSTOMER_KEY, () => {
  
  const me = ref({ address: [] });
  const setMe = (value) => {
    me.value = _assign(me.value, value);
  }

  const addAddress = (value) => {
    me.value.address.push(value);
  }

  const updateAddress = (id, value) => {
    const item = _find(me.value.address, { id });
    if (item) {
      _assign(item, value);
    }
  }

  const removeAddress = (id) => {
    _remove(me.value.address, { id });
  }

  return { 
    me, setMe, addAddress, updateAddress, removeAddress
  }
})
