<template>
    <div
      @click="onClick"
      role="button"
      :class="[ 'bg-gray-100 rounded overflow-hidden w-full flex flex-shrink-0 flex-col mb-4 border-2 border-transparent cursor-pointer last:mb-0', isActive === true ? '!border-accent' : '' ]"
    >
      <div class="flex justify-between items-center border-b border-border-200 py-3 px-5 md:px-3 lg:px-4">
        <span class="flex font-bold text-sm lg:text-base text-heading me-4 flex-shrink-0">
          {{ $t('text-order') }}
          <span class="font-normal ms-1">#{{ id }}</span>
        </span>
        <span
          class="text-sm text-blue-500 bg-blue-100 px-3 py-2 rounded whitespace-nowrap truncate max-w-full"
          :title="status.name"
        >
          {{ status.name }}
        </span>
      </div>

      <div class="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
        <p class="text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span class="w-24 overflow-hidden flex-shrink-0">
            {{ $t('text-order-date') }}
          </span>
          <span class="me-auto">:</span>
          <span class="ms-1">
            {{ $dayjs(created_at).format('MMMM D, YYYY') }}
          </span>
        </p>
        <p class="text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span class="w-24 overflow-hidden flex-shrink-0">
            {{ $t('text-deliver-time') }}
          </span>
          <span class="me-auto">:</span>
          <span class="ms-1 truncate">{{ delivery_time }}</span>
        </p>
        <p class="text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span class="w-24 overflow-hidden flex-shrink-0">
            {{ $t('text-amount') }}
          </span>
          <span class="me-auto">:</span>
          <span class="ms-1">{{ amount }}</span>
        </p>
        <p class="text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0">
          <span class="w-24 overflow-hidden flex-shrink-0">
            {{ $t('text-total-price') }}
          </span>
          <span class="me-auto">:</span>
          <span class="ms-1">{{ total }}</span>
        </p>
      </div>
    </div>
</template>

<script setup>
import usePrice from "@utils/use-price";

const props = defineProps({
    order: {
        type: Object,
        default: () => { }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    onClick: {
        type: Function,
        default: () => { }
    }
});

const { id, status, created_at, delivery_time } = props.order || {};

const { price: amount } = usePrice({
    amount: props.order.amount,
});

const { price: total } = usePrice({
    amount: props.order.total,
});

</script>
