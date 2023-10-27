<template>
    <div v-if="!loading && !data.pages[0].data.length" class="bg-gray-100 pt-6 pb-8 px-4 lg:p-8">
        <NotFound text="text-not-found" class="w-7/12 mx-auto" />
    </div>
    <div v-else class="bg-gray-100 pt-6 pb-8 lg:py-8">
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3">
        <ProductFeedLoader v-if="loading && !data.pages.length" :limit="20" />
        <RenderProductCard 
            v-else 
            v-for="product in _flatMap(data.pages, (page) => page.data)" 
            :key="product.id"
            :product="product" 
        />
      </div>
      <div v-if="hasNextPage" class="flex justify-center mt-8 lg:mt-12">
        <Button
          :loading="loadingMore"
          :on-click="handleLoadMore"
          class="text-sm md:text-base font-semibold h-11"
        >
          {{ $t('text-load-more') }}
        </Button>
      </div>
    </div>
</template>

<script setup>
import { products } from "@data/products"; //TODO
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import RenderProductCard from "@components/product/render-product-card";
import Button from "@components/ui/button";
import NotFound from "@components/common/not-found";

const loading = ref(false);
const hasNextPage = ref(true);
const loadingMore = ref(false);

const route = useRoute();

const data = {
    pages: [
        products[ route.params.slug.split('-')[0] || 'grocery' ] //TODO
    ]
}

const handleLoadMore = () => {
    console.log('TODO.feed-shop.handleLoadMore');
}

</script>
