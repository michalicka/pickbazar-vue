<template>
  <div class="bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3">
      <div v-for="product in data.data" :key="`product_${product.id}`">
        <Xenon v-if="route.params.category === 'clothing'" :product="product" />
        <Neon v-else :product="product" />
      </div>
    </div>
    <div v-if="hasNextPage" class="flex justify-center mt-8 lg:mt-12">
      <Button
          :loading="loadingMore"
          @click="handleLoadMore"
          class-name="text-sm md:text-base font-semibold h-11"
      >
          {{ $t("text-load-more") }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { products } from "@data/products"; //TODO
import Neon from "@components/product/product-card/neon";
import Xenon from "@components/product/product-card/xenon";
import Button from "@components/ui/button";

const hasNextPage = ref(true);
const loadingMore = ref(false);

const handleLoadMore = () => {
  console.log('TODO.feed.handleLoadMore');
}

const route = useRoute();
const category = ref(route.query.category || null);

const data = computed(() => category.value
    ? { data: _filter(products[ route.params.category || 'grocery' ].data, (item) => _some(item.categories, { slug: category.value })) }
    : products[ route.params.category || 'grocery' ]
);

watch(() => route.query.category, value => {
  category.value = value || null
});

</script>
