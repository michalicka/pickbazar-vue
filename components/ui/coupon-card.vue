<template>
    <div class="coupon-card">
      <div class="flex rounded overflow-hidden bg-gray-200">
        <Image
          :src="image.thumbnail || '/coupon-placeholder.svg'"
          :alt="code"
          :width="572"
          :height="429"
        />
      </div>
      <div class="w-11/12 grid grid-flow-col auto-cols-fr items-center py-4 px-5 mx-auto rounded-bl rounded-be shadow-sm bg-light">
          <template v-if="is_valid">
            <input
              readOnly
              :value="code"
              class="text-heading font-semibold uppercase focus:outline-none"
            />
            <button 
              v-if="!copied"
              @click="handleCopy"
              class="text-end text-accent text-sm font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover"
            >
              <span>{{ $t('text-copy') }}</span>
            </button>
            <div v-else class="text-end text-accent text-sm font-semibold">
              {{ $t('text-copied') }}
            </div>
          </template>
          <span v-else class="text-sm text-center block text-red-500">
            {{ $t('text-expired') }}
          </span>
      </div>
    </div>
</template>

<script setup>
import { copyText } from 'vue3-clipboard';
import Image from "@components/ui/image";

const props = defineProps({
    coupon: {
        type: Object,
        default: () => { }
    }
})

const { code, image, is_valid } = props.coupon;
const copied = ref(false);

const handleCopy = () => {
    copyText(code, undefined, (error, event) => {
        if (error) {
            console.log(error);
        } else {
            copied.value = true;
        }
    });
}

</script>
