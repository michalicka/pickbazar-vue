<template>
    <div class="p-4 sm:p-8">
      <div class="p-6 sm:p-8 lg:p-12 max-w-screen-lg w-full mx-auto bg-light rounded border shadow-sm">
        <h2 class="flex flex-col sm:flex-row items-center justify-between text-base font-bold text-heading mb-9 sm:mb-12">
          <span class="mb-5 sm:mb-0 me-auto ">
            <span class="me-4">{{ $t('text-status') }} :</span>
            <Badge
              :text="data.order.status.name"
              class="font-normal text-sm whitespace-nowrap"
            />
          </span>

          <Link
            :href="`/${siteSettings.defaultLanguage}${ROUTES.HOME}`"
            class="inline-flex items-center text-accent text-base font-normal underline hover:no-underline hover:text-accent-hover"
          >
            {{ $t('text-back-to-home') }}
          </Link>
        </h2>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div class="py-4 px-5 border border-border-200 rounded shadow-sm">
            <h3 class="mb-2 text-sm text-heading font-semibold">
              {{ $t('text-order-number') }}
            </h3>
            <p class="text-sm text-body-dark">
              {{ data.order.tracking_number }}
            </p>
          </div>
          <div class="py-4 px-5 border border-border-200 rounded shadow-sm">
            <h3 class="mb-2 text-sm  text-heading font-semibold">
              {{ $t('text-date') }}
            </h3>
            <p class="text-sm text-body-dark">
              {{ $dayjs(data.order.created_at).format('MMMM D, YYYY') }}
            </p>
          </div>
          <div class="py-4 px-5 border border-border-200 rounded shadow-sm">
            <h3 class="mb-2 text-sm  text-heading font-semibold">
              {{ $t('text-total') }}
            </h3>
            <p class="text-sm  text-body-dark">{{ total }}</p>
          </div>
          <div class="py-4 px-5 border border-border-200 rounded shadow-sm">
            <h3 class="mb-2 text-sm  text-heading font-semibold">
              {{ $t('text-payment-method') }}
            </h3>
            <p class="text-sm text-body-dark">
              {{ (_get(data, 'order.payment_gateway', '') || '').toUpperCase() || 'N/A' }}
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 lg:pe-3 mb-12 lg:mb-0">
            <h2 class="text-xl font-bold text-heading mb-6">
              {{ $t('text-total-amount') }}
            </h2>

            <div>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-sub-total') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm ">
                  {{ sub_total }}
                </span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-shipping-charge') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm ">
                  {{ shipping_charge }}
                </span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-tax') }}
                </strong>
                :<span class="w-7/12 sm:w-8/12 ps-4 text-sm ">{{ tax }}</span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-discount') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm ">
                  {{ discount }}
                </span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-total') }}
                </strong>
                :<span class="w-7/12 sm:w-8/12 ps-4 text-sm ">{{ total }}</span>
              </p>
            </div>
          </div>

          <div class="w-full lg:w-1/2 lg:ps-3">
            <h2 class="text-xl font-bold text-heading mb-6">
              {{ $t('text-order-details') }}
            </h2>
            <div>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-total-item') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm">
                  {{ formatString(data.order.products.length, $t('common:text-item')) }}
                </span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-deliver-time') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm">
                  {{ data.order.delivery_time }}
                </span>
              </p>
              <p class="flex text-body-dark mt-5">
                <strong class="w-5/12 sm:w-4/12 text-sm  text-heading font-semibold">
                  {{ $t('text-shipping-address') }}
                </strong>
                :
                <span class="w-7/12 sm:w-8/12 ps-4 text-sm">
                  {{ formatAddress(data.order.shipping_address) }}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <OrderItemsTable id="orderDetailsTable" :products="data.order.products" />
        </div>

        <div v-if="_size(_get(data, 'order.children'))">
          <h2 class="text-xl font-bold text-heading mt-12 mb-6">
            {{ $t('text-sub-orders') }}
          </h2>
          <div>
            <div class="flex items-start border border-gray-700 rounded p-4 mb-12">
              <span class="w-4 h-4 px-2 rounded-sm bg-dark flex items-center justify-center me-3 mt-0.5">
                <CheckMark class="w-2 h-2 text-light flex-shrink-0" />
              </span>
              <p class="text-heading text-sm">
                <span class="font-bold">{{ $t('text-note') }}:</span>
                {{ $t('message-sub-order') }}
              </p>
            </div>
              <div v-if="Array.isArray(data.order.children) && data.order.children.length" class="">
                <SubOrdersTable
                  :data="data.order.children"
                  rowKey="id"
                  :scroll="{ x: 800 }"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { orders } from '@data/orders';
import { ROUTES } from "@utils/routes";
import usePrice from "@utils/use-price";
import { formatString } from "@utils/format-string";
import { formatAddress } from "@utils/format-address";
import { siteSettings } from "@settings/site.settings";
import Badge from "@components/ui/badge";
import Link from "@components/ui/link/link";
import CheckMark from "@components/icons/checkmark";
import OrderItemsTable from "@components/order/order-items-table";
import SubOrdersTable from "@components/order/sub-orders-table";

const route = useRoute();
const order = _find(
  _flatMap(orders.data, (item) => [ item, ...(item.children || []) ]), 
  { tracking_number: route.params.tracking_number }
) || orders.data[0]; //TODO

const data = {
    order
};

const { price: total } = usePrice({ amount: data ? data.order.paid_total : 0 });
const { price: sub_total } = usePrice({ amount: data ? data.order.amount : 0 });
const { price: shipping_charge } = usePrice(
    { amount: data ? (data.order.delivery_fee || 0) : 0 }
);
const { price: tax } = usePrice(
    { amount: data ? (data.order.sales_tax || 0) : 0 }
);
const { price: discount } = usePrice(
    { amount: data ? (data.order.discount || 0) : 0 }
);

</script>
