<template>
    <Sidebar
      :open="ui.displaySidebar"
      @close="closeSidebar"
      :variant="
        ui.sidebarView === 'FILTER_VIEW' ||
        ui.sidebarView === 'MAIN_MENU_VIEW' ||
        ui.sidebarView === 'FILTER_LAYOUT_TWO_VIEW'
          ? 'left'
          : 'right'
      "
    >
      <CartSidebarView v-if="ui.sidebarView === 'CART_VIEW'" />
      <MobileCategoryMenu v-if="ui.sidebarView === 'FILTER_VIEW'" />
      <MobileMainMenu v-if="ui.sidebarView === 'MAIN_MENU_VIEW'" />
      <MobileAuthorizedMenu v-if="ui.sidebarView === 'AUTH_MENU_VIEW'" />
    </Sidebar>
</template>

<script setup>
import { useUIStore } from '@/stores/ui';
import Sidebar from "@components/common/sidebar/sidebar";
import CartSidebarView from "@components/cart/cart-sidebar-view";
import MobileCategoryMenu from "@components/layout/mobile-menu/mobile-category-menu";
import MobileMainMenu from "@components/layout/mobile-menu/mobile-main-menu";
import MobileAuthorizedMenu from "@components/layout/mobile-menu/mobile-authorized-menu";

const name = 'SidebarContainer';

const ui = useUIStore();
const { $eventBus } = useNuxtApp();

const closeSidebar = () => { 
    $eventBus.emit('sidebar:close');
};

$eventBus.on('sidebar:open', (view) => {
  console.log('sidebar:open', view);
  ui.setSidebarView(view);
  ui.setDisplaySidebar(true);
});

$eventBus.on('sidebar:close', () => {
  console.log('sidebar:close');
  ui.setDisplaySidebar(false);
  ui.setSidebarView('');
});

</script>
