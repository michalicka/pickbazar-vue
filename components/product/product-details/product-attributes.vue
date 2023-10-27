<template>
    <div
      v-for="(variationName, index) in Object.keys(variations)"
      :key="index"
      class="py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center"
    >
      <span class="text-sm font-semibold text-heading leading-none capitalize me-4 min-w-[60px] inline-block">
        {{ variationName }}:
      </span>

      <div class="w-full flex space-s-4 overflow-x-auto">
          <RadioGroup
            v-for="attribute in variations[variationName]"
            :key="attribute.id"
            :className="variationName"
            :color="attribute.meta ? attribute.meta : (attribute.value || '')"
            :label="attribute.value"
            :active="attributes[variationName] === attribute.value"
            :onClick="() => setAttributes(variationName, attribute)"
          />
      </div>
    </div>
</template>

<script setup>
import RadioGroup from "@components/ui/radio-group";

const props = defineProps({
  variations: {
    type: Object,
    default: () => { }
  },
  attributes: {
    type: Object,
    default: () => { }
  },
  setAttributes: {
    type: Function,
    default: () => { }
  }
})

</script>
