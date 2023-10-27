<template>
    <div class="min-h-screen grid place-items-center p-4 sm:p-8">
      <div class="text-center">
        <p class=" text-body-dark text-sm 2xl: uppercase tracking-widest mb-4 sm:mb-5">
          {{ $t('404-heading') }}
        </p>
        <h1 class="font-bold text-2xl leading-normal sm:text-3xl text-bolder mb-5">
          {{ $t('404-sub-heading') }}
        </h1>
        <VueJsonPretty v-if="isLocal" class="mt-10 block" :data="error" />
        <div v-else class="mb-11">
          <Image
            src="/no-result.svg"
            :alt="$t('404-heading')"
            :width="600"
            :height="453"
          />
        </div>
        <Link
          :href="`/${siteSettings.defaultLanguage}${ROUTES.HOME}`"
          class="inline-flex items-center sm:text-base text-bolder underline focus:outline-none hover:no-underline hover:text-body-dark"
        >
          {{ $t('404-back-home') }}
        </Link>
      </div>
    </div>
</template>

<script setup>
import { ROUTES } from "@utils/routes";
import { siteSettings } from "@settings/site.settings";
import Image from "@components/ui/image";
import Link from "@components/ui/link/link";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps({
  error: Object
})

const isLocal = process.env.NODE_ENV === 'development';

</script>
