<template>
  <div class="flex flex-col min-h-screen transition-colors duration-150">
    <NavbarWithSearch />
    <slot />
    <MobileNavigation />
  </div>
</template>

<script setup>
import NavbarWithSearch from "@components/layout/navbar/navbar-with-search";
import MobileNavigation from "@components/layout/mobile-navigation";

const name = 'HomeLayout';

</script>
