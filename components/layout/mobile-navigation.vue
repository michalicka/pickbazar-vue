<template>
    <div class="visible lg:hidden h-12 md:h-14">
      <nav class="h-12 md:h-14 w-full py-1.5 px-2 flex justify-between fixed start-0 bottom-0 z-10 bg-light shadow-400">
        <button
          @click="() => handleSidebar('MAIN_MENU_VIEW')"
          class="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-burger-menu') }}</span>
          <NavbarIcon />
        </button>

        <button
            v-if="search === true"
            @click="ui.toggleMobileSearch"
          class="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-search') }}</span>
          <SearchIcon width="17.05" height="18" />
        </button>

        <button
          @click="() => router.push('/')"
          class="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-home') }}</span>
          <HomeIcon />
        </button>

        <button
          @click="() => handleSidebar('CART_VIEW')"
          class="flex p-2 product-cart h-full relative items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-cart') }}</span>
          <ShoppingBagIcon />
          <span v-if="cart.totalUniqueItems > 0" class="bg-accent py-1 px-1.5 text-10px leading-none font-semibold text-light rounded-full absolute top-0 end-0 mt-0.5 -me-0.5">
            {{ cart.totalUniqueItems }}
          </span>
        </button>

        <button
          v-if="ui.isAuthorize"
          @click="() => handleSidebar('AUTH_MENU_VIEW')"
          class="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-user') }}</span>
          <UserIcon />
        </button>
        <button
          v-else
          @click="handleAuthModal"
          class="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent"
        >
          <span class="sr-only">{{ $t('text-user') }}</span>
          <UserIcon />
        </button>
      </nav>
    </div>
</template>

<script setup>
import { useUIStore } from '@/stores/ui';
import { useCartStore } from '@/stores/cart';
import NavbarIcon from "@components/icons/navbar-icon";
import SearchIcon from "@components/icons/search-icon";
import HomeIcon from "@components/icons/home-icon";
import ShoppingBagIcon from "@components/icons/shopping-bag-icon";
import UserIcon from "@components/icons/user-icon";

const props = defineProps({
    search: {
        type: Boolean,
        default: true
    }
});

const router = useRouter();
const ui = useUIStore();
const cart = useCartStore();
const { $eventBus } = useNuxtApp();

const handleSidebar = (view) => {
    $eventBus.emit('sidebar:open', view);
}

const openModal = (view) => {
    $eventBus.emit('modal:open', view);
}

const handleAuthModal = () => {
    openModal('LOGIN_VIEW');
}

</script>
