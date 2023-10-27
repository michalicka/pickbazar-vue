<template>
    <div v-for="(item, index) in items" :key="index">
        <div
          :class="[ 'border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base shadow-sm', activeClassName ]"
        >
          <header
            :initial="false"
            @click="() => setExpanded(index)"
            class="py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors"
          >
            <h2 class="text-sm md:text-base font-semibold leading-relaxed text-heading">
              {{ $t(item.title) }}
            </h2>
            <MinusIcon
              v-if="isOpen === index"
              class="flex-shrink-0 stroke-2"
              :width="18"
              :height="18"
            />
            <PlusIcon 
              v-else 
              class="flex-shrink-0 stroke-2" 
              :width="20"
              :height="20"
            />
          </header>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
              <div
                v-if="isOpen === index"
                key="content"
                initial="from"
                animate="to"
                exit="from"
              >
                <div class="md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark">
                  {{ $t(item.content) }}
                </div>
              </div>
          </Transition>
        </div>
    </div>
</template>

<script setup>
import PlusIcon from "@components/icons/plus-icon";
import MinusIcon from "@components/icons/minus-icon";

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    },
    activeClassName: {
        type: String,
        default: ''
    }
})

const isOpen = ref(0);

const setExpanded = (index) => {
    isOpen.value = isOpen.value === index ? -1 : index;
}

</script>
