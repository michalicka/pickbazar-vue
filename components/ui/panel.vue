<template>
  <div>
    <div 
      :id="`accordion-collapse-heading-${key}`" 
      :data-accordion-target="`#accordion-collapse-body-${key}`" 
      :class="[ 'rc-collapse-header', headerClassName ]" 
      role="tab" 
      tabindex="0" 
      aria-expanded="true"
      :aria-controls="`accordion-collapse-body-${key}`"
    >
      <slot name="header"></slot>
    </div>
    <div 
      :id="`accordion-collapse-body-${key}`" 
      :aria-labelledby="`accordion-collapse-heading-${key}`" 
      class="rc-collapse-content rc-collapse-content-active" 
      role="tabpanel">
      <div class="rc-collapse-content-box">
        <slot></slot>
      </div>
    </div>
 </div>
</template>

<script setup>

const props = defineProps({
  key: {
    type: [String, Number],
    default: () => Date.now()
  },
  headerClassName: {
    type: String,
    default: ''
  }
})

</script>
