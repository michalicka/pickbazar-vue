<template>
    <SidebarWrapper>
      <ul class="flex-grow">
        <li v-if="ui.isAuthorize" key="track-orders">
          <span
            @click="() => handleClick(ROUTES.ORDERS)"
            class="flex items-center py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent"
          >
            {{ $t('nav-menu-track-order') }}
          </span>
        </li>
        <li v-for="{ href, label, icon } in siteSettings.headerLinks" :key="`${href}${label}`">
          <span
            @click="() => handleClick(href)"
            class="flex items-center py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent"
          >
            <span v-if="icon" class="me-2">{{ icon }}</span>
            {{ $t(label) }}
          </span>
        </li>
      </ul>
    </SidebarWrapper>
</template>

<script setup>
import { ROUTES } from "@utils/routes";
import { useUIStore } from '@/stores/ui';
import { siteSettings } from "@settings/site.settings";
import SidebarWrapper from "@components/common/sidebar/sidebar-wrapper";

const ui = useUIStore();
const router = useRouter();
const { $eventBus } = useNuxtApp();

const closeSidebar = () => {
    $eventBus.emit('sidebar:close');
}

const handleClick = (path) => {
    router.push(path);
    closeSidebar();
}
</script>
