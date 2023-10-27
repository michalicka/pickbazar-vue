<template>
  <div>
    <Swiper
      id="productGallery"
      :modules="[Thumbs]"
      :thumbs="{ swiper: thumbsSwiper }"
      :space-between="0"
      :slides-per-view="1"
    >
      <SwiperSlide
        v-for="item in gallery" 
        :key="`product-gallery-${item.id}`"
        class="flex items-center justify-center"
      >
        <Image
          :src="item.original || '/product-placeholder.svg'"
          :alt="`Product gallery ${item.id}`"
          :width="450"
          :height="450"
        />
      </SwiperSlide>
    </Swiper>

    <div class="max-w-md mt-5 lg:mt-8 mx-auto relative lg:pb-2">
      <Swiper
        id="productGalleryThumbs"
        @swiper="setThumbsSwiper"
        :modules="[SwiperNavigation]"
        :spaceBetween="20"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        :breakpoints="galleryCarouselBreakpoints"
        :navigation="{ prevEl: '.product-gallery-prev', nextEl: '.product-gallery-next' }"
      >
        <SwiperSlide
          v-for="item in gallery" 
          :key="`product-thumb-gallery-${item.id}`"
          class="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75"
        >
          <Image
            :src="item.thumbnail || '/product-placeholder.svg'"
            :alt="`Product thumb gallery ${item.id}`"
            :width="80"
            :height="80"
          />
        </SwiperSlide>
      </Swiper>
      <div class="product-gallery-prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100">
        <ChevronLeft class="w-4 h-4" />
      </div>
      <div class="product-gallery-next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100">
        <ChevronRight class="w-4 h-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Thumbs } from 'swiper/modules';
import Image from "@components/ui/image";
import ChevronLeft from "@components/icons/chevron-left";
import ChevronRight from "@components/icons/chevron-right";

const props = defineProps({
  gallery: {
    type: Array,
    default: () => []
  }
});

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 4,
  },
};

</script>
