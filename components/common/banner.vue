<template>
  <Waypoint class="hidden lg:block relative" @change="onWaypointPositionChange">
    <div class="min-h-140 overflow-hidden -z-1">
      <Image 
        :src="banner.image || '/banner/grocery.png'" 
        :alt="banner.heading" 
        layout="fill" 
        objectFit="cover"
      />
    </div>
    <div class="p-5 mt-8 absolute inset-0 w-full flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl xl:text-5xl tracking-tight text-heading font-bold mb-5 xl:mb-8">
        {{ $t(banner.heading) }}
      </h1>
      <p class="text-base xl:text-lg text-heading mb-10 xl:mb-14">
        {{ $t(banner.subheading) }}
      </p>
      <div class="max-w-3xl w-full">
        <Search label="search" />
      </div>
    </div>
  </Waypoint>
</template>

<script setup>
import { useUIStore } from '@/stores/ui';
import Image from "@components/ui/image";
import Search from "@components/common/search";

const props = defineProps({
  banner: {
    type: Object,
    default: () => { }
  }
});

const ui = useUIStore();

const onWaypointPositionChange = (waypointState) => {
    ui.setDisplayHeaderSearch(waypointState.going === 'OUT');
}

</script>
