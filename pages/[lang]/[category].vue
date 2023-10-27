<template>
  <div>
    <Banner :banner="getPageData.banner" class="min-h-screen" />
    <PromotionSlider />
    <FilterBar />
    <div name="grid" class="flex flex-1 border-t border-solid border-border-200 border-opacity-70">
      <CategoryDropdownSidebar />
      <main class="flex-1">
        <Feed />
      </main>
    </div>
    <CartCounterButton />
  </div>
</template>

<script setup>
import { getKeyValue } from "@utils/get-key-value";
import { sitePages } from "@settings/site-pages.settings";
import Banner from "@components/common/banner";
import PromotionSlider from "@components/common/promotion-slider";
import FilterBar from "@components/common/filter-bar";
import CategoryDropdownSidebar from "@components/category/category-dropdown-sidebar";
import Feed from "@components/product/feed";
import CartCounterButton from "@components/cart/cart-counter-button";

definePageMeta({ 
  layout: 'home-layout',
  validate: async (route) => {
    return /^[a-z]{2}$/.test(route.params.lang);
  }
});

const name = 'CategoryPage';

const route = useRoute();

const PAGE_TYPE = route.params.category;
const getPageData = getKeyValue(sitePages, PAGE_TYPE);

</script>
