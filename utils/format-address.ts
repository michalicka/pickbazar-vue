export declare type UserAddress = {
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
};

function removeFalsy(obj: any) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}

export function formatAddress(address: UserAddress) {
  if (!address) return;
  const temp = ["street_address", "state", "city", "zip", "country"].reduce(
    (acc, k) => ({ ...acc, [k]: (address as any)[k] }),
    {}
  );
  const formattedAddress = removeFalsy(temp);
  return Object.values(formattedAddress).join(", ");
}