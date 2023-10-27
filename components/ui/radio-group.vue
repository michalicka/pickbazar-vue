<template>
    <div :class="classes" @click="onClick">
        <span v-if="className === 'color'"
          class="w-full h-full rounded-full border border-border-200"
          :style="{ backgroundColor: color }"
        />
        <span v-else>
            {{ label }}
        </span>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: () => { }
  },
  active: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
});

const classes = computed(() => {
    return {
        "px-4 py-3 text-sm border rounded text-heading bg-gray-50 border-border-200": props.className !== "color",
        "!text-light !bg-accent !border-accent": props.active && props.className !== "color",
        "h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent": props.className === "color",
        "!border-accent": props.active && props.className === "color",
        "cursor-pointer": true
    };
});

</script>
