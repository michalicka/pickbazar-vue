<template>
    <Uploader v-model="files" :name="name" :on-change="onChange" />
</template>

<script setup>
import Uploader from "@components/common/uploader";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Array,
        default: []
    },
    onChange: {
        type: Function,
        default: null
    },
    name: {
        type: String,
        default: ''
    }
});

const files = ref(props.modelValue);

</script>
