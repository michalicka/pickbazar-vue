<template>
  <div>
    <Popover class="relative">
      <PopoverButton>
        <button
          type="button"
          class="flex items-center focus:outline-none"
          aria-label="toggle profile dropdown"
        >
          <Avatar
            :src="_get(data, 'me.profile.avatar.thumbnail', '/avatar-placeholder.svg')"
            :title="data.me.name"
          />
          <span class="sr-only">{{ $t('user-avatar') }}</span>
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
        <PopoverPanel class="absolute right-0 py-4 w-48 bg-light rounded shadow-700 z-20">
          <Scrollbar class-name="w-full h-full" :options="{ scrollbars: { autoHide: 'never' } }">
            <ul>
              <li v-for="({href, label}) in siteSettings.authorizedLinks" :key="`${href}${label}`">
                <button
                  @click="() => handleClick(href)"
                  class="block w-full py-2.5 px-6 text-sm text-start font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none"
                >
                  {{ $t(label) }}
                </button>
              </li>
            </ul>
          </Scrollbar>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { user } from "@data/me"; //TODO
import { siteSettings } from "@settings/site.settings";
import Avatar from "@components/ui/avatar";
import Scrollbar from "@components/ui/scrollbar";

const data = { me: user };

const router = useRouter();

const handleClick = (href) => {
    router.push(href);
}

</script>
