import { defineStore } from 'pinia'
import { CART_KEY } from "@utils/constants";
import { calculateItemTotal, calculateTotal, calculateTotalItems, calculateUniqueItems } from '@utils/cart-utils';

export const useCartStore = defineStore(CART_KEY, () => {
  const items = ref([]);
  const isEmpty = ref(true);
  const totalItems = ref(0);
  const totalUniqueItems = ref(0);
  const total = ref(0);
  const total_tax = ref(0);
  const shipping_charge = ref(0);
  const discount = ref(0);
  const hasCoupon = ref(false);
  const meta = ref(null);

  const generateCartItem = (item, variation) => {
    const { id, name, slug, image, price, sale_price, quantity, unit } = item;
    if (!_isEmpty(variation)) {
      return {
        id: `${id}.${variation.id}`,
        productId: id,
        name: `${name} - ${variation.title}`,
        slug,
        unit,
        stock: variation.quantity,
        price: variation.sale_price ? variation.sale_price : variation.price,
        image: image.thumbnail,
        variationId: variation.id,
      };
    }
    return {
      id,
      name,
      slug,
      unit,
      image: image.thumbnail,
      stock: quantity,
      price: sale_price ? sale_price : price,
    };
  }

  const calculateTotals = () => {
    _forEach(items.value, (item) => _assign(item, calculateItemTotal(item)));
    totalItems.value = calculateTotalItems(items.value);
    totalUniqueItems.value = calculateUniqueItems(items.value);
    total.value = calculateTotal(items.value);
    total_tax.value = total.value - (total.value / 1.21); //TODO
    shipping_charge.value = 50; //TODO
    isEmpty.value = totalUniqueItems.value === 0;
  }

  const getItem = (id) => {
    return _find(items.value, { id });
  }

  const addItemToCart = (item, quantity) => {
    if (quantity <= 0)
      throw new Error("cartQuantity can't be zero or less than zero");
    const cartItem = getItem(item.id);

    if (cartItem) {
      cartItem.quantity = (cartItem.quantity || 0) + quantity;
    } else {
      item.quantity = quantity;
      items.value.push(item);
    }
    calculateTotals();
  }

  const removeItemOrQuantity = (id, quantity) => {
    const cartItem = getItem(id);
    if (cartItem) {
      cartItem.quantity = (cartItem.quantity || 0) - quantity;
      _remove(items.value, (i) => (i.quantity || 0) <= 0);
    }
    calculateTotals();
  }

  const addItem = (item) => {
    items.value.push(Object.assign({}, item));
    calculateTotals();
  }

  const updateItem = (id, item) => {
    const cartItem = getItem(id);
    if (cartItem) {
      _assign(cartItem, item);
    }
    calculateTotals();
  }

  const removeItem = (id) => {
    _remove(items.value, { id });
    calculateTotals();
  }

  const isInCart = (id) => {
    return !!getItem(id);
  }

  const isInStock = (id) => {
    const item = getItem(id);
    return item ? _get(item, 'quantity') <= _get(item, 'stock') : false;
  }

  const setHasCoupon = (value) => {
    hasCoupon.value = value;
  }

  return { 
    items, 
    isEmpty, 
    totalItems, 
    totalUniqueItems, 
    total, 
    total_tax,
    shipping_charge,
    discount,
    meta, 
    hasCoupon,
    setHasCoupon,
    generateCartItem,
    getItem,
    addItemToCart, 
    removeItemOrQuantity,
    addItem,
    updateItem,
    removeItem,
    isInCart,
    isInStock
  }
})
