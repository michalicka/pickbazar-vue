<template>
  <header ref="navbarRef" class="site-header-with-search h-14 md:h-16 lg:h-auto">
    <nav :class="{'w-full h-14 md:h-16 lg:h-22 py-5 px-4 lg:px-8 flex justify-between items-center  top-0 end-0 z-20 transition-transform duration-300': true, 'fixed bg-light lg:bg-transparent lg:absolute': !ui.displayHeaderSearch && hasType, 'is-sticky fixed bg-light shadow-sm': ui.displayHeaderSearch || !hasType}">
      <div v-if="ui.displayMobileSearch" class="w-full">
        <Search :label="$t('text-search-label')" variant="minimal" />
      </div>
      <template v-else>
        <Logo class="mx-auto lg:mx-0" />
        <ProductTypeMenu class-name="ms-10 me-auto hidden xl:block" />
        <div class="hidden lg:block w-full">
          <div
            :class="{ 'w-full xl:w-11/12 2xl:w-10/12 mx-auto px-10 overflow-hidden': true, 'hidden': !ui.displayHeaderSearch && hasType, 'flex': ui.displayHeaderSearch || !hasType }"
          >
            <Search :label="$t('text-search-label')" variant="minimal" />
          </div>
        </div>
        <ul class="hidden lg:flex items-center flex-shrink-0 space-s-10">
          <li v-if="ui.isAuthorize" key="track-orders">
            <Link
              :href="ROUTES.ORDERS"
              class="font-semibold text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
            >
              {{ $t('nav-menu-track-order') }}
            </Link>
          </li>
          <li v-for="{ href, label, icon } in siteSettings.headerLinks" :key="`${href}${label}`">
            <NavLink activeClass="text-accent" :href="href" class="no-underline font-semibold flex items-center transition-colors duration-200 hover:text-accent focus:text-accent">
              <span v-if="icon" class="me-2">{{ icon }}</span>
              {{ $t(label) }}
            </NavLink>
          </li>
          <li v-if="ui.isAuthorize">
            <AuthorizedMenu />
          </li>
          <li v-else>
            <JoinButton />
          </li>
        </ul>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { ROUTES } from "@utils/routes";
import { siteSettings } from "@settings/site.settings";
import { loggedIn } from "@utils/is-loggedin";
import { types } from "@data/types";
import { useUIStore } from '@/stores/ui';
import Logo from "@components/ui/logo";
import Link from "@components/ui/link/link";
import NavLink from "@components/ui/link/nav-link";
import AuthorizedMenu from "@components/layout/navbar/authorized-menu";
import JoinButton from "@components/layout/navbar/join-button";
import ProductTypeMenu from "@components/layout/navbar/product-type-menu";
import Search from "@components/common/search";

const ui = useUIStore();

const data = {
    types
}

const route = useRoute();
const slugs = data.types.map((item) => item.slug);

const hasType = ref(route.params.category && slugs.includes(route.params.category));

</script>
