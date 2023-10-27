<template>
    <div class="rc-table orderDetailsTable w-full rc-table-fixed-header rc-table-scroll-horizontal">
        <div class="rc-table-container">
            <div class="rc-table-header" style="overflow: hidden;">
                <table style="table-layout: fixed;">
                    <colgroup>
                        <col style="width: 506px;">
                        <col style="width: 202px;">
                        <col style="width: 202px;">
                        <col style="width: 17px;">
                    </colgroup>
                    <thead class="rc-table-thead">
                        <tr>
                            <th title="Item" class="rc-table-cell rc-table-cell-ellipsis" style="text-align: left;"><span class="ps-20">Item</span></th>
                            <th class="rc-table-cell" style="text-align: center;">Quantity</th>
                            <th class="rc-table-cell" style="text-align: right;">Price</th>
                            <th class="rc-table-cell rc-table-cell-scrollbar"></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="rc-table-body" style="overflow: auto scroll; max-height: 500px;">
                <table style="width: 350px; min-width: 100%; table-layout: fixed;">
                    <colgroup>
                        <col style="width: 250px;">
                        <col style="width: 100px;">
                        <col style="width: 100px;">
                    </colgroup>
                    <tbody class="rc-table-tbody">
                        <tr aria-hidden="true" class="rc-table-measure-row" style="height: 0px; font-size: 0px;">
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
                            v-for="record in products"
                            :key="record.pivot.variation_option_id ? record.pivot.variation_option_id : record.created_at"
                            :data-row-key="record.pivot.variation_option_id ? record.pivot.variation_option_id : record.created_at" 
                            class="rc-table-row rc-table-row-level-0"
                        >
                            <td class="rc-table-cell rc-table-cell-ellipsis" style="text-align: left;">
                                <div class="flex items-center">
                                    <div class="w-16 h-16 flex flex-shrink-0 rounded overflow-hidden"><img :src="record.image.thumbnail || siteSettings.product.placeholderImage" :alt="name(record)" class="w-full h-full object-cover"></div>
                                    <div class="flex flex-col ms-4 overflow-hidden">
                                        <div class="flex mb-1"><span class="text-sm text-body truncate inline-block overflow-hidden">{{ name(record) }} x&nbsp;</span><span class="text-sm text-heading font-semibold truncate inline-block overflow-hidden">{{ record.unit }}</span></div>
                                        <span class="text-sm text-accent font-semibold mb-1 truncate inline-block overflow-hidden">{{ unitPrice(record) }}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="rc-table-cell" style="text-align: center;">
                                <p class="text-body">{{ record.pivot.order_quantity }}</p>
                            </td>
                            <td class="rc-table-cell" style="text-align: right;">
                                <p>{{ subtotalPrice(record) }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import usePrice from "@utils/use-price";
import { siteSettings } from "@settings/site.settings";

const props = defineProps({
    products: {
        type: Array,
        default: () => { }
    }
});

const name = (record) => {
    return record.pivot.variation_option_id
        ? `${record.name} - ` + record.variation_options.find((vo) => vo.id === record.pivot.variation_option_id)["title"]
        : record.name;
}

const unitPrice = (record) => {
    return usePrice({
      amount: +record.pivot.unit_price,
    }).price;
}

const subtotalPrice = (record) => {
    return usePrice({
      amount: +record.pivot.subtotal,
    }).price;
}

</script>
