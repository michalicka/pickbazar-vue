<template>
  <div class="min-h-screen flex flex-col transition-colors duration-150 bg-gray-100">
    <Navbar />
    <div class="flex-grow">
      <NuxtPage />
    </div>
    <MobileNavigation :search="false" />
  </div>
</template>

<script setup>
import Navbar from "@components/layout/navbar/navbar";
import MobileNavigation from "@components/layout/mobile-navigation";

const name = 'DefaultLayout';
</script>
