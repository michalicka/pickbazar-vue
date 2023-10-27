<template>
    <Scrollbar
      class="w-full h-full"
      :options="{ scrollbars: { autoHide: 'never' } }"
    >
      <div class="flex flex-col py-7 md:items-start md:justify-start w-full md:flex-row">
          <div v-for="item in data" :class="[ styles.progress_container ]" :key="item.id">
            <div
              :class="[ styles.progress_wrapper, status >= item.serial ? styles.checked : '' ]"
            >
              <div :class="[ styles.status_wrapper ]">
                  <div v-if="status >= item.serial" class="w-3 h-4">
                    <CheckMark class="w-full" />
                  </div>
                  <template v-else>
                    {{ item.serial }}
                  </template>
              </div>
              <div :class="[ styles.bar ]" />
            </div>

            <div class="flex flex-col items-start ms-5 md:items-center md:ms-0">
                <span v-if="item" class="text-base text-body-dark capitalize font-semibold text-start md:text-center md:px-2">
                  {{ item.name }}
                </span>
            </div>
          </div>
      </div>
    </Scrollbar>
</template>

<script setup>
import CheckMark from "@components/icons/checkmark";
import Scrollbar from "@components/ui/scrollbar";
import styles from "./progress-box.module.css";

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    status: {
        type: Number,
        default: null
    }
})
</script>
