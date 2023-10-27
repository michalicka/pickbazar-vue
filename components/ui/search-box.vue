<template>
  <div class="w-full">
    <div
      :class="[ 'rounded md:rounded-lg flex relative', variant === 'normal' ? 'h-14 shadow-900' : 'h-11 md:h-12' ]"
    >
      <label htmlFor="label" class="sr-only">
        {{ label }}
      </label>

      <input
        :id="label"
        type="text"
        :value="value"
        autoComplete="off"
        :class="[ 'w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-lg focus:outline-none focus:ring-0', classes[variant] ]"
         v-bind="$attrs"
      />
      <button
        v-if="value"
        type="button"
        @click="onClearSearch"
        class="{ 'cursor-pointer h-full w-10 md:w-14 flex items-center justify-center absolute text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover': true, 'end-36': variant === 'normal', 'end-0': variant !== 'normal' }"
      >
        <span class="sr-only">{{ $t('common:text-close') }}</span>
        <CloseIcon class="w-3.5 h-3.5 md:w-3 md:h-3" />
      </button>
      <button v-if="variant === 'normal'" class="h-full px-8 flex items-center rounded-lg rounded-l-none bg-accent text-light font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover focus:bg-accent-hover">
        <SearchIcon class="w-4 h-4 me-2.5" />
        {{ $t('common:text-search') }}
      </button>
      <button v-else class="h-full w-10 md:w-14 flex items-center justify-center absolute start-0 text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover">
        <span class="sr-only">{{ $t("common:text-search") }}</span>
        <SearchIcon class="w-3.5 h-3.5 md:w-4 md:h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import SearchIcon from '@components/icons/search-icon'
import CloseIcon from "@components/icons/close-icon";

defineOptions({
  inheritAttrs: false
})

const name = 'SearchBox';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  onSubmit: {
    type: Function,
    default: () => { }
  },
  onClearSearch: {
    type: Function,
    default: () => { }
  },
  variant: {
    type: String,
    default: 'normal'
  },
  value: {
    type: String,
    default: 'normal'
  }
});

const classes = {
  normal:
    "bg-light ps-6 pe-14 rounded-r-none border border-e-0 border-transparent focus:border-accent",
  minimal:
    "bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light",
};

</script>
