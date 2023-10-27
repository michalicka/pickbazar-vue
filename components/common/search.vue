<template>
  <SearchBox
    :label="label"
    :value="searchTerm"
    name="search"
    :placeholder="$t('common:text-search-placeholder')"
    :on-submit="onSearch"
    :on-clear-search="clearSearch"
    @change="handleOnChange"
  />
</template>

<script setup>
import { ref } from "vue";
import SearchBox from "@components/ui/search-box";

const name = 'Search';

const searchTerm = ref('');

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: () => ''
  }
});

const onSearch = () => {
  console.log('TODO.search.onSearch');
}

const clearSearch = () => {
  console.log('TODO.search.clearSearch');
}

const handleOnChange = () => {
  console.log('TODO.search.handleOnChange');
}

</script>
