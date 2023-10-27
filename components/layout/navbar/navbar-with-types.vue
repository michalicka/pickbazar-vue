<template>
  <header
    ref="navbarRef"
    :class="{ 'site-header-with-search w-full top-0 end-0 z-20 border-b border-gray-200 transition-shadow duration-300 bg-light': true, 'fixed lg:absolute': !ui.displayHeaderSearch, 'is-sticky fixed bg-light shadow-md': ui.displayHeaderSearch }"
  >
    <nav
      class="w-full h-14 md:h-16 lg:h-22 py-5 px-4 lg:px-8 flex justify-between items-center border-b border-gray-100"
    >
      <Logo class="mx-auto lg:mx-0" />

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
    </nav>

    <Waypoint class="flex items-center mx-auto w-full max-w-6xl space-x-6 h-20 md:h-24 px-5 overflow-x-auto" @change="onWaypointPositionChange">
        <button
          v-for="({ id, name, slug, icon }) in data.types"
          :key="id"
          type="button"
          @click="() => handleClick(`/${slug}`)"
          :class="{ 'flex items-center flex-shrink-0 bg-gray-100 text-sm font-semibold px-6 h-12 rounded-3xl border border-gray-200 text-heading focus:outline-none': true, '!border-gray-900': selectedMenu }"
        >
          <span v-if="icon" class="flex w-5 h-5 items-center justify-center">
            <component :is="icon" class="max-h-full max-w-full" />
          </span>
          <span class="ms-2">{{ name }}</span>
        </button>
    </Waypoint>
  </header>
</template>

<script setup>
import { types } from "@data/types";
import { loggedIn } from "@utils/is-loggedin";
import { siteSettings } from "@settings/site.settings";
import { ROUTES } from "@utils/routes";
import { useUIStore } from '@/stores/ui';
import Logo from "@components/ui/logo";
import Link from "@components/ui/link/link";
import NavLink from "@components/ui/link/nav-link";
import AuthorizedMenu from "@components/layout/navbar/authorized-menu";
import JoinButton from "@components/layout/navbar/join-button";

const data = {
    types
}

const ui = useUIStore();
const route = useRoute();
const router = useRouter();

const slugs = data.types.map((item) => item.slug);

const handleClick = (path) => {
    router.push(`/${siteSettings.defaultLanguage}${path}`);
}

const selectedMenu = ref(types.find((type) => route.path.includes(type.slug))); //TODO

const onWaypointPositionChange = (waypointState) => {
    ui.setDisplayHeaderSearch(waypointState.going === 'OUT');
}

</script>
