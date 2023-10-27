<template>
    <div class="flex justify-between py-2" :key="item.id">
      <p class="flex items-center justify-between text-base">
        <span
          :class="['text-sm', notAvailable ? 'text-red-500' : 'text-body']"
        >
          <span
            :class="[ 'text-sm font-bold', notAvailable ? 'text-red-500' : 'text-heading' ]"
          >
            {{ item.quantity }}
          </span>
          <span class="mx-2">x</span>
          <span>{{ item.name }}</span> | <span>{{ item.unit }}</span>
        </span>
      </p>
      <span
        :class="[ 'text-sm', notAvailable ? 'text-red-500' : 'text-body' ]"
      >
        {{ !notAvailable ? price : $t('text-unavailable') }}
      </span>
    </div>
</template>

<script setup>
import { computed } from "vue";
import usePrice from "@utils/use-price";

const props = defineProps({
    item: {
        type: Object,
        default: {}
    },
    notAvailable: {
        type: Boolean,
        default: false
    }
});

const price = computed(() => usePrice({
  amount: props.item.itemTotal
}).price);

</script>
