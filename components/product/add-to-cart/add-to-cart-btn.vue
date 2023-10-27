<template>
  <div>
    <button
      v-if="variant === 'neon'"
      @click="onClick"
      :disabled="disabled"
      class="group w-full h-7 md:h-9 flex items-center justify-between text-xs md:text-sm text-body-dark rounded bg-gray-100 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
    >
      <span class="flex-1">{{ $t("text-add") }}</span>
      <span class="w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded-r-lg transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600">
        <PlusIcon class="w-4 h-4 stroke-2" />
      </span>
    </button>
    <button
      v-else-if="variant === 'argon'"
      @click="onClick"
      :disabled="disabled"
      class="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-heading bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
    >
      <PlusIcon class="w-5 h-5 stroke-2" />
    </button>
    <button
      v-else-if="variant === 'oganesson'"
      @click="onClick"
      :disabled="disabled"
      class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm rounded-full text-light bg-accent shadow-500 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
    >
      <span class="sr-only">{{ $t("text-add") }}</span>
      <PlusIcon class="w-5 h-5 md:w-6 md:h-6 stroke-2" />
    </button>
    <button
      v-else-if="variant === 'single'"
      @click="onClick"
      :disabled="disabled"
      class="order-5 sm:order-4 py-2 px-3 sm:px-5 border-2 border-border-100 flex items-center justify-center sm:justify-start text-sm font-semibold rounded-full text-accent hover:text-light bg-light hover:bg-accent hover:border-accent transition-colors duration-300 focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
    >
      <CartIcon class="w-4 h-4 me-2.5" />
      <span>{{ $t("text-cart") }}</span>
    </button>
    <button
      v-else-if="variant === 'big'"
      @click="onClick"
      :disabled="disabled"
      :class="{ 'py-4 px-5 w-full flex items-center justify-center text-sm lg:text-base font-light rounded text-light bg-accent hover:bg-accent-hover transition-colors duration-300 focus:outline-none focus:bg-accent-hover': true, 'border !bg-gray-300 hover:!bg-gray-300 border-border-400 !text-body cursor-not-allowed': disabled }"
    >
      <span>{{ $t("text-add-cart") }}</span>
    </button>
    <button
      v-else
      @click="onClick"
      :disabled="disabled"
      :title="disabled ? 'Out Of Stock' : ''"
      class="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-accent bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light"
    >
      <span class="sr-only">{{ $t("text-add") }}</span>
      <PlusIcon class="w-5 h-5 stroke-2" />
    </button>
  </div>
</template>

<script setup>
import PlusIcon from "@components/icons/plus-icon";
import CartIcon from "@components/icons/cart";

const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: () => '' 
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => false 
  },
  onClick: {
    type: Function,
    default: () => {}
  }
});
</script>
