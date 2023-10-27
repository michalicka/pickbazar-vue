<template>
    <div>
        <div v-if="simple" :class="[ styles.simple_loading ]" />
        <div
          v-else
          class="w-full flex flex-col items-center justify-center"
          :style="{ height: 'calc(100vh - 200px)' }"
        >
          <div class="[ styles.loading ]" />
          
          <h3 v-if="showText" class="text-lg font-semibold text-body italic">
            {{ text }}
          </h3>
        </div>
    </div>
</template>

<script setup>
import styles from "./spinner.module.css";

const props = defineProps({
    text: {
        type: String,
        default: 'loading'
    },
    showText: {
        type: Boolean,
        default: true
    },
    simple: {
        type: Boolean,
        default: false
    }
});

</script>
