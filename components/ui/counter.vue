<template>
  <div
    :class="className"
  >
    <button
      @click="onDecrement"
      :class="{ 'cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover': true,   'px-3 py-3 sm:px-2': variant === 'single', 'px-5': variant === 'big', 'hover:!bg-gray-100': variant === 'pillVertical' }"
    >
      <span class="sr-only">{{ $t("text-minus") }}</span>
      <MinusIcon class="h-3 w-3 stroke-2.5" />
    </button>
    <div
      :class="{ 'flex-1 flex items-center justify-center text-sm font-semibold': true, 'text-heading': variant === 'pillVertical' }"
    >
      {{ value }}
    </div>
    <button
      @click="onIncrement"
      :disabled="disabled"
      :class="{ 'cursor-pointer p-2 transition-colors duration-200 focus:outline-none hover:bg-accent-hover': true, 'px-3 py-3 sm:px-2': variant === 'single', 'px-5': variant === 'big', 'hover:!bg-gray-100': variant === 'pillVertical' }"
      :title="disabled ? $t('text-out-stock') : ''"
    >
      <span class="sr-only">{{ $t("text-plus") }}</span>
      <PlusIcon class="h-3.5 w-3.5 md:h-4.5 md:w-4.5 stroke-2.5" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import PlusIcon from "@components/icons/plus-icon";
import MinusIcon from "@components/icons/minus-icon";

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  variant: {
    type: String,
    required: false,
    default: () => '' 
  },
  onDecrement: {
    type: Function,
    default: () => { } 
  },
  onIncrement: {
    type: Function,
    default: () => { } 
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => false 
  }
});

const className = computed(() => {
  const variantClasses = {
    helium:
      "w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row absolute sm:static bottom-3 end-3 sm:bottom-0 sm:end-0 text-light rounded",
    neon: "w-full h-7 md:h-9 bg-accent text-light rounded",
    argon:
      "w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row text-light rounded",
    oganesson:
      "w-20 h-8 md:w-24 md:h-10 bg-accent text-light rounded-full shadow-500",
    single:
      "order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-accent text-light rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto end-0 sm:end-auto",
    details:
      "order-5 sm:order-4 w-full sm:w-24 h-10 bg-accent text-light rounded-full",
    pillVertical:
      "flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full",
    big: "w-full h-14 rounded text-light bg-accent inline-flex justify-between",
  };

  return 'flex overflow-hidden ' + variantClasses[props.variant];
});
</script>
