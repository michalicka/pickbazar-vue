<template>
    <NuxtLink :to="href" :class="className">
      <slot />
    </NuxtLink>
</template>

<script setup>
import { computed } from 'vue';

const name = "NavLink";

const route = useRoute();

const props = defineProps({
    activeClass: {
        type: String,
        default: ''
    },
    href: {
        type: String,
        required: true
    }
});

const className = computed(() => {
    return route.path === props.href
      ? props.activeClass
      : '';
});

</script>
