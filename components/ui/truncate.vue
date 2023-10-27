<template>
    <span>
      {{ (value && value.length < character) || expanded ? value : _truncate(value, { length: character }) }}
        <template v-if="value && value.length > character && !expanded">
          <br />
          <span class="mt-1 inline-block">
            <a
              href="#"
              @click="toggleLines"
              :style="{ color: '#009e7f', fontWeight: 700 }"
            >
              {{ more ? more : $t('common:text-read-more') }}
            </a>
          </span>
        </template>
        <template v-if="value && value.length > character && expanded">
          <br />
          <span class="mt-1 inline-block">
            <a
              href="#"
              @click="toggleLines"
              :style="{ color: '#009e7f', fontWeight: 700 }"
            >
              {{ less ? less : $t('common:text-less') }}
            </a>
          </span>
        </template>
    </span>
</template>

<script setup>

const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    character: {
        type: Number,
        default: 150
    },
    more: {
        type: String,
        default: ''
    },
    less: {
        type: String,
        default: ''
    },
})

const expanded = ref(false);

const toggleLines = (event) => {
    event.preventDefault();
    expanded.value = !expanded.value;
};

</script>
