<template>
    <div :class="className">
      <label
        v-if="label"
        :htmlFor="name"
        class="block text-body-dark font-semibold text-sm leading-none mb-3"
      >
        {{ label }}
      </label>
      <textarea
        :id="name"
        :name="name"
        :value="modelValue"
        :class="[ 'px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow ? 'focus:shadow' : '', variantClasses[variant], inputClassName ]"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        :rows="4"
        ref="ref"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
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
    shadow: {
        type: Boolean,
        default: false
    }, 
    variant: {
        type: String,
        default: 'normal' // "normal" | "solid" | "outline"
    }
});

</script>
