<template>
    <div :class="['flex flex-col items-center', className]">
      <div class="w-full h-full flex items-center justify-center">
        <img
          src="/no-result.svg"
          :alt="text ? $t(text) : $t('text-no-result-found')"
          class="w-full h-full object-contain"
        />
      </div>
      <h3 v-if="text" class="w-full text-center text-xl font-semibold text-body my-7">
        {{ $t(text) }}
      </h3>
    </div>
</template>

<script setup>
const name = 'NotFound';

const props = defineProps({
    className: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
});

</script>
