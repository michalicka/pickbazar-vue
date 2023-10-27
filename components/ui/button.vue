<template>
    <button
        :aria-pressed="active"
        :data-variant="variant"
        :class="classesName"
        :disabled="disabled"
        @click="onClick"
      >
          <slot />
          <span
            v-if="loading"
            :class="classes.loading"
            :style="{ borderTopColor: variant === 'outline' ? 'currentColor' : '#ffffff' }"
          />
    </button>
</template>

<script setup>
import { computed } from "vue";

const name = 'Button';

const props = defineProps({
  className: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'normal' // "normal" | "outline" | "custom"
  },
  size: {
    type: String,
    default: 'medium' // "big" | "medium" | "small"
  },
  active: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function,
    default: () => { }
  }
});

const { disabled, variant, size, className } = props;

const classes = {
  root: 'inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700',
  normal:
    'bg-accent text-light border border-transparent hover:bg-accent-hover',
  custom: 'border border-transparent',
  outline:
    'border border-border-400 bg-transparent text-body hover:text-light hover:bg-accent hover:border-accent',
  loading:
    'h-4 w-4 ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin',
  disabled:
    'border border-border-base bg-gray-300 border-border-400 text-body cursor-not-allowed',
  disabledOutline: 'border border-border-base text-muted cursor-not-allowed',
  small: 'px-3 py-0 h-9 text-sm h-10',
  medium: 'px-5 py-0 h-12',
  big: 'px-10 py-0 h-14',
};

const classesName = computed(() => {
    return [
        classes.root,
        !disabled && variant === 'normal' ? classes.normal : '',
        disabled && variant === 'normal' ? classes.disabled : '',
        !disabled && variant === 'outline' ? classes.outline : '',
        disabled && variant === 'outline' ? classes.disabledOutline : '',
        size === 'small' ? classes.small : '',
        size === 'medium' ? classes.medium : '',
        size === 'big' ? classes.big : '',
        className
    ];
});

</script>
