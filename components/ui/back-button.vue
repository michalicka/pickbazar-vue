<template>
    <button
      class="inline-flex items-center justify-center text-accent font-semibold transition-colors hover:text-accent-hover focus:text-accent-hover focus:outline-none"
      @click="router.back"
    >
      <ArrowNarrowLeft
        class="{ 'w-5 h-5 me-2': true, 'transform rotate-180': router.locale === 'ar' || router.locale === 'he' }"
        :stroke-width="1.7"
      />
      {{ $t('text-back') }}
    </button>
</template>

<script setup>
import ArrowNarrowLeft from "@components/icons/arrow-narrow-left";

const router = useRouter();
</script>
