<template>
  <OverlayScrollbarsComponent 
    defer
    :options="{
      className: ['os-theme-thin-dark', className],
      scrollbars: {
        autoHide: 'scroll',
      },
      ...options,
    }"
    :style="style"
  >
    <slot />
  </OverlayScrollbarsComponent>
</template>

<script setup>
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import 'overlayscrollbars/overlayscrollbars.css';

const name = 'Scrollbar';

const props = defineProps({
  options: {
    type: Object,
    default: () => { }
  },
  style: {
    type: Object,
    default: () => { }
  },
  className: {
    type: String,
    default: ''
  }
});
</script>
