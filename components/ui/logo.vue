<template>
  <Link
    :href="`/${siteSettings.defaultLanguage}${siteSettings.logo.href}`"
    class="inline-flex"
  >
    <span
      class="overflow-hidden relative flex items-center"
      :style="{ width: siteSettings.logo.width, height: siteSettings.logo.height }"
    >
      <Image
        :src="logo.original || siteSettings.logo.url"
        :alt="siteTitle || siteSettings.logo.alt"
        layout="fill"
        objectFit="contain"
        loading="eager"
      />
    </span>
  </Link>
</template>

<script setup>
import { siteSettings } from "@settings/site.settings";
import { settings } from "@data/settings";
import Image from "@components/ui/image";
import Link from "@components/ui/link/link";

const { logo, siteTitle } = settings.options;

</script>

