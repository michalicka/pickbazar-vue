<template>
    <SidebarWrapper>
      <ul class="flex-grow">
        <li v-for="({href, label}) in siteSettings.authorizedLinks" :key="`${href}${label}`">
          <span
            class="block py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent"
            @click="() => handleClick(href)"
          >
            {{ $t(label) }}
          </span>
        </li>
      </ul>
    </SidebarWrapper>
</template>

<script setup>
import { siteSettings } from "@settings/site.settings";
import SidebarWrapper from "@components/common/sidebar/sidebar-wrapper";

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
