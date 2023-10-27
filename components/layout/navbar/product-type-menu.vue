<template>
  <div :class="className">
    <Popover class="relative">
      <PopoverButton>
        <button type="button" :class="['flex items-center flex-shrink-0 bg-light text-sm md:text-base font-semibold h-10 focus:outline-none', btnClassName]" aria-label="toggle profile dropdown">
          <span class="flex w-5 h-5 me-2 items-center justify-center">
            <component :is="selectedMenu().icon" class="max-h-full max-w-full" />        
          </span>
          {{ selectedMenu().name }}
          <span class="flex ps-2.5 pt-1 ms-auto">
            <CaretDown />
          </span>
        </button>
      </PopoverButton>
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel class="absolute right-0 mt-2 py-2 w-48 min-h-40 sm:max-h-72 bg-light rounded shadow-700 z-20">
          <Scrollbar class-name="w-full h-full" :options="{ scrollbars: { autoHide: 'never' } }">
            <div v-for="{id, name, slug, icon} in data.types" :key="id">
              <button
                @click="handleClick(`/${slug}`)"
                class="flex space-s-4 w-full items-center px-5 py-2.5 text-sm font-semibold capitalize text-body-dark transition duration-200 hover:text-accent focus:outline-none"
              >
                <span v-if="icon" class="flex w-5 h-5 items-center justify-center">
                  <component :is="icon" class="max-h-full max-w-full" />
                </span>
                <span>{{ name }}</span>
              </button>
            </div>
          </Scrollbar>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>

<script setup>
import { types } from "@data/types";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import CaretDown from "@components/icons/caret-down";
import Scrollbar from "@components/ui/scrollbar";

const props = defineProps({
  className: {
      type: String,
      default: ''
  },
  btnClassName: {
    type: String,
    default: 'border border-border-200 text-accent rounded min-w-150 px-4'
  }
});

const route = useRoute();
const router = useRouter();

const handleClick = (slug) => {
  router.push('/en' + slug);
  console.log('TODO.product-type-menu.handleClick');
}

const data = {
  types: types
};

const selectedMenu = () => _find(data.types, { slug: route.params.category }) || _first(data.types);

</script>
