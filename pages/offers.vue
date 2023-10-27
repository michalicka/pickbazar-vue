<template>
    <ErrorMessage v-if="error" :message="error.message" />
    <div 
        v-else-if="!loading && !data.pages.length" 
        class="bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8"
    >
      <NotFound text="text-no-coupon" class="h-96" />
    </div>
    <div v-else>
      <div class="max-w-1920 w-full mx-auto py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-8">
            <CouponFeedLoader 
                v-if="loading" 
                :limit="20" 
            />
            <CouponCard 
                v-else 
                v-for="item in _flatMap(data.pages, (page) => page.data)" 
                :key="item.id" 
                :coupon="item" 
            />
        </div>
        <div v-if="hasNextPage" class="flex items-center justify-center mt-8 lg:mt-12">
          <Button :on-click="handleLoadMore" :loading="loadingMore">
            {{ $t('text-load-more') }}
          </Button>
        </div>
      </div>
      <CartCounterButton />
    </div>
</template>

<script setup>
import { coupons } from "@data/coupons";
import Button from "@components/ui/button";
import CouponCard from "@components/ui/coupon-card";
import ErrorMessage from "@components/ui/error-message";
import CartCounterButton from "@components/cart/cart-counter-button";
import CouponFeedLoader from "@components/ui/loaders/coupon-feed-loader";
import NotFound from "@components/common/not-found";

const hasNextPage = ref(true);
const loadingMore = ref(false);
const loading = ref(false);
const error = ref(null);

const data = {
    pages: [
        coupons
    ]
};

const handleLoadMore = () => {
  console.log('TODO.offers.handleLoadMore');
}

</script>
