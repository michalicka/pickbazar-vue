<template>
    <div>
        <div class="flex items-center justify-between mb-5 md:mb-8">
            <div class="flex items-center space-s-3 md:space-s-4">
                <span v-if="count" class="rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light">
                    {{ count }}
                </span>
                <p class="text-lg lg:text-xl text-heading capitalize">
                  {{ $t(heading) }}
                </p>
              </div>
              <button
                v-if="onAdd"
                class="flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover"
                @click="onAdd"
              >
                <PlusIcon class="w-4 h-4 stroke-2 me-0.5" />
                {{ $t('text-add')}}
                <span v-if="addActionText" class="hidden sm:inline-block sm:ms-1">
                  {{ $t(addActionText) }}
                </span>
              </button>
          </div>
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-if="items.length"
              v-for="(item, idx) in items"
              :key="item.id"
              :class="[ 'relative p-4 rounded border cursor-pointer group hover:border-accent', store.selected[heading] === idx ? 'border-accent shadow-sm' : 'bg-gray-100 border-transparent' ]"
              @click="() => select(item, idx)"
            >
              <p class="text-sm text-heading font-semibold mb-3 capitalize">
                {{ item.title }}
              </p>
              <p class="text-sm text-sub-heading">
                {{ item.description ? item.description : formatAddress(item.address) }}
              </p>
              <div class="absolute top-4 end-4 flex space-s-2 opacity-0 group-hover:opacity-100">
                  <button
                    v-if="onEdit"
                    class="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-light"
                    @click="() => onEdit(item)"
                  >
                    <span class="sr-only">{{ $t("text-edit") }}</span>
                    <PencilIcon class="w-3 h-3" />
                  </button>
                  <button
                    v-if="onDelete"
                    class="flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-light"
                    @click="() => onDelete(item)"
                  >
                    <span class="sr-only">{{ $t("text-delete") }}</span>
                    <CloseIcon class="w-3 h-3" />
                  </button>
              </div>
            </div>
            <div v-else class="relative px-5 py-6 text-body text-center bg-gray-100 rounded border border-border-200">
                {{ $t("text-no-address") }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSelectedStore } from '@/stores/selected';
import { formatAddress } from "@utils/format-address";
import PlusIcon from "@components/icons/plus-icon";
import PencilIcon from "@components/icons/pencil-icon";
import CloseIcon from "@components/icons/close-icon";

const props = defineProps({
    count: {
        type: Number,
        default: 0
    },
    heading: {
        type: String,
        default: ''
    },
    addActionText: {
        type: String,
        default: ''
    },
    items: {
        type: Array,
        default: () => []
    },
    onSelect: {
        type: Function
    },
    onAdd: {
        type: Function
    },
    onEdit: {
        type: Function
    },
    onDelete: {
        type: Function
    }
});

const store = useSelectedStore();

const select = (item, idx) => {
    store.setSelected(props.heading, idx);
    props.onSelect(item);
}

</script>
