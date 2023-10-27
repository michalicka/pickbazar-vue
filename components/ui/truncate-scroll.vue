<template>
    <span>
      {{ value && value.length < character ? value : _truncate(value, { length: character }) }}
        <button
          v-if="!hideButton && value.length > character"
          class="ms-1 text-sm font-semibold text-accent hover:text-accent-hover outline-none focus:outline-none"
          @click="onClick"
        >
          {{ buttonText ? buttonText : $t('see-more') }}
        </button>
    </span>
</template>

<script setup>

const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    character: {
        type: Number,
        default: 150
    },
    buttonText: {
        type: String,
        default: ''
    },
    hideButton: {
        type: Boolean,
        default: false
    },
})

</script>
