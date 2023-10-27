<template>
  <div class="px-6 py-5 md:px-8 xl:px-12 md:py-10 border-t border-border-200">
    <div class="relative">
      <Swiper
        id="offer"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :breakpoints="offerSliderBreakpoints"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: true }"
        :navigation="{ nextEl: '.next', prevEl: '.prev' }"
      >
        <SwiperSlide v-for="item in data" :key="item.id">
          <img class="w-full h-auto" :src="item.bannerUrl" :alt="$t(item.title)" width="430" height="200">
        </SwiperSlide>
      </Swiper>
      <div class="prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent" role="button">
        <span class="sr-only">Previous</span>
        <ArrowPrevIcon />
      </div>
      <div class="next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-accent hover:text-light hover:border-accent" role="button">
        <span class="sr-only">Next</span>
        <ArrowNextIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowPrevIcon from "@components/icons/arrow-prev";
import ArrowNextIcon from "@components/icons/arrow-next";

const name = 'PromotionSlider';
const data = [
  {
    id: 1,
    title: "banner:promotion-slide-one",
    bannerUrl: "/promotion/offer-1.png",
  },
  {
    id: 2,
    title: "banner:promotion-slide-two",
    bannerUrl: "/promotion/offer-2.png",
  },
  {
    id: 3,
    title: "banner:promotion-slide-three",
    bannerUrl: "/promotion/offer-3.png",
  },
  {
    id: 4,
    title: "banner:promotion-slide-four",
    bannerUrl: "/promotion/offer-4.png",
  },
  {
    id: 5,
    title: "banner:promotion-slide-five",
    bannerUrl: "/promotion/offer-5.png",
  },
];

const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};
</script>
