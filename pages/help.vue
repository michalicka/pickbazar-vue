<template>
    <section class="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <header class="text-center mb-8">
        <h1 class="font-bold text-xl md:text-2xl xl:text-3xl">
          {{ $t('common:nav-menu-faq') }}
        </h1>
      </header>
      <div class="max-w-screen-lg w-full mx-auto">
        <Accordion :items="faq" />
      </div>
    </section>
</template>

<script setup>
import Accordion from "@components/ui/accordion";
import { faq } from "@settings/faq.settings";

</script>
