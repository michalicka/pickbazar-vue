<template>
    <div class="w-full mt-4 md:mt-6 pt-4 md:pt-6 flex flex-row items-start border-t border-border-200 border-opacity-60">
      <span class="text-sm font-semibold text-heading capitalize me-6 py-1">
        {{ $t('text-categories') }}
      </span>
      <div class="flex flex-row flex-wrap">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="handleClick(`${basePath}?category=${category.slug}`)"
            class="lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded me-2 mb-2 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:bg-opacity-100"
          >
            {{ category.name }}
          </button>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  },
  onClose: {
    type: Function,
    default: () => { }
  },
  basePath: {
    type: String,
    default: ''
  }
});

const router = useRouter();

const handleClick = (path) => {
    router.push(path);
    if (props.onClose) {
      props.onClose();
    }
}
</script>
