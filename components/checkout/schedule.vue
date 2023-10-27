<template>
    <SectionWithCardGroup
      :count="count"
      heading="text-delivery-schedule"
      :items="siteSettings.deliverySchedule"
      :on-select="handleSelect"
    />
</template>

<script setup>
import { siteSettings } from "@settings/site.settings";
import SectionWithCardGroup from "@components/common/section-with-card-group";

const props = defineProps({
    count: {
        type: Number,
        default: 0
    }
});

const handleSelect = (item) => {
    console.log('TODO.schedule.handleSelect');
}

</script>
