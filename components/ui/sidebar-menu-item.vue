<template>
  <li
    @click="onClick"
    class="py-1 rounded-md"
  >
    <button
      :class="[ 'flex items-center w-full py-2 text-start outline-none text-body-dark font-semibold  focus:outline-none focus:ring-0 focus:text-accent', isOpen ? 'text-accent' : 'text-body-dark', className ? className : 'text-sm' ]"
    >
      <span v-if="icon" class="flex w-5 h-5 me-4 items-center justify-center">
        <component :is="icon" class="max-h-full max-w-full" />
      </span>
      <span>{{ name }}</span>
      <span v-if="(items || []).length" class="ms-auto">
        <ExpandMoreIcon v-if="isOpen" class="w-3 h-3" />
        <ExpandLessIcon v-else class="w-3 h-3" />
      </span>
    </button>
  </li>
  <li v-if="isOpen">
    <ul class="ms-4 text-xs">
      <SidebarMenuItem
        v-for="(currentItem) in items || []"
        :key="`${currentItem.name}${currentItem.slug}`"
        :item="currentItem"
        :depth="depth + 1"
        class-name="text-sm text-body ms-5"
      />
    </ul>
  </li>
</template>

<script setup>
import { useUIStore } from '@/stores/ui';
import ExpandLessIcon from "@components/icons/expand-less-icon";
import ExpandMoreIcon from "@components/icons/expand-more-icon";

const props = defineProps({
  className: {
    type: String,
    default: () => ''
  },
  item: {
    type: Object,
    required: true,
    default: () => { }
  },
  depth: {
    type: Number,
    default: 0
  }
});

const ui = useUIStore();
const { $eventBus } = useNuxtApp();
const route = useRoute();
const router = useRouter();

const isOpen = ref(false);
const active = route.params.category || 'grocery'; //TODO
const isActive =
  active === props.item.slug ||
  (props.item.children || []).some((_item) => _item.slug === active);

const { slug, name, children: items, icon } = props.item;

function toggleCollapse() {
  isOpen.value = !isOpen.value;
}
  
const closeSidebar = () => { 
    $eventBus.emit('sidebar:close');
};

const onClick = () => {
  const navigate = () =>
    router.push({
      path: route.path,
      query: { ...route.query, category: slug },
    });
  
  if (Array.isArray(items) && !!items.length) {
    toggleCollapse();
    navigate();
  } else {
    navigate();
    if (ui.displaySidebar) {
      closeSidebar();
    }
  }
}

</script>
