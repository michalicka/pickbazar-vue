<template>
    <div :class="[ className ]">
        <div class="flex items-center">
          <input
            :id="id"
            :name="name"
            :value="id"
            type="radio"
            :checked="id === modelValue"
            :class="styles.radio_input"
            v-bind="$attrs"
            @click="handleClick($event)"
          />

          <label :htmlFor="id" class="text-body text-sm">
            {{ label }}
          </label>
        </div>

        <p v-if="error" class="my-2 text-xs text-end text-red-500">
            {{ error }}
        </p>
    </div>
</template>

<script setup>
import styles from "./radio.module.css";

defineOptions({
  inheritAttrs: false
});

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
    label: {
        type: String,
        default: ''
    }, 
    name: {
        type: String,
        default: ''
    }, 
    id: {
        type: String,
        default: ''
    }, 
    error: {
        type: String,
        default: ''
    }
});

const handleClick = (e) => {
    emit('update:modelValue', e.target.value);
}

</script>
