<template>
    <div class="p-4 pb-6 bg-light m-auto">
      <div class="w-full h-full text-center">
        <div class="flex h-full flex-col justify-between">
          <component v-if="icon" :is="icon" />
          <TrashIcon v-else class="mt-4 w-12 h-12 m-auto text-accent" />
          <p class="text-heading text-xl font-bold mt-4">{{ $t(title) }}</p>
          <p class="text-body-dark dark:text-muted leading-relaxed py-2 px-6">
            {{ $t(description) }}
          </p>
          <div class="flex items-center justify-between space-s-4 w-full mt-8">
            <div class="w-1/2">
              <Button
                :on-click="onCancel"
                :loading="cancelBtnLoading"
                :disabled="cancelBtnLoading"
                variant="custom"
                :class="[ 'w-full py-2 px-4 bg-accent focus:outline-none hover:bg-accent-hover focus:bg-accent-hover text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', cancelBtnClassName ]"
              >
                {{ $t(cancelBtnText) }}
              </Button>
            </div>

            <div class="w-1/2">
              <Button
                :on-click="onDelete"
                :loading="deleteBtnLoading"
                :disabled="deleteBtnLoading"
                variant="custom"
                :class="[ 'w-full py-2 px-4 bg-red-600 focus:outline-none hover:bg-red-700 focus:bg-red-700 text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', deleteBtnClassName ]"
              >
                {{ $t(deleteBtnText) }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import TrashIcon from '@components/icons/trash';
import Button from "@components/ui/button";

const props = defineProps({
    onCancel: {
        type: Function,
        default: () => { }
    },
    onDelete: {
        type: Function,
        default: () => { }
    },
    icon: {
        type: Object,
        default: null
    },
    title: {
        type: String,
        default: 'text-delete'
    },
    description: {
        type: String,
        default: 'delete-item-confirm'
    },
    cancelBtnText: {
        type: String,
        default: 'button-cancel'
    },
    deleteBtnText: {
        type: String,
        default: 'button-delete'
    },
    cancelBtnClassName: {
        type: String,
        default: ''
    },
    deleteBtnClassName: {
        type: String,
        default: ''
    },
    cancelBtnLoading: {
        type: Boolean,
        default: false
    },
    deleteBtnLoading: {
        type: Boolean,
        default: false
    }
});

</script>
