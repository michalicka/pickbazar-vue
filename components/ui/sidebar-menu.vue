<template>
  <ul class="text-xs">
    <SidebarMenuItem v-for="item in items" :key="item.id" :item="item">
      <component :is="item.icon" class="max-h-full max-w-full" />
    </SidebarMenuItem>
  </ul>
</template>

<script setup>
import SidebarMenuItem from "@components/ui/sidebar-menu-item";

const name = 'SidebarMenu';

const props = defineProps({
    items: {
        type: Array,
        default: []
    }
});

</script>
