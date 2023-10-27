<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ManagedModal />
    <SidebarContainer />
  </div>
</template>

<script setup>
import ManagedModal from "@components/ui/modal/managed-modal";
import SidebarContainer from "@components/common/sidebar/sidebar-container";

const name = 'App';
</script>
