<template>
    <div class="bg-light min-h-screen ">
      <div class="w-full max-w-6xl mx-auto flex flex-col p-8 pt-32 md:pt-40">
        <div class="pt-12">
          <h3 class="text-2xl text-heading font-bold mb-8">
            {{ $t('text-all-shops') }}
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ShopCard 
                v-for="shop in _flatMap(data.pages, (page) => page.data)"
                :shop="shop"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { shops } from "@data/shops";
import ShopCard from "@components/ui/shop-card";

definePageMeta({ layout: 'shop-layout' });

const data = {
    pages: [
        shops
    ]
};

</script>
