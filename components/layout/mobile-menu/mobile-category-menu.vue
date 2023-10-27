<template>
    <SidebarWrapper>
      <div class="h-full max-h-full overflow-hidden">
        <Scrollbar class="w-full h-full max-h-screen">
          <SidebarMenu v-if="data.categories.data.length" :items="data.categories.data" class="py-3 px-6" />
          <div v-else class="min-h-full pt-6 pb-8 px-4 lg:p-8">
            <NotFound text="text-not-found" class="h-96" />
          </div>
        </Scrollbar>
      </div>
    </SidebarWrapper>
</template>

<script setup>
import { categories } from "@data/categories";
import SidebarWrapper from "@components/common/sidebar/sidebar-wrapper";
import FruitsVegetable from "@components/icons/category/fruits-vegetable";
import MeatFish from "@components/icons/category/meat-fish";
import Snacks from "@components/icons/category/snacks";
import PetCare from "@components/icons/category/pet-care";
import HomeCleaning from "@components/icons/category/home-cleaning";
import Dairy from "@components/icons/category/dairy";
import Cooking from "@components/icons/category/cooking";
import Breakfast from "@components/icons/category/breakfast";
import Beverage from "@components/icons/category/beverage";
import BeautyHealth from "@components/icons/category/beauty-health";
import Scrollbar from "@components/ui/scrollbar";
import SidebarMenu from "@components/ui/sidebar-menu";
import NotFound from "@components/common/not-found";

const route = useRoute();

const data = {
    categories: categories[ route.params.category.split('-')[0] || 'grocery' ] //TODO
}

</script>
