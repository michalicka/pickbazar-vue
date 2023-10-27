<template>
  <aside class="sticky top-22 h-full lg:w-72 hidden xl:block bg-light">
    <div class="max-h-full overflow-hidden">
      <Scrollbar class="w-full h-full max-h-screen">
        <div class="px-5">
          <SidebarMenu :items="data.categories.data" class="py-8" />
        </div>
      </Scrollbar>
    </div>
  </aside>
</template>

<script setup>
import { categories } from "@data/categories";
import Scrollbar from "@components/ui/scrollbar";
import SidebarMenu from "@components/ui/sidebar-menu";
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

const name = 'CategoryDropdownSidebar';

const route = useRoute();

const data = {
    categories: categories[ route.params.category.split('-')[0] || 'grocery' ] //TODO
}

</script>
