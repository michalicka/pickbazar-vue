<template>
    <Spinner v-if="loading" :show-text="false" />
    <ErrorMessage v-else-if="error" :message="error.message" />
    <ProgressBox v-else :data="data.order_statuses.data" :status="status" />
</template>

<script setup>
import { orderStatus } from "@data/order-status"; //TODO
import ErrorMessage from "@components/ui/error-message";
import Spinner from "@components/ui/loaders/spinner/spinner";
import ProgressBox from "@components/ui/progress-box/progress-box";

const props = defineProps({
    status: {
        type: Number,
        default: null
    }
})

const loading = ref(false);
const error = ref(null);
const data = {
    order_statuses: orderStatus
}

</script>
