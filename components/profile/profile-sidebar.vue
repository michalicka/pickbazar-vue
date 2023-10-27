<template>
    <aside class="bg-light rounded border border-border-200 overflow-hidden">
      <ul class="py-8">
        <li 
            v-for="(item, idx) in siteSettings.dashboardSidebarMenu.slice(0, -1)"
            class="py-2" 
            :key="idx"
        >
          <NavLink
            :href="item.href"
            active-class="border-accent text-accent"
          >
            <a class="block py-2 px-10 font-semibold text-heading transition-colors border-l-4 border-transparent hover:text-accent focus:text-accent">
              {{ $t(item.menulabel) }}
            </a>
          </NavLink>
        </li>
      </ul>

      <ul class="bg-light border-t border-border-200 py-4">
        <li   
          v-for="(item, idx) in siteSettings.dashboardSidebarMenu.slice(-1)"
          class="py-2" 
          :key="idx"
        >
          <NavLink
            :href="item.href"
            active-class="border-l-4 border-accent text-accent"
          >
            <a class="block py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent">
              {{ $t(item.menulabel) }}
            </a>
          </NavLink>
        </li>
      </ul>
    </aside>
</template>

<script setup>
import { siteSettings } from "@settings/site.settings";
import NavLink from "@components/ui/link/nav-link";

</script>
