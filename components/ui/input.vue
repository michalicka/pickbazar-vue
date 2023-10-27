<template>
  <div :class="className">
    <label
      v-if="label"
      :htmlFor="name"
      class="block text-body-dark font-semibold text-sm leading-none mb-3"
    >
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :type="type"
      ref="ref"
      :value="modelValue"
      :class="[ 'px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow ? 'focus:shadow' : '', variantClasses[variant], sizeClasses[dimension], disabled ? 'bg-gray-100 cursor-not-allowed' : '', inputClassName ]"
      :disabled="disabled"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      :aria-invalid="error ? 'true' : 'false'"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change', $event)"
    />
    <p v-if="error" class="my-2 text-xs text-red-500">
        {{ error }}
    </p>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});

const variantClasses = {
  normal:
    "bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent",
  outline: "border border-border-base rounded focus:border-accent",
  line: "ps-0 border-b border-border-base rounded-none focus:border-accent",
};

const sizeClasses = {
  small: "text-sm h-10",
  medium: "h-12",
  big: "h-14",
};

const emit = defineEmits(['update:modelValue', 'change']);

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
    disabled: {
        type: Boolean,
        default: false
    }, 
    variant: {
        type: String,
        default: 'normal' // "normal" | "solid" | "outline" | "line"
    }, 
    dimension: {
        type: String,
        default: 'medium' // "small" | "medium" | "big"
    }
});

</script>
