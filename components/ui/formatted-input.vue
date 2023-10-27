<template>
    <div :class="className">
        <label :htmlFor="name" class="block mb-2 text-sm text-body">
          {{ label }}
        </label>
        <input
          v-cleave
          :value="modelValue"
          :id="name"
          :name="name"
          type="text"
          :class="[ 'py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow && 'focus:shadow', variantClasses[variant], inputClassName ]"
          ref="ref"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          :aria-invalid="error ? 'true' : 'false'"
          v-bind="$attrs"
        />
        <p v-if="error" class="my-2 text-xs text-red-500">
            {{ error }}
        </p>
    </div>
</template>

<script setup>
import Cleave from 'cleave.js';

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
    options: {
        type: Object,
        default: () => { }
    },
    shadow: {
        type: Boolean,
        default: false
    }, 
    variant: {
        type: String,
        default: 'normal' // "normal" | "solid" | "outline"
    },
    raw: {
        type: Boolean,
        default: true
    }
});

const cleave = ref();

const vCleave = {
  beforeMount(el, binding) {
    cleave.value = new Cleave(el, props.options);
  },
  updated(el) {
    const event = new Event('input', { bubbles: true });
    setTimeout(() => {
      el.value = cleave.value.properties.result;
      el.dispatchEvent(event);
    }, 100);
  },
  beforeUnmount() {
    if (!cleave.value) return;
    cleave.value.destroy();
    cleave.value = null;
  }
}

</script>
