<template>
    <div class="sticky top-14 md:top-16 lg:top-22 h-14 md:h-16 z-10 flex xl:hidden items-center justify-between py-3 px-5 lg:px-7 bg-light border-t border-b border-border-200">
      <button class="flex items-center h-8 md:h-10 py-1 md:py-1.5 px-3 md:px-4 text-sm md:text-base bg-gray-100 bg-opacity/90 rounded border border-border-200 font-semibold text-heading transition-colors duration-200 focus:outline-none hover:border-accent-hover focus:border-accent-hover hover:bg-accent focus:bg-accent hover:text-light focus:text-light" @click="handleSidebar">
        <FilterIcon width="18" height="14" class="mr-2" />
        {{ $t("text-filter") }}
      </button>
      <ProductTypeMenu btn-class-name="text-heading transition-colors duration-200 hover:text-accent focus:text-accent" />
    </div>
</template>

<script setup>
import FilterIcon from "@components/icons/filter-icon";
import ProductTypeMenu from "@components/layout/navbar/product-type-menu";

const name= 'FilterBar';

const { $eventBus } = useNuxtApp();

const handleSidebar = () => {
  $eventBus.emit('sidebar:open', 'FILTER_VIEW');
}
</script>
