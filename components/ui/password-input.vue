<template>
<div :class="className">
    <div class="flex items-center justify-between mb-2">
      <label :htmlFor="name" class="font-semibold text-sm text-body">
        {{ label }}
      </label>

      <Link
        v-if="forgotPageLink"
        tabindex="-1"
        :href="forgotPageLink"
        class="text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
      >
        {{ $t('common:text-forgot-password') }}
      </Link>
      <button
        v-if="forgotPageRouteOnClick"
        tabindex="-1"
        type="button"
        @click="forgotPageRouteOnClick"
        class="text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
      >
        {{ $t('common:text-forgot-password') }}
      </button>
    </div>
    <div class="relative">
      <input
        :id="name"
        :name="name"
        :type="store.show ? 'text' : 'password'"
        ref="ref"
        :class="[ 'py-3 ps-4 pe-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow ? 'focus:shadow' : '', variantClasses[variant], inputClassName ]"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label
        :htmlFor="name"
        class="absolute end-4 top-5 -mt-2 text-body cursor-pointer"
        @click="store.toggleShow"
      >
        <EyeOffIcon v-if="store.show" class="w-6 h-6" />
        <EyeIcon v-else class="w-6 h-6" />
      </label>
    </div>
    <p v-if="error" class="my-2 text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { useSelectedStore } from '@/stores/selected';
import EyeIcon from "@components/icons/eye-icon";
import EyeOffIcon from "@components/icons/eye-off-icon";

defineOptions({
  inheritAttrs: false
});

const variantClasses = {
  normal:
    "bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",
  outline: "border border-border-base focus:border-accent",
};

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }, 
    className: {
        type: String,
        default: ''
    }, 
    inputClassName: {
        type: String,
        default: ''
    }, 
    label: {
        type: String,
        default: ''
    }, 
    name: {
        type: String,
        default: ''
    }, 
    error: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }, 
    shadow: {
        type: Boolean,
        default: false
    }, 
    variant: {
        type: String,
        default: 'normal' // "normal" | "solid" | "outline"
    }, 
    forgotPageLink: {
        type: String,
        default: ''
    }, 
    forgotPageRouteOnClick: {
        type: Function,
        default: null
    }
});

const store = useSelectedStore();

</script>
