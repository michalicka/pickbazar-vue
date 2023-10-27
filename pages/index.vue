<template>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { siteSettings } from "@settings/site.settings";

const router = useRouter();

import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  router.push(`/${siteSettings.defaultLanguage}${siteSettings.logo.href}`);
});
</script>
