<template>
    <Link :href="`${ROUTES.SHOPS}/${shop.slug}`">
      <div class="flex items-center p-5 border border-gray-200 rounded cursor-pointer relative">
        <span v-if="isNew" class="text-xs text-light px-2 py-1 rounded bg-blue-500 absolute top-2 end-2">
          {{ $t('common:text-new') }}
        </span>
        <div class="w-16 h-16 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
          <Image
            :alt="$t('common:text-logo')"
            :src="shop.logo.thumbnail || '/product-placeholder.svg'"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div class="flex flex-col ms-4">
          <span class="text-lg font-semibold text-heading mb-2">
            {{ shop.name }}
          </span>
          <span class="text-xs text-body flex">
            <MapPin class="w-3.5 h-3.5 me-1 text-muted flex-shrink-0" />

            {{ !_isEmpty(formatAddress(shop.address)) ? formatAddress(shop.address) : $t("common:text-no-address") }}

          </span>
        </div>
      </div>
    </Link>
</template>

<script setup>
import { ROUTES } from "@utils/routes";
import { formatAddress } from "@utils/format-address";
import Link from "@components/ui/link/link";
import Image from "@components/ui/image";
import MapPin from "@components/icons/map-pin";

const props = defineProps({
    shop: {
        type: Object,
        default: () => { }
    }
})

const isNew = ref(false);

</script>
