<template>
    <div class="bg-gray-100 flex flex-col md:flex-row md:items-start md:p-8">
      <ShopProfileCard :data="data" class="sticky top-24 lg:top-28" />

      <div class="flex flex-col w-full p-4 md:p-0 md:ps-8">
        <div class="relative rounded w-full min-h-140 overflow-hidden hidden md:flex">
          <Image
            :alt="$t('heading')"
            :src="_get(data, 'cover_image.original') || '/product-placeholder.svg'"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <ShopProductFeed v-if="data" :shopId="data.id" />
      </div>
      <CartCounterButton v-if="width > 1023" />
    </div>
</template>

<script setup>
import { shops } from "@data/shops";
import { useWindowSize } from "@utils/use-window-size";
import CartCounterButton from "@components/cart/cart-counter-button";
import ShopProfileCard from "@components/profile/profile-card";
import ShopProductFeed from "@components/product/feed-shop";
import Image from "@components/ui/image";

const width = useWindowSize.width;

const route = useRoute();

const data = _find(shops.data, { slug: route.params.slug }) || shops.data.data[0]; //TODO

</script>
