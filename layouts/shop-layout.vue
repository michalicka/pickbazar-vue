<template>
  <div class="flex flex-col transition-colors duration-150">
    <NavbarWithTypes />
    <div>
      <slot />
    </div>
    <MobileNavigation />
  </div>
</template>

<script setup>
import NavbarWithTypes from "@components/layout/navbar/navbar-with-types";
import MobileNavigation from "@components/layout/mobile-navigation";
</script>
