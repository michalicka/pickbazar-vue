<template>
    <span
      :class="[ classes.root, colorOverride ? colorOverride : classes.default, textColorOverride ? textColorOverride : classes.text ]"
      :style="style"
    >
      {{ text }}
    </span>
</template>

<script setup>

const props = defineProps({
    color: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    style: {
        type: Object,
        default: () => { }
    }
});

const colorOverride = props.color;
const textColorOverride = props.textColor;

const classes = {
    root: "px-3 py-1 rounded-full text-sm",
    default: "bg-accent",
    text: "text-light",
};
</script>
