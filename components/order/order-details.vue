<template>
    <div class="flex flex-col w-full lg:w-2/3 border border-border-200">
        <template v-if="!_isEmpty(order)">
          <div class="flex flex-col md:flex-row items-center md:justify-between p-5 border-b border-border-200">
            <h2 class="flex font-semibold text-sm md:text-xl text-heading mb-2">
              {{ $t('text-order-details') }} <span class="px-2">-</span>
              {{ order.tracking_number }}
            </h2>

            <Link
              :href="`${ROUTES.ORDERS}/${order.tracking_number}`"
              class="font-semibold text-sm text-accent flex items-center transition duration-200 no-underline hover:text-accent-hover focus:text-accent-hover"
            >
              <EyeIcon :width="20" class="me-2" />
              {{ $t('text-sub-orders') }}
            </Link>
          </div>

          <div class="flex flex-col sm:flex-row border-b border-border-200">
            <div class="w-full md:w-3/5 flex flex-col px-5 py-4 border-b sm:border-b-0 sm:border-r border-border-200">
              <div class="mb-4">
                <span class="text-sm text-heading font-bold mb-2 block">
                  {{ $t('text-shipping-address') }}
                </span>

                <span class="text-sm text-body">
                  {{ formatAddress(order.shipping_address) }}
                </span>
              </div>

              <div>
                <span class="text-sm text-heading font-bold mb-2 block">
                  {{ $t('text-billing-address') }}
                </span>

                <span class="text-sm text-body">
                  {{ formatAddress(order.billing_address) }}
                </span>
              </div>
            </div>

            <div class="w-full md:w-2/5 flex flex-col px-5 py-4">
              <div class="flex justify-between mb-3">
                <span class="text-sm text-body">{{ $t('text-sub-total') }}</span>
                <span class="text-sm text-heading">{{ amount }}</span>
              </div>

              <div class="flex justify-between mb-3">
                <span class="text-sm text-body">{{ $t('text-discount') }}</span>
                <span class="text-sm text-heading">{{ discount }}</span>
              </div>

              <div class="flex justify-between mb-3">
                <span class="text-sm text-body">
                  {{ $t('text-delivery-fee') }}
                </span>
                <span class="text-sm text-heading">{{ delivery_fee }}</span>
              </div>
              <div class="flex justify-between mb-3">
                <span class="text-sm text-body">{{ $t('text-tax') }}</span>
                <span class="text-sm text-heading">{{ sales_tax }}</span>
              </div>

              <div class="flex justify-between">
                <span class="text-sm font-bold text-heading">
                  {{ $t('text-total')}}
                </span>
                <span class="text-sm font-bold text-heading">{{ total }}</span>
              </div>
            </div>
          </div>

          <div>
            <div class="w-full flex justify-center items-center px-6">
              <OrderStatus :status="order.status.serial" />
            </div>
            <OrderItemsTable :products="order.products" />
          </div>
        </template>
        <div v-else class="max-w-lg mx-auto">
          <NotFound text="text-no-order-found" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { ROUTES } from "@utils/routes";
import usePrice from "@utils/use-price";
import { formatAddress } from "@utils/format-address";
import Link from "@components/ui/link/link";
import EyeIcon from "@components/icons/eye-icon";
import NotFound from "@components/common/not-found";
import OrderStatus from "@components/order/order-status";
import OrderItemsTable from "@components/order/order-items-table";

const props = defineProps({
    order: {
        type: Object,
        default: () => { }
    }
})

const amount = computed(() => usePrice({
    amount: props.order.amount,
}).price);

const discount = computed(() => usePrice({
    amount: props.order.discount,
}).price);

const total = computed(() => usePrice({
    amount: props.order.total,
}).price);

const delivery_fee = computed(() => usePrice({
    amount: props.order.delivery_fee,
}).price);

const sales_tax = computed(() => usePrice({
    amount: props.order.sales_tax,
}).price);

</script>
