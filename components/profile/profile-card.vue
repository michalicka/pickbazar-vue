<template>
    <div>
      <div
        :class="[ 'flex items-center md:hidden w-full bg-light border-b border-gray-300 py-4 px-6 sticky top-[55px] z-10', cardClassName ]"
      >
        <div class="w-16 h-16 rounded-lg relative mx-auto border border-gray-100 bg-gray-200 overflow-hidden me-4 flex-shrink-0">
          <Image
            :alt="$t('logo')"
            :src="data.logo.original ?? '/product-placeholder.svg'"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div class="w-full">
          <h3 class="text-base font-semibold text-heading">{{ data.name}}</h3>

          <button
            class="text-sm font-semibold transition text-accent hover:text-accent-hover"
            @click="handleMoreInfoModal"
          >
            {{ $t('text-more-info')}}
          </button>
        </div>
      </div>

      <aside
        :class="[ 'bg-light rounded h-full w-full md:w-80 2xl:w-96 hidden md:block flex-shrink-0', className ]"
      >
        <div class="max-h-full overflow-hidden">
          <Scrollbar :class="[ 'w-full', styles.scrollbar_height ]">
            <div class="w-full border-b border-gray-200 p-7 flex flex-col items-center">
              <div class="w-44 h-44 rounded-lg relative mx-auto border border-gray-100 bg-gray-200 overflow-hidden mb-8">
                <Image
                  :alt="$t('logo')"
                  :src="data.logo.original || '/product-placeholder.svg'"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 class="text-lg font-semibold text-heading mb-2">
                {{ data.name }}
              </h3>

              <p v-if="data.description" class="text-sm text-body mb-2 text-center leading-relaxed">
                <Truncate :character="70" :value="data.description" />
              </p>

              <div class="flex items-center justify-start mt-3">
                <a
                  v-for="(item, index) in data.settings.socials"
                  :key="index"
                  :href="item.url"
                  target="_blank"
                  class="`text-muted focus:outline-none me-6 last:me-0 transition-colors duration-300 hover:${item.hoverClass}`"
                >
                  <component :is="item.icon" class="w-4 h-4" />
                </a>
              </div>
            </div>

            <div class="p-7">
              <div class="mb-7 last:mb-0 flex flex-col">
                <span class="text-sm text-heading font-semibold mb-2">
                  {{ $t('text-address') }}
                </span>
                <span class="text-sm text-body">
                  {{ !_isEmpty(formatAddress(data.address)) ? formatAddress(data.address) : $t('common:text-no-address') }}
                </span>
              </div>

              <div class="mb-7 last:mb-0 flex flex-col">
                <span class="text-sm text-heading font-semibold mb-2">
                  {{ $t('text-phone') }}
                </span>
                <span class="text-sm text-body">
                  {{ data.settings.contact ? data.settings.contact : $t('text-no-contact') }}
                </span>
              </div>
              <div v-if="data.settings.website" class="flex flex-col">
                <span class="text-sm text-heading font-semibold mb-2">
                  {{ $t('text-website') }}
                </span>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-body">
                    {{ data.settings.website }}
                  </span>
                  <a
                    :href="data.settings.website"
                    target="_blank"
                    class="text-sm text-accent font-semibold hover:text-accent-hover focus:outline-none focus:text-accent-hover"
                  >
                    {{ $t('text-visit-site') }}
                  </a>
                </div>
              </div>
            </div>
          </Scrollbar>
        </div>
      </aside>
    </div>
</template>

<script setup>
import styles from "./profile-card.module.css";
import { useSelectedStore } from '@/stores/selected';
import { formatAddress } from "@utils/format-address";
import Scrollbar from "@components/ui/scrollbar";
import Image from "@components/ui/image";
import Truncate from "@components/ui/truncate";

const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    }, 
    className: {
        type: String,
        default: ''
    },
    cardClassName: {
        type: String,
        default: ''
    }
})

const { $eventBus } = useNuxtApp();
const store = useSelectedStore();

const handleMoreInfoModal = () => {
    store.setData(props.data);
    $eventBus.emit('modal:open', 'SHOP_INFO');
}

</script>
