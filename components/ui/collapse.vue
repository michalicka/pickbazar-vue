<template>
  <div id="accordion-collapse" :data-accordion="accordion ? 'collapse' : 'open'" class="rc-collapse" role="tablist">
    <div class="rc-collapse-item mb-4">
      <slot />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  accordion: {
    type: Boolean,
    default: false
  },
  defaultActiveKey: {
    type: String,
    default: ''
  },
  expandIcon: {
    type: Function,
    default: null
  }
})

</script>
