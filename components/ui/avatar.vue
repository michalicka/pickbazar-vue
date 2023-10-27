<template>
    <div
      class="relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100"
    >
      <Image :alt="title" :src="src" layout="fill" :priority="true" />
    </div>
</template>

<script setup>
import Image from "@components/ui/image";

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
});

</script>
