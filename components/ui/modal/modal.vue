<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="modalClose" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="min-h-full md:p-5 text-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-50 w-full h-full" />
          </TransitionChild>

          <span
            class="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="inline-block min-w-content max-w-full overflow-hidden text-start align-middle transition-all  md:rounded-xl relative"
            >
              <button
                @click="modalClose"
                aria-label="Close panel"
                ref="cancelButtonRef"
                class="inline-block md:hidden outline-none focus:outline-none absolute end-4 top-4 z-[60] w-4 h-4"
              >
                <span class="sr-only">{{ $t("text-close") }}</span>
                <CloseIcon class="w-4 h-4" />
              </button>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay, DialogTitle } from '@headlessui/vue'
import CloseIcon from '@components/icons/close-icon'

const name='Modal';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const { $eventBus } = useNuxtApp();

const { open } = toRefs(props);

const modalClose = () => {
  $eventBus.emit('modal:close');
}
</script>
