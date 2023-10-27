<template>
    <Teleport to="body">
        <div v-if="open" class="fixed inset-0 overflow-hidden z-50">
          <div class="absolute inset-0 overflow-hidden">
            <div 
              :class="{ 'absolute inset-0 bg-dark bg-opacity-40': true, 'use-blur-backdrop': useBlurBackdrop }"
              @click="onClose"
            />
            <div
              :class="[ 'absolute inset-y-0 max-w-full flex outline-none', variant === 'right' ? 'end-0' : 'start-0' ]"
            >
              <div class="h-full w-screen max-w-md">
                <div class="h-full flex flex-col text-body bg-light shadow-xl">
                  <Scrollbar class="w-full h-full">
                      <slot />
                  </Scrollbar>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Teleport>
</template>

<script setup>
import Scrollbar from "@components/ui/scrollbar";

const props = defineProps({
  open: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'left' // "left" | "right"
  },
  useBlurBackdrop: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function,
    default: () => { console.log('TODO.sidebar.onClose') }
  }
});

</script>
