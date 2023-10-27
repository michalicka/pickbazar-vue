<template>
  <header ref="navbarRef" class="site-header h-14 md:h-16 lg:h-22">
    <nav class="h-14 md:h-16 lg:h-22 fixed w-full z-20 bg-light shadow-sm py-5 px-4 lg:px-5 xl:px-8 flex justify-between items-center">
      <Logo class="mx-auto lg:mx-0" />
      <ul class="hidden lg:flex items-center space-s-8">
        <li v-if="isAuthorize" key="track-orders">
          <Link
            :href="ROUTES.ORDERS"
            class="font-semibold text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
          >
            {{ $t("nav-menu-track-order") }}
          </Link>
        </li>
        <li v-for="{ href, label, icon } in siteSettings.headerLinks" :key="`${href}${label}`">
          <NavLink activeClass="text-accent" :href="href" class="no-underline font-semibold flex items-center transition-colors duration-200 hover:text-accent focus:text-accent">
            <span v-if="icon" class="me-2">{{ icon }}</span>
            {{ $t(label) }}
          </NavLink>
        </li>
        <li v-if="isAuthorize">
          <AuthorizedMenu />
        </li>
        <li v-else>
          <JoinButton />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { ROUTES } from "@utils/routes";
import { siteSettings } from "@settings/site.settings";
import { loggedIn } from "@utils/is-loggedin";
import Logo from "@components/ui/logo";
import Link from "@components/ui/link/link";
import NavLink from "@components/ui/link/nav-link";
import AuthorizedMenu from "@components/layout/navbar/authorized-menu";
import JoinButton from "@components/layout/navbar/join-button";
import ProductTypeMenu from "@components/layout/navbar/product-type-menu";
import Search from "@components/common/search";

const name = 'Navbar';

const isAuthorize = ref(loggedIn());

</script>
