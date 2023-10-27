export const calculateItemTotal = (item) => ({
    itemTotal: item.price * (item.quantity || 0)
});

export const calculateTotal = (items) =>
  items.reduce((total, item) => total + (item.quantity || 0) * item.price, 0);

export const calculateTotalItems = (items) =>
  items.reduce((sum, item) => sum + (item.quantity || 0), 0);

export const calculateUniqueItems = (items) => items.length;

export const calculatePaidTotal = ({ totalAmount, tax, shipping_charge }, discount) => {
  let paidTotal = totalAmount + tax + shipping_charge;
  if (discount) {
    paidTotal = paidTotal - discount;
  }
  
  return paidTotal;
};
