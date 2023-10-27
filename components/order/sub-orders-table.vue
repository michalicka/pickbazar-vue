<template>
    <div>
        <div class="rc-table rc-table-scroll-horizontal">
            <div class="rc-table-container">
                <div class="rc-table-content" style="overflow: auto hidden;">
                    <table style="width: 800px; min-width: 100%; table-layout: auto;">
                        <colgroup></colgroup>
                        <thead class="rc-table-thead">
                            <tr>
                                <th class="rc-table-cell" style="text-align: left;">Tracking Number</th>
                                <th class="rc-table-cell" style="text-align: left;">Date</th>
                                <th class="rc-table-cell" style="text-align: center;">Status</th>
                                <th class="rc-table-cell" style="text-align: center;">Item</th>
                                <th class="rc-table-cell" style="text-align: right;">Total Price</th>
                                <th class="rc-table-cell" style="text-align: right;"></th>
                            </tr>
                        </thead>
                        <tbody class="rc-table-tbody">
                            <tr 
                                aria-hidden="true" 
                                class="rc-table-measure-row" 
                                style="height: 0px; font-size: 0px;"
                            >
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                                <td style="padding: 0px; border: 0px; height: 0px;">
                                    <div style="height: 0px; overflow: hidden;">&nbsp;</div>
                                </td>
                            </tr>
                            <tr 
                                v-for="item in data"
                                :key="item.id"
                                :data-row-key="item.id" 
                                class="rc-table-row rc-table-row-level-0"
                            >
                                <td class="rc-table-cell" style="text-align: left;">
                                    {{ item.tracking_number }}
                                </td>
                                <td class="rc-table-cell" style="text-align: left;">
                                    {{ $dayjs(item.created_at).format("MMMM D, YYYY") }}
                                </td>
                                <td class="rc-table-cell" style="text-align: center;">
                                    <Badge :text="item.status.name" :style="{ backgroundColor: item.status.color }" />
                                </td>
                                <td class="rc-table-cell" style="text-align: center;">{{ formatString(item.products.length, $t('common:text-item')) }}
                                </td>
                                <td class="rc-table-cell" style="text-align: right;">
                                    <p>{{ price(item) }}</p>
                                </td>
                                <td class="rc-table-cell" style="text-align: right;">
                                    <Link
                                      :href="`${ROUTES.ORDERS}/${item.tracking_number}`"
                                      class="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-gray-700 text-light border border-transparent hover:bg-gray-900 px-4 py-0 h-10 text-sm"
                                    >
                                      {{ $t('text-view') }}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { formatString } from "@utils/format-string";
import { ROUTES } from "@utils/routes";
import Badge from "@components/ui/badge";
import Link from "@components/ui/link/link";

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
});

const price = (item) => {
    return usePrice({
      amount: +item.paid_total,
    }).price;
};



</script>
